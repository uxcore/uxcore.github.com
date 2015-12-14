# Calendar

- category: Components
- chinese: 日期选择框
- order: 0
- subtype: 表单及相关

---

输入或选择日期/时间的控件。

## 何时使用

当用户需要输入一个日期/时间，可以点击标准输入框，弹出日期面板进行选择。支持键盘操作。

```js
var Calendar = require('uxcore-calendar');
ReactDOM.render(
  (<Calendar />),
  document.getElementById('target')
);
```

### API

- onSelect(date, formatDateString)
    - date `date`
    - formatDateString `string`

### props
|参数|类型|默认值|说明|
|---|----|---|------|
|value|日期|string|无|
|defaultValue|日期|string|无|
|placeholder|placeholder文案|string|请选择日期|
|format|展示的日期格式|string|'yyyy-MM-dd'|
|locale|`en-us` 或`zh-cn`|string|`zh-cn`|
|disabledDate|日期|function|无|
|onSelect|日期|function|无|
|showTime|日期|boolean|false|
|disabled|日期|boolean|false|
