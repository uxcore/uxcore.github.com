# Tooltip

- category: Components
- chinese: 文字提示
- order: 4
- subtype: 交互提醒

---

简单的文字提示气泡框。

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## API

|参数|类型|默认值|说明|
|---|----|---|------|
|overlayClassName | string | uxcore | additional className added to popup overlay |
|trigger | string[] | ['hover'] | which actions cause tooltip shown. enum of 'hover','click','focus' |
|mouseEnterDelay | number | 0 | delay time to show when mouse enter.unit: s. |
|mouseLeaveDelay | number | 0.1 | delay time to hide when mouse leave.unit: s. |
|overlayStyle | Object |  | additional style of overlay node |
|wrapStyle | Object |  | additional style of wrap node |
|prefixCls | String | kuma-tooltip | prefix class name |
|onVisibleChange | Function |  | call when visible is changed |
|visible | boolean |  | whether tooltip is visible |
|defaultVisible | boolean |  | whether tooltip is visible initially |
|placement | String or Object |  | one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'] or alignConfig of [dom-align](https://github.com/yiminghe/dom-align)
|align | Object: alignConfig of [dom-align](https://github.com/yiminghe/dom-align) |  | only valid when placement's type is String. value will be merged into placement's align config. note: can only accept offset and targetOffset
|overlay | React.Element |  | popup content |
|getTooltipContainer | function |  | function returning html node which will act as tooltip contaier |
