const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: 'main.js'
  }
};
