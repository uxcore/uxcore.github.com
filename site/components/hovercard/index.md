# Hovercard

- category: Components
- chinese: 信息卡片
- order: 13

---

uxcore-hovercard ui component for react

## Usage
```
let Hovercard = require('uxcore-hover');

React.render(
    <Hovercard emplId={72053} token="A8de4ec74-1145-4ae9-af1b-d8ff7adfa228C">
        <button>自动位置弹出</button>
    </Hovercard>, targetNode)
```

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|emplId | string | optional | - | 工号|
|token | string,function | optional | - | 配置可以是直接token字符串，也可以是一个函数，函数必须返回字符串格式的accessToken|
|locale | string | optional | zh-cn | 语言选择 zh-cn,en可选|
|hideJobDesc | bool | optional | false | 隐藏职位信息|
|showDelay | number | optional| 100ms | 延迟多少显示名片|
|showConn | bool | optional | true | 是否显示关注功能区|
|userInfo | object | optional | null | 用户信息数据, 可以作为mock数据传递,也可以作为外部传入数据|
|placement | string,object | optional | - | 弹窗从那个方向弹出 ['left','right','top','bottom'] or [dom-align](https://github.com/yiminghe/dom-align)|
