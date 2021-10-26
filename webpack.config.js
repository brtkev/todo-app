const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsRules = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: { 
      presets: [ 
        ['@babel/preset-react', { runtime: 'automatic'}]
      ]
    }
  }

const cssRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader','postcss-loader']
}

const assetRule = {
  test: /\.png$/,
  type: 'asset'      
}

const rules = [jsRules, cssRules, assetRule]
module.exports = (env, argv) => {
  const {mode} = argv;
  const isProduction = mode === 'production';
  return {
    // entry: './src/index.js',
    output : {
      filename : isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({template: 'public/index.html'})
    ],
    module : {
      rules
    },
    devServer: {
      open: true,
      port: 3000,
      compress: true
    }
  }
}