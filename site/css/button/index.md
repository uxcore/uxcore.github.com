# uxcore-button

- tags: uxcore, button
- description: uxcore button
- maintainers: vincent.bian
- version: 0.1.0
- lastupdate: 2015/7/20
- screenshots:

---

## TL;DR

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/button
$ cd uxcore-tree
$ npm install
$ npm run dev
```
nav http://localhost:9090/webpack-dev-server/example/ to see the demo

#### deploy to gh-pages
[refer to]( http://stackoverflow.com/questions/17643381/how-to-upload-my-angularjs-static-site-to-github-pages)
```sh
$ npm run build
$ git add build & git commit -m 'update deploy files'
$ npm run deploy
```

## Usage

```js
import {Button, ButtonGroup} from 'uxcore-button';
React.render(todo, document.getElementById('target'));
```

### demo
http://uxcore.github.io/button/

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|size|按钮大小(large medium small)|string|medium|
|color|颜色(blue white orange)|string|blue|
|disabled|是否禁用(disabled或true false)|string|false|
