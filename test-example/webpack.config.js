module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: "index.js"
  },
  devServer: {
    port: 5555,
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['babel-plugin-transform-decorators-legacy']
        }
      }
    ]
  }
}