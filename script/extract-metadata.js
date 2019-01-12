// Generate src/entries.ts

const path = require("path")
const fs = require("fs")

const del = require("del")
const glob = require("glob")
const webpack = require("webpack")

const PROJECT_ROOT = path.join(__dirname, "../")
const PAGES_DIR = path.join(PROJECT_ROOT, "pages")

async function compileMdx(filepaths, outputPath) {
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
          path: outputPath,
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

function loadMetadata(filepaths, baseDir) {
  return filepaths.map(filepath => ({
    href: getPagePath(filepath, baseDir),
    ...require(filepath).meta,
  }))
}

function getPagePath(filepath, baseDir) {
  return filepath.substr(baseDir.length).split(".")[0]
}

function writeMetadata(metadata, filepath) {
  fs.writeFileSync(filepath, `export default ${JSON.stringify(metadata)}`)
}

async function main() {
  const outputDir = path.join(PROJECT_ROOT, "tmp")
  del.sync(outputDir)
  const mdxFilepaths = glob.sync(path.join(PROJECT_ROOT, "pages/blog/**/*.mdx"))
  await compileMdx(mdxFilepaths, outputDir)
  const jsFilepaths = glob.sync(path.join(outputDir, "**/*.js"))
  const metadata = loadMetadata(jsFilepaths, outputDir)
  writeMetadata(metadata, path.join(PROJECT_ROOT, "src/entries.ts"))
}

main()
