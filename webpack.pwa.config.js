/**
 * @file webpack.pwa.config.tsx
 * File configures webpack for PWA.
 *
 * Created by Jack LightFoot on 08/22/2017
 *
 * T2 PWA Starter
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    PathRewriterPlugin = require('webpack-path-rewriter')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
const buildPath = path.resolve(__dirname, 'dist');
const baseConfig = require('./webpack.config.js')

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var appConfig = require('./app.config.js');
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
          '__REDUX_PERSIST_PREFIX__': JSON.stringify(appConfig.dbPrefix),
          '__APP_VERSION__': JSON.stringify(appConfig.version),
          '__APP_TYPE__': JSON.stringify(appConfig.appType),
          '__APP_NAME__': JSON.stringify(appConfig.name)
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
