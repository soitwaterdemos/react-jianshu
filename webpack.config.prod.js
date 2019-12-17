const ArcGISPlugin = require("@arcgis/webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
const paths = require('./config/paths');
const webpack = require('webpack');
module.exports = {
  entry: {
    priority: require.resolve('./config/polyfills'),
    main: paths.appIndexJs,
    vendor: ['react', 'react-dom', 'antd']
  },
  output: {
    path: paths.appBuild,
    filename: "[name].[hash:8].js",
    publicPath: paths.servedPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: paths.appNodeModules,
        include: paths.appSrc,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        oneOf: [
          {
            test: /\.(png|gif|jpg|jpeg|bmp|svg)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  // Inline files smaller than 10 kB (10240 bytes)
                  limit: 10 * 1024
                }
              }
            ]
          },
          {
            test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/i,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "fonts/[name].[ext]"
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            include: [
              paths.appSrc + "/assets/styles/Map"
            ]
          },
          {
            test: /\.css$/,
            exclude: [paths.appSrc + "/assets/styles/Map"],
            use: [
              "style-loader",
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  config: {
                    path: "./postcss.config.js"
                  }
                }
              }
            ]
          },
          {
            test: /\.less$/,
            include: [paths.appSrc],
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  config: {
                    path: "./postcss.config.js"
                  }
                }
              },
              "less-loader"
            ],
            exclude: paths.appNodeModules
          }
        ]
      }
    ]
  },
  mode: 'production',
  optimization: {
    flagIncludedChunks: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new ArcGISPlugin({
      useDefaultAssetLoaders: false,
      features: {
        "3d": false
      }
    }),
    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery", 
    //     "window.jQuery": "jquery"
    // }) ,
    new HtmlWebPackPlugin({
      inject: true,
      template: paths.appHtml,
      configPath: './config/ApiConfigure.js',
      detectionJsPath: './VersionDetection/VersionDetection.js',
      detectionCssPath: './VersionDetection/VersionDetection.css',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      filename: "./index.html",
      favicon: paths.appPublic + '/favicon.ico',
      chunksSortMode: (chunk1, chunk2) => {//'none'
        //let order = ['priority', 'vendor', 'main', 'styleCss', 'styleLess'];
        let order = ['priority', 'vendor', 'main'];
        let order1 = order.indexOf(chunk1.names[0]);
        let order2 = order.indexOf(chunk2.names[0]);
        return order1 - order2;
      },
      meta: {
        viewport:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      }
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css"
    }),
    new CopyWebpackPlugin([{
      from: paths.appSrc + '\\configure\\api\\ApiConfigure.js',
      to: paths.appBuild + '\\config\\ApiConfigure.js',
      force: true
    },
    {
      from: paths.appSrc + '\\VersionDetection',
      to: paths.appBuild + '\\VersionDetection',
      force: true
    }
    ], {
      debug: 'debug'
    })
  ],
  resolve: {
    modules: [paths.appSrc, paths.appNodeModules],
    extensions: [".js", ".jsx"],
    alias: {
      Shared: path.resolve("./src/components/Shared/"),
      Components: path.resolve("./src/components/"),
      Constants: path.resolve("./src/constants/"),
      Assets: path.resolve("./src/assets/"),
      Styles: path.resolve("./src/styles/"),
      Utils: path.resolve("./src/utils/"),
      Views: path.resolve("./src/views/"),
      Redux: path.resolve("./src/redux/"),
      Plugins: path.resolve("./src/plugins/"),
      Configure: path.resolve("./src/configure/"),
      Layout: path.resolve("./src/layout/"),
      Src: path.resolve("./src/")
    }
  },
  devtool: "eval",
  externals: [
    (context, request, callback) => {
      if (/pe-wasm$/.test(request)) {
        return callback(null, "amd " + request);
      }
      callback();
    }
  ],
  node: {
    process: false,
    global: false,
    os: true,
    fs: "empty"
  }
};
