const path = require('path');

const SRC_DIR = path.join(__dirname, 'client' ,'src');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    fileName: 'app.js'
  },
  module: {
    rules: [
      // first Rule
      // get the JS and JSX files loaded and finished
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // second rule
      // get the SASS files loaded and prepped from https://webpack.js.org/loaders/sass-loader/
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Create 'styles node from JS strings
          "style-loader",
          // Translates CSS into commonJS
          "css-loader",
          // compile Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
}