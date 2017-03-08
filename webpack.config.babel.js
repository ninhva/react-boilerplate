var path = require('path');
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const ENV = process.env.NODE_ENV || 'development';

var config = {
  context: path.join(__dirname),
  entry: {
    app: [
      './src/index.js',
      'global_styles/_main.scss'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|eot|ttf|woff|svg|less)/,
        loader: 'file-loader'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.(scss|css)$/,
        include: /components\/partials\//,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      }, {
        test: /\.(scss|css)$/,
        exclude: /components\/partials\//,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        })
      }, {
        test: /modernizr\.min\.js$/,
        loader: "imports?this=>window,html5=>window.html5!exports?window.Modernizr"
      }
    ],
  },
  resolve: {
    extensions: [
      '*', '.scss', '.js', '.json'
    ],
    modules: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ],
    alias: {
      'base': path.resolve(__dirname, './src/'),
      'components': path.resolve(__dirname, './src/components/'),
      'assets': path.resolve(__dirname, './src/assets/'),
      'global_styles': path.resolve(__dirname, './src/assets/styles/'),
      'constants': path.resolve(__dirname, './src/constants'),
      'api': path.resolve(__dirname, './src/api/'),
      'app': path.resolve(__dirname, './src/components/app'),
      'pages': path.resolve(__dirname, './src/components/pages'),
      'layout': path.resolve(__dirname, './src/components/layout'),
      'modules': path.resolve(__dirname, './src/components/modules')
    }
  },
  plugins: ([
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: ENV,
      options: {
        context: __dirname
      }
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/', 'index.html'),
      favicon: path.resolve('./src/', 'assets/images/favicon.ico'),
      minify: {
        collapseWhitespace: true
      }
    })
    // new webpack.HotModuleReplacementPlugin()
  ]),
  devtool: ENV === 'production' ? 'source-map' : 'source-map',
  devServer: {
    port: process.env.PORT || 3000,
    contentBase: './',
    historyApiFallback: true
  }
};
module.exports = config;