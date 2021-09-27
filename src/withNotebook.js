const { initNotebookjs } = require("./notebook-loader")

module.exports =
  (pluginOptions = {}) =>
  (nextConfig = {}) => {
    const extension = pluginOptions.extension || /\.ipynb$/

    initNotebookjs(pluginOptions.options?.inner)

    return Object.assign({}, nextConfig, {
      webpack(config, options) {
        config.module?.rules?.push({
          test: extension,
          use: [
            options.defaultLoaders.babel,
            {
              loader: "notebook-loader",
              options: pluginOptions.options?.outer,
            },
          ],
        })

        return nextConfig.webpack ? nextConfig.webpack(config, options) : config
      },
    })
  }
