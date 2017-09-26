# Calendar

- category: Components
- chinese: 日期选择框
- order: 0
- subtype: Form Control

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

## Attention

0.8.0 之后，我们使用 moment 替代了 gregorianCalendar，在一些格式上和用法上有了一些变化。

### props

|参数|说明|类型|默认值|版本|
|---|----|---|------|---|
|value|日期|string|无||
|defaultValue|日期|string|无||
|placeholder|placeholder文案|string|请选择日期||
|format|展示的日期格式|string|'YYYY-MM-DD'||
|locale|`en-us`,`zh-cn` 和 `pl-pl`|string|`zh-cn`||
|disabledDate|日期|function|无||
|onSelect|日期|function|无||
|showTime|日期|boolean|false||
|showHour|日期面板是否显示小时|boolean|true|0.6.3|
|showSecond|日期面板是否显示秒|boolean|true|0.6.3|
|disabled|日期|boolean|false||
|timePicker|自己传入定制的 timePicker|React Element|-||
|getPopupContainer| 弹出的菜单渲染在哪个容器中 | function(trigger:Node):Node | function(){return document.body;}||
|yearSelectOffset | 年选择器中第一个年份与当前选中值之间的距离，例如当前为 1997 年，距离为 50，则最早可选择年份为 1947 年 | number | 50 | 0.9.7 |
|yearSelectTotal| 年选择器中年份的总数，如最早可选为 1947 年，总数为 100，则可选年份范围为 1947 - 2047 | number | 100 | 0.9.7 |
|size| 尺寸，支持 large/middle/small | string | large | 0.9.8 |

#### MonthCalendar

|参数|说明|类型|默认值|
|---|----|---|------|
|value|日期|string|无|
|defaultValue|日期|string|无|
|placeholder|placeholder文案|string|请选择日期|
|format|展示的日期格式|string|'yyyy-MM'|
|locale|`en-us`,`zh-cn` 和 `pl-pl`|string|`zh-cn`|
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
|locale|`en-us`,`zh-cn` 和 `pl-pl`|string|`zh-cn`|
|onSelect|日期|function|无|
|disabled|日期|boolean|false|
|getPopupContainer| 弹出的菜单渲染在哪个容器中 | function(trigger:Node):Node | function(){return document.body;}|

#### util

> 一些辅助函数，用于某些套餐化定制

* Calendar.util.generateContentRender(code, locale): 用于在日历上标注非常规的休假、上班以及日程。
    * code should be an object like this {'xxxx-xx-xx': ['work/leave/schedule']}
    * locale should be `zh-cn` or `en-us`