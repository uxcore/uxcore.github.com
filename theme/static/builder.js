(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("ReactDOM"), require("React")) : factory(root["ReactDOM"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _reactDom = __webpack_require__(1);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _componentsDashboardIndex = __webpack_require__(2);\n\nvar _componentsDashboardIndex2 = _interopRequireDefault(_componentsDashboardIndex);\n\nvar _componentsEditorIndex = __webpack_require__(4);\n\nvar _componentsEditorIndex2 = _interopRequireDefault(_componentsEditorIndex);\n\nvar _variablesConfig = __webpack_require__(5);\n\nvar themeList = [];\nObject.keys(_variablesConfig.THEMES).forEach(function (name) {\n    themeList.push();\n});\n\nconsole.log(_variablesConfig.THEMES);\n\n_reactDom2['default'].render(React.createElement(\n    'div',\n    { className: 'builder-container' },\n    React.createElement(_componentsDashboardIndex2['default'], null),\n    React.createElement(_componentsEditorIndex2['default'], null)\n), document.getElementById('J_BuilderMain'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./theme/builder/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./theme/builder/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = ReactDOM;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"ReactDOM\"\n ** module id = 1\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar Dashboard = (function (_React$Component) {\n    _inherits(Dashboard, _React$Component);\n\n    function Dashboard(props) {\n        _classCallCheck(this, Dashboard);\n\n        _get(Object.getPrototypeOf(Dashboard.prototype), \"constructor\", this).call(this, props);\n    }\n\n    _createClass(Dashboard, [{\n        key: \"render\",\n        value: function render() {\n            return _react2[\"default\"].createElement(\n                \"div\",\n                { className: \"dashboard-wrapper\" },\n                \"dashboard-wrapper\"\n            );\n        }\n    }]);\n\n    return Dashboard;\n})(_react2[\"default\"].Component);\n\nexports[\"default\"] = Dashboard;\nmodule.exports = exports[\"default\"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./theme/builder/components/dashboard/index.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./theme/builder/components/dashboard/index.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = React;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"React\"\n ** module id = 3\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///external_%22React%22?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n    value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar Editor = (function (_React$Component) {\n    _inherits(Editor, _React$Component);\n\n    function Editor(props) {\n        _classCallCheck(this, Editor);\n\n        _get(Object.getPrototypeOf(Editor.prototype), 'constructor', this).call(this, props);\n        this.state = {\n            mode: 'pattern'\n        };\n    }\n\n    _createClass(Editor, [{\n        key: 'toggleEditMode',\n        value: function toggleEditMode(e) {\n            e.preventDefault();\n            this.setState({\n                mode: this.state.mode === 'pattern' ? 'customize' : 'pattern'\n            });\n        }\n    }, {\n        key: 'toggleBlock',\n        value: function toggleBlock(e) {}\n    }, {\n        key: 'render',\n        value: function render() {\n            var editorTitle = undefined;\n            if (this.state.mode === 'pattern') {\n                editorTitle = '自定义主题';\n            } else {\n                editorTitle = '返回';\n            }\n            return _react2['default'].createElement(\n                'div',\n                { className: 'editor-board' },\n                _react2['default'].createElement(\n                    'div',\n                    { className: 'editor-head' },\n                    _react2['default'].createElement(\n                        'a',\n                        { href: '#', className: 'editor-title mode-' + this.state.mode, onClick: this.toggleEditMode.bind(this) },\n                        editorTitle\n                    )\n                ),\n                _react2['default'].createElement(\n                    'dl',\n                    null,\n                    _react2['default'].createElement(\n                        'dt',\n                        null,\n                        '默认主题色'\n                    ),\n                    _react2['default'].createElement(\n                        'dd',\n                        null,\n                        _react2['default'].createElement(\n                            'ul',\n                            null,\n                            _react2['default'].createElement(\n                                'li',\n                                null,\n                                '阿里橙'\n                            ),\n                            _react2['default'].createElement(\n                                'li',\n                                null,\n                                '蚂蚁蓝'\n                            )\n                        )\n                    )\n                ),\n                _react2['default'].createElement(\n                    'dl',\n                    { className: 'block' },\n                    _react2['default'].createElement(\n                        'dt',\n                        { onClick: this.toggleBlock.bind(this) },\n                        '基础色'\n                    ),\n                    _react2['default'].createElement(\n                        'dd',\n                        null,\n                        _react2['default'].createElement(\n                            'ul',\n                            null,\n                            _react2['default'].createElement(\n                                'li',\n                                null,\n                                _react2['default'].createElement(\n                                    'span',\n                                    { className: 'variable-title' },\n                                    '主色调'\n                                ),\n                                _react2['default'].createElement(\n                                    'span',\n                                    { className: 'variable-field' },\n                                    'xxx'\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Editor;\n})(_react2['default'].Component);\n\nexports['default'] = Editor;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./theme/builder/components/editor/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./theme/builder/components/editor/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n    value: true\n});\nvar THEMES = {\n    'demo': __webpack_require__(6)\n};\n\nconsole.log(DEMO);\n\nexports.THEMES = THEMES;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./theme/builder/variables/config.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./theme/builder/variables/config.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = [\n\t{\n\t\t\"category\": \"基础色\",\n\t\t\"vars\": [\n\t\t\t{\n\t\t\t\t\"title\": \"品牌色\",\n\t\t\t\t\"key\": \"brand-primary\",\n\t\t\t\t\"value\": \"#2599f2\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"title\": \"子品牌色\",\n\t\t\t\t\"key\": \"brand-secondary\",\n\t\t\t\t\"value\": \"#2c2f33\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"title\": \"补色\",\n\t\t\t\t\"key\": \"brand-complement\",\n\t\t\t\t\"value\": \"#00b3e8\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"title\": \"辅色\",\n\t\t\t\t\"key\": \"brand-comosite\",\n\t\t\t\t\"value\": \"#00c587\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"title\": \"浓度\",\n\t\t\t\t\"key\": \"brand-primary\",\n\t\t\t\t\"value\": \"#f37327\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t}\n\t\t]\n\t},\n\t{\n\t\t\"category\": \"功能色\",\n\t\t\"vars\": [\n\t\t\t{\n\t\t\t\t\"title\": \"DANGER\",\n\t\t\t\t\"key\": \"brand-danger\",\n\t\t\t\t\"value\": \"#f04631\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"title\": \"WARNING\",\n\t\t\t\t\"key\": \"brand-warning\",\n\t\t\t\t\"color\": \"#f5a12a\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"title\": \"SUCCESS\",\n\t\t\t\t\"key\": \"brand-success\",\n\t\t\t\t\"color\": \"#66bd5c\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"title\": \"INFO\",\n\t\t\t\t\"key\": \"brand-info\",\n\t\t\t\t\"color\": \"#45a8e6\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"title\": \"QUERY\",\n\t\t\t\t\"key\": \"brand-query\",\n\t\t\t\t\"color\": \"#24bee8\",\n\t\t\t\t\"type\": \"color\"\n\t\t\t}\n\t\t]\n\t}\n];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./theme/builder/variables/demo.json\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./theme/builder/variables/demo.json?");

/***/ }
/******/ ])
});
;