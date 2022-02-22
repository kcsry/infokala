const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const pug = require('pug');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, 'infokala', 'static_src');
const staticsPath = path.join(__dirname, 'infokala', 'static', 'infokala');

module.exports = function (env, argv) {
  const isProd = !!env.production;
  return {
    devtool: isProd ? 'source-map' : 'eval',
    context: sourcePath,
    entry: {
      infokala: 'infokala/infokala.js',
    },
    output: {
      path: staticsPath,
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.stylus/,
          use: ['style-loader', 'css-loader', 'stylus-loader'],
        },
        {
          test: /\.(woff|ttf|eot|svg|png|jpeg)/,
          use: ['url-loader?name=[name].[hash:6].[ext]&limit=10000'],
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
      modules: [path.resolve(__dirname, 'node_modules'), sourcePath],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'infokala/infokala.pug',
            to: 'infokala.html',
            transform: (content, path) => {
              return pug.render(content, { compileDebug: !isProd }, path);
            },
          },
        ],
      }),
    ],
  };
};
