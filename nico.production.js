var nicoConfig = require('./nico');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.min');
var webpackCompiler = webpack(webpackConfig);

// nicoConfig.site.urlPrefix = '';
nicoConfig.site.urlPrefix = '//g.alicdn.com/uxcore/site';
nicoConfig.middlewares = [{
    name: 'webpackDevMiddleware',
    filter: /\.(js|css)(\.map)?$/,
    handle: function(req, res, next) {
        handler = handler || webpackMiddleware(webpackCompiler, {
            publicPath: '/static/',
            lazy: true,
            stats: {
                version: true,
                hash: false,
                cached: false,
                cachedAssets: false,
                colors: true,
                timings: true
            }
        });
        try {
            return handler(req, res, next);
        } catch(e) {}
    }
}];

module.exports = nicoConfig;
