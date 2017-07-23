const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const pug = require('pug');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const sourcePath = path.join(__dirname, 'infokala', 'static_src');
const staticsPath = path.join(__dirname, 'infokala', 'static', 'infokala');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
      return module.context && module.context.indexOf("node_modules") !== -1;
    },
    filename: 'vendor.js'
  }),
  new CopyWebpackPlugin([
    {
      from: 'infokala/infokala.pug',
      to: 'infokala.html',
      transform: (content, path) => {
        return pug.render(content, { compileDebug: !isProd }, path);
      }
    },
  ]),
];

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  );
}

module.exports = {
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.stylus/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(woff|ttf|eot|svg|png|jpeg)/,
        use: [
          'url-loader?name=[name].[hash:6].[ext]&limit=10000',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  },
  plugins,
};
