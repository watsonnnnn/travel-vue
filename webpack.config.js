const path = require('path');
const webpack = require('webpack');
const nib = require('nib');

module.exports = {
  entry: {
    index: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
        },
      ],
    }, {
      test: /\.styl$/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            // modules: true,
          },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'stylus-loader',
        },
      ],
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {},
        // other vue-loader options go here
      },
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limt: 8192, // 8kb
        name: '[path][name].[ext]?[hash]',
      },
    },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        test: /\.styl$/,
        stylus: {
          use: [nib()],
          import: [path.join(__dirname, './src/assets/styles/global.styl')],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      styles: path.join(__dirname, 'src/assets/styles'),
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}
