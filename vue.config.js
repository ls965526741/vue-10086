const name = '10086' // page title

module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  configureWebpack: {
    devtool: 'eval-source-map',
    name: name
  }
}
