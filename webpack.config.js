const path = require('path');

module.exports = function (_env, argv) {
  return {
    mode: 'production',
    entry: './src/react_bargraph.jsx',
    output: {
      path: path.resolve(__dirname, 'react_bargraph'),
      filename: 'react_bargraph.js',
      library: 'react_bargraph',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              envName: 'production',
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          resourceQuery: /url-loader/,
          use: {
            loader: 'url-loader',
          }
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
};