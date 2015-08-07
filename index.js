require('./style/kuma/dist/uxcore-kuma.css');
require('./style/index.less');

window.UXCORE = {
	'uxcore-calendar': require('uxcore-calendar'),
	'uxcore-button': require('uxcore-button'),
	'uxcore-dialog': require('uxcore-dialog'),
	'uxcore-select2': require('uxcore-select2'),
	'uxcore-pagination': require('uxcore-pagination'),
	'uxcore-tooltip': require('uxcore-tooltip')
};

/*
 * init code highlighter
 */
 window.onload = function(){
	Array.prototype.forEach.call(document.querySelectorAll('.markdown pre code'), function(node, index){
		hljs.highlightBlock(node);
	});
};
