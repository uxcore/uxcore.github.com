var path = require('path');
var package = require('./package');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config');
var webpackCompiler = webpack(webpackConfig);
var handler;

// {{ settings for nico
exports.site = {
    name: package.name,
    description: package.description,
    repo: package.repository.url,
    issues: package.bugs.url,
    homeLink: '/css/base/',
    navigation: [
        {
            text: '开始使用',
            link: '/start/base/',
            id: 'start'
        },
        {
            text: '样式',
            link: '/css/base/',
            id: 'css'
        },
        {
            text: '组件',
            link: '/components/button/',
            id: 'components'
        },
        {
            text: '场景',
            link: '/scene/list/',
            id: 'scene'
        }
    ],
    features: [
        {name: 'pxreact2', title: '数据驱动', des: '基于 React，数据自动绑定到视图，无需同时操作'}, 
        {name: 'zuocechilun', title: '组件化', des: '使用低耦合、高复用的 UI 组件构建页面'}, 
        {name: 'zhexiantu', title: '高效', des: '针对表格、表单等后台常用场景，成倍提高页面构建效率'}, 
        {name: 'shejiguifan2', title: '规范', des: '来自阿里巴巴信息平台沉淀的视觉规范，大气美观'}, 
        {name: 'xitongdingzhi', title: '定制化', des: '在视觉规范的基础上，基于不同产品定位，提供定制化皮肤'}, 
        {name: 'maintain', title: '可靠', des: '整合 React、Babel、Reflux 等开源技术，一整套开发调试方案'}
    ],
    urlPrefix: ''
};
exports.engine = 'jade';
exports.package = package;
exports.theme = 'theme';
exports.source = path.join(process.cwd(), 'site');
exports.output = path.join(process.cwd(), '_site');
exports.permalink = '{{directory}}/{{filename}}';
exports.ignorefilter = function(filepath, subdir, filename) {
    return true;
};
exports.middlewares = [{
    name: 'webpackDevMiddleware',
    filter: /\.(js|css)(\.map)?$/,
    handle: function(req, res, next) {
        handler = handler || webpackMiddleware(webpackCompiler, {
            publicPath: '/static/',
            lazy: true,
            stats: {
                hash: false,
                cached: false,
                cachedAssets: false,
                colors: true
            }
        });
        try {
            return handler(req, res, next);
        } catch(e) {}
    }
}];
exports.writers = [
    'nico-jsx.PageWriter',
    'nico-jsx.StaticWriter',
    'nico-jsx.FileWriter'
];
// end settings }}

process.on('uncaughtException', function(err) {
    console.log(err);
});
