# uxcore

React component of UXCORE

## 参与开发

### setup
```sh
$ git clone https://github.com/uxcore/uxcore.github.com.git uxcore
$ cd uxcore
& npm install -g nico jade nico-jsx
$ npm install
$ git submodule init
$ git submodule update
```
### run server
```sh
$ npm run start
```

### 部署到github pages
```sh
$ npm run deploy
```

## 文档规范

文档和demo都使用markdown语法

### 文档目录结构

```
|- components ------------------------- 组件
	|- button ------------------------- uxcore-button
		|- demo ----------------------- demo目录
			|- basic.md
			|- size.md
		|- index.md ------------------- button文档
|- css -------------------------------- kuma
	|- base --------------------------- base.less
		|- index.md ------------------- css文档
```

### 文档规范

```markdown
# Button

- category: Components
- chinese:　按钮

## Usage

## Props
```

### demo规范

```markdown
# demo title

- order: 0 ==> demo排序

默认的按钮。==> demo描述

---

````jsx
var Button = require('uxcore-button');

ReactDOM.render(
  <Button>Confirm</Button>
, document.getElementById('components-button-demo-basic'));
````
```
