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
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'jquery': {
            root: 'jQuery',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        }
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract(
                'css?sourceMap&-minimize!autoprefixer-loader!less?sourceMap'
            )
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'css'
            )
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=image/svg+xml'
        }]
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devtool: 'source-map'
};
