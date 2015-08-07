# Calendar

- category: Components
- chinese: 日期选择框
- order: 0

---

输入或选择日期/时间的控件。

## 何时使用

当用户需要输入一个日期/时间，可以点击标准输入框，弹出日期面板进行选择。支持键盘操作。

```html
<Calendar value="2015-01-01" />
```

## API

|参数|说明|类型|默认值|
|---|----|---|------|
|value|日期|string|无|
|name|表单name值|string|无|
|format|展示的日期格式|string|'yyyy-MM-dd'|
|disabledDate|日期|function|无|
|onSelect|日期|function|无|
|showTime|日期|boolean|false|
|disabled|日期|boolean|false|
