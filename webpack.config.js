var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var pkg = require('./package');

module.exports = {
    entry: {
        uxcore: './index.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: path.join(process.cwd(), 'theme/static'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },

    externals: {
        react: 'var React',
        rangy: 'var rangy',
        'react-dom': 'var ReactDOM'
    },

    module: {
        loaders: [{

            test: /\.js(x)*$/,
            // uxcore以外的modules都不需要经过babel解析
            exclude: function (path) {
                var isNpmModule = !!path.match(/node_modules/);
                var isUxcore = !!path.match(/node_modules\/uxcore/) || !!path.match(/node_modules\/@ali\/uxcore/);
                return isNpmModule & !isUxcore;
            },
            loader: 'babel-loader?stage=1'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        // }, {
        //     test: /\.less$/,
        //     loader: ExtractTextPlugin.extract(
        //         'css?sourceMap&-minimize!autoprefixer-loader!less?sourceMap'
        //     )
        // }, {
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract(
        //         'css'
        //     )
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=image/svg+xml'
        }]
    },

    // plugins: [
    //     new ExtractTextPlugin('[name].css')
    // ],

    devtool: 'eval'
};
