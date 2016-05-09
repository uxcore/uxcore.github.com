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

### props

|参数|说明|类型|默认值|
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
|timePicker|自己传入定制的 timePicker|React Element|-|
|getPopupContainer| 弹出的菜单渲染在哪个容器中 | function(trigger:Node):Node | function(){return document.body;}|

#### MonthCalendar

|参数|说明|类型|默认值|
|---|----|---|------|
|value|日期|string|无|
|defaultValue|日期|string|无|
|placeholder|placeholder文案|string|请选择日期|
|format|展示的日期格式|string|'yyyy-MM'|
|locale|`en-us` 或`zh-cn`|string|`zh-cn`|
|onSelect|日期|function|无|
|disabled|日期|boolean|false|
|getPopupContainer| 弹出的菜单渲染在哪个容器中 | function(trigger:Node):Node | function(){return document.body;}|

#### YearCalendar

|参数|说明|类型|默认值|
|---|----|---|------|
|value|日期|string|无|
|defaultValue|日期|string|无|
|placeholder|placeholder文案|string|请选择日期|
|format|展示的日期格式|string|'yyyy'|
|locale|`en-us` 或`zh-cn`|string|`zh-cn`|
|onSelect|日期|function|无|
|disabled|日期|boolean|false|
|getPopupContainer| 弹出的菜单渲染在哪个容器中 | function(trigger:Node):Node | function(){return document.body;}|

#### util

> 一些辅助函数，用于某些套餐化定制

* Calendar.util.generateContentRender(code, locale): 用于在日历上标注非常规的休假、上班以及日程。
    * code should be an object like this {'xxxx-xx-xx': ['work/leave/schedule']}
    * locale should be `zh-cn` or `en-us`
