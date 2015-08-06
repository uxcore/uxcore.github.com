require('highlight.js/styles/github-gist.css');
require('./style/kuma/dist/uxcore-kuma.css');
require('./style/index.less');
var hljs = require('highlight.js');

window.UXCORE = {
	'uxcore-calendar': require('uxcore-calendar')
};

/*
 * init code highlighter
 */
 window.onload = function(){
	Array.prototype.forEach.call(document.querySelectorAll('.markdown pre code'), function(node, index){
		hljs.highlightBlock(node);
	});
 }
