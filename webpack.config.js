const webpack = require('webpack');
const path = require('path');
const PrettierPlugin = require("prettier-webpack-plugin");

// Production Prep
// - set mode to production
// - disable redux devtool /reducers/initStore
// - build with prettier enabled
// - commit


const js_path = path.resolve(__dirname, 'src/js/');
const out_path = path.resolve(__dirname, "dist/");
module.exports = {
  entry: js_path + '/index.js', // where webpack starts bundle
  // change to 'production' for production build
  mode: 'development',
  output: {
    path: out_path,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: out_path,
    compress: true,
    disableHostCheck: true,
    port: 9000
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  devtool:'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.sass$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
        }
    }]
}
    ]
  },
  plugins: [
  new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
  }),
  new webpack.ProvidePlugin({
    Snackbar: "node-snackbar"
  }),
  // Uncomment for production build
  // new PrettierPlugin()
  ]
};
