- order: 0
- category: START
- chinese: 开始使用

---

## 0. 学习 React

UXCore UI 基于 React.js 开发，如果你没有使用过 React，请先移步 [React 官网](https://facebook.github.io/react/docs/getting-started.html) 学习。

## 1. 获取 UXCore 样式

UXCore 通过 [uxcore-kuma](https://github.com/uxcore/kuma) 项目来统一管理组件的样式

### 1.1 NPM

```
npm install uxcore-kuma
```

### 1.2 CDN

```
// 以下三个分别对应阿里橙、晴空蓝和夜空靛三种主题，引一者即可。
http://g.alicdn.com/uxcore/uxcore-kuma/1.1.3/kuma.css
http://g.alicdn.com/uxcore/uxcore-kuma/1.1.3/blue.css
http://g.alicdn.com/uxcore/uxcore-kuma/1.1.3/payroll.css

// Iconfont：引入 uxcore-kuma 所需的 iconfont。
http://alinw.alicdn.com/??platform/common/s/1.1/global/global.css

// For Production
http://g.alicdn.com/uxcore/uxcore-kuma/1.1.3/kuma.min.css
http://g.alicdn.com/uxcore/uxcore-kuma/1.1.3/blue.min.css
http://g.alicdn.com/uxcore/uxcore-kuma/1.1.3/payroll.min.css


```

## 2. 获取 UXCore React

### 2.1 CDN

```
http://g.alicdn.com/uxcore/uxcore/0.1.1/uxcore.js
http://g.alicdn.com/uxcore/uxcore/0.1.1/uxcore.min.js
```

> CDN 版本的 UXCore，会在全局生成 Uxcore 变量挂载所有组件，如使用 Uxcore.Table 来获取 Table 组件。

> 注意：uxcore.js 并不包括 react.js，在引入 uxcore.js 前，需先在页面引入 react.js 及 react-dom.js。

### 2.2 获取源代码

UXCore 源代码托管在 [Github Uxcore](https://github.com/uxcore) 群组下。为了更好的发展，请不吝送出您的 STAR。

### 2.3 NPM

UXCore 的每个组件都单独托管在 npm 上，您可以单独安装使用，如：希望引入表格(table) 组件，可以  

```bash
npm install uxcore-table
```

UXCore React 组件编写采用了 ES2015 + JSX 的语法，强烈推荐使用 [Webpack](http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/) + [Babel loader](https://github.com/babel/babel-loader) 的组合来管理 UXCore 的组件。  
注意：UXCore 组件会直接调用全局变量 React，故使用前需先在页面引入 react 相关的库。

## 3. 组件调用

### 3.1 CDN 引用的方式

```html  

<!DOCTYPE html>
<html>
<head>
<title>uxcore-demo</title>
<meta charset="utf-8">
<meta name="description" content="uxcore-demo">
<link rel="stylesheet" href="http://g.alicdn.com/uxcore/uxcore-kuma/1.1.3/kuma.css">
<link rel="stylesheet" type="text/css" href="//alinw.alicdn.com/??platform/common/s/1.1/global/global.css" charset="utf-8">
</head>
<body>
<div id="App"></div>
<!-- 外部脚本资源加载 -->
<!--[if lte IE 9]>
<script src="//alinw.alicdn.com/uxcore/uxcore-lib/??es5-shim/4.1.12/es5-shim.min.js,es5-shim/4.1.12/es5-sham.min.js,console-polyfill/0.2.1/index.js,respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
<script src="//alinw.alicdn.com/uxcore/uxcore-lib/??react/0.14.0/react-with-addons.min.js,react/0.14.0/react-dom.min.js,reflux/0.3.0/dist/reflux.min.js,lodash/3.10.1/lodash.min.js,jquery/1.11.3/jquery.min.js"></script>
<!-- 使用 Uxcore.Mention 时，需要引入 rangy -->
<!-- <script src="//alinw.alicdn.com/uxcore/uxcore-lib/rangy/1.3.0/rangy-core.min.js"></script> -->
<!-- 使用 Uxcore.Tinymce 或 Uxcore.Form.EditorFormField 时，需要引入 tinymce -->
<!-- <script src="//alinw.alicdn.com/uxcore/uxcore-lib/tinymce/4.2.5/tinymce-basic.min.js"></script> -->
<script src="http://g.alicdn.com/uxcore/uxcore/0.1.1/uxcore.js"></script>

</body>
</html>

```

```js  

var Button = Uxcore.Button;

React.render(<Button>Button</Button>, document.getElementById("App"));
```

## 具体组件的使用请移步 [样式](/css/base/) 和 [组件](/components/button/) 页面。

