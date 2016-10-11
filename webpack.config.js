var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var pkg = require('./package');

module.exports = {
    entry: {
        uxcore: './index.js',
        builder: './theme/builder/index.js',
        setting: './theme/js/setting.js'
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
    
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },

    module: {
        loaders: [
            {
                test: /\.js(x)*$/,
                // node_modules目录下都不需要过babel了
                exclude: function (path) {
                    var isNpmModule = !!path.match(/node_modules/);
                    return isNpmModule;
                },
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015-ie', 'stage-0'],
                    plugins: [
                        'transform-es3-member-expression-literals',
                        'transform-es3-property-literals',
                        'add-module-exports',
                    ],
                    cacheDirectory: false,
                }
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            columns: false
        }),
    ]
};
