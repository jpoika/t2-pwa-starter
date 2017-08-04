var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    PathRewriterPlugin = require('webpack-path-rewriter')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OfflinePlugin = require('offline-plugin');  
const buildPath = path.resolve(__dirname, 'dist'); 
const baseConfig = require('./webpack.config.js')

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    entry: [
        'babel-polyfill',
        "./src/index.tsx"
    ],

    output: {
        filename: "bundle.js",
        path: buildPath
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    resolve: baseConfig.resolve,

    module: baseConfig.module,

    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          },
          '__DEVTOOLS__': false,
          '__IS_CORDOVA_BUILD__': false,
          '__REDUX_PERSIST_PREFIX__': JSON.stringify('changeMeProd:'),
          '__APP_VERSION__': JSON.stringify('1.0.0')
        }),

        new CleanWebpackPlugin(['dist'], {
        //  root: '/full/project/path',
        //  verbose: true,
        //  dry: false,
        //  exclude: ['shared.js']
        }),

        new webpack.optimize.CommonsChunkPlugin({
          children: true, // Look for common dependencies in all children,
          minChunks: 2 // How many times a dependency must come up before being extracted
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new PathRewriterPlugin(),
        new OfflinePlugin({
          excludes: ['**/.*', '**/*.map','stats.json']
        })
    ]
};