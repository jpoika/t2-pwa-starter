var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    PathRewriterPlugin = require('webpack-path-rewriter');
var StringReplacePlugin = require("string-replace-webpack-plugin");
var appConfig = require('./app.config.js');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        //'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server',
        "./src/index.tsx"
    ],

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, use: ['awesome-typescript-loader'] },

            {
                test: /\.(png|gif|jpe?g|svg|pdf)$/i,
                use: ['url-loader?limit=2']
            },
            {
                test: /\.css$/,
                use: [ 'file-loader' ]
            },
            {
              test: /\.(html|json)$/,
              loader: PathRewriterPlugin.rewriteAndEmit({
                name: '[name].[ext]'
              })
            },
            { 
                test: /\.(html|json)$/,
                loader: StringReplacePlugin.replace({
                    replacements: [
                        {
                            pattern: /<!-- @app_build (\w*?) -->/ig,
                            replacement: function (match, p1, offset, string) {
                                return appConfig[p1];
                            }
                        }
                    ]})
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify('dev')
          },
          '__DEVTOOLS__': true,
          '__IS_CORDOVA_BUILD__': false,
          '__REDUX_PERSIST_PREFIX__': JSON.stringify(appConfig.dbPrefix),
          '__APP_VERSION__': JSON.stringify(appConfig.version),
          '__APP_TYPE__': JSON.stringify(appConfig.appType)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new PathRewriterPlugin()
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        //"babylonjs": "BABYLON"
    }, */
};