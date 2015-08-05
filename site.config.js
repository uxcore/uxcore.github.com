var webpack = require('webpack')

module.exports = {
    entry: './site/src/site.js',
    output: {
        path         : __dirname + '/site/src',
        filename     : 'bundle.js'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    plugins: [
        //needed to supress vertx warning in es6-promise (Promise polyfill)
        new webpack.IgnorePlugin(/vertx/)
    ],
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    }
}