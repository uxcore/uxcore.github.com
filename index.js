require('highlight.js/styles/github-gist.css');
require('./style/kuma/dist/uxcore-kuma.css');
require('./style/index.less');
var hljs = require('highlight.js');

/*
 * init code highlighter
 */
Array.prototype.forEach.call(document.querySelectorAll('#J-markdown pre code'), function(node, index){
	hljs.highlightBlock(node);
});
