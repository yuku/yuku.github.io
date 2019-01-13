#!/usr/bin/env node

// Generate src/entries.ts
//
// Usage: extract-metadata.js [-w]

const path = require("path")
const fs = require("fs")

const chokidar = require("chokidar")
const debounce = require("lodash.debounce")
const del = require("del")
const glob = require("glob")
const webpack = require("webpack")
const prettier = require("prettier")

const PROJECT_ROOT = path.join(__dirname, "../")
const PAGES_DIR = path.join(PROJECT_ROOT, "pages")
const TMP_OUTPUT_DIR = path.join(PROJECT_ROOT, "tmp")
const ENTRIES_PATH = path.join(PROJECT_ROOT, "src/entries.ts")

// Metadata for just created blog entry
const DEFAULT_METADATA = {
  publishedAt: "2099-12-31T23:59:59+09:00",
  tags: ["Tag"],
  title: "Created article",
}

// Compile the given mdx files and write js files to tmp output dir.
async function compileMdx(filepaths) {
  return new Promise((resolve, reject) => {
    webpack(
      {
        // entry: {
        //   "0-foo": "/path/to/pages/blog/2018/12/foo.mdx",
        //   "1-bar": "/path/to/pages/blog/2019/01/bar.mdx",
        //   ...
        // }
        entry: filepaths.reduce(
          (memo, entry) => ({
            [getPagePath(entry, PAGES_DIR)]: entry,
            ...memo,
          }),
          {},
        ),
        output: {
          filename: "[name].js",
          path: TMP_OUTPUT_DIR,
          libraryTarget: "commonjs",
        },
        resolve: {
          extensions: [".js", ".ts", ".tsx", ".scss"],
        },
        module: {
          rules: [
            {
              test: /\.mdx$/,
              use: ["babel-loader", "@mdx-js/loader"],
            },
            {
              test: /.tsx?$/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-typescript"],
                  },
                },
              ],
            },
            {
              test: /.scss$/,
              use: ["null-loader"],
            },
          ],
        },
        mode: "development",
      },
      (err, stats) => {
        process.stdout.write(stats.toString() + "\n")
        if (err || stats.hasErrors()) {
          return reject()
        }
        resolve()
      },
    )
  })
}

function getPagePath(filepath, baseDir) {
  return filepath.substr(baseDir.length).split(".")[0]
}

// Extract metadata from tmp files then write src/entries.ts.
async function writeMetadata() {
  const jsFilepaths = glob.sync(path.join(TMP_OUTPUT_DIR, "**/*.js"))
  const metadata = jsFilepaths
    .map(filepath => {
      const d = require(filepath)
      delete require.cache[require.resolve(filepath)]
      return {
        href: getPagePath(filepath, TMP_OUTPUT_DIR),
        ...(d && d.meta ? d.meta : DEFAULT_METADATA),
      }
    })
    .sort((a, b) => a.publishedAt < b.publishedAt)
  const options = await prettier.resolveConfig(ENTRIES_PATH)
  const formatted = prettier.format(`export default ${JSON.stringify(metadata)}`, {
    parser: "babylon",
    ...options,
  })
  fs.writeFileSync(ENTRIES_PATH, formatted)
}

async function compileSingle(pathname) {
  console.log(`Compile: ${pathname}`)
  await compileMdx([pathname])
  writeMetadata()
}

function unlinked(pathname) {
  const tmpFilepath = path.join(TMP_OUTPUT_DIR, `${getPagePath(pathname, PAGES_DIR)}.js`)
  fs.unlink(tmpFilepath, () => writeMetadata())
}

async function main(argv) {
  if (argv[0] && argv[0] !== "-w") {
    throw new Error(`Unknown option: ${argv}`)
  }

  const mdxGlob = path.join(PROJECT_ROOT, "pages/blog/**/*.mdx")

  // Compile all mdx files
  del.sync(TMP_OUTPUT_DIR)
  const mdxFilepaths = glob.sync(mdxGlob)
  await compileMdx(mdxFilepaths)
  writeMetadata()

  if (argv[0]) {
    // Start watching
    const watcher = chokidar.watch(mdxGlob, { ignoreInitial: true })
    watcher
      .on("add", compileSingle)
      .on("change", debounce(compileSingle, 1000, { leading: true, trailing: false }))
      .on("unlink", unlinked)
    console.log("Start watching")
  }
}

main(process.argv.slice(2))
