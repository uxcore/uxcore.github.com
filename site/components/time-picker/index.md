# TimePicker

- category: Components
- subtype: Form Control
- chinese: 时间选择器

---

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| locale                  | String              |  No  | 'zh-cn' | 国际化，枚举值 zh-cn/en-us | 
| clearText               | String              |  No  | 'clear' | 清除按钮的文字提示 |
| disabled                | Boolean             |  No  | false   | 是否禁用 |
| allowEmpty              | Boolean             |  No  | true | 允许清空 |
| open                    | Boolean             |  No  | false | 当前下拉展开的状态，受控属性 |
| defaultValue            | moment              |  No  | null | 默认初始值，非受控属性 |
| defaultOpenValue        | moment              |  No  | moment() | 默认面板值，用于没有设置 value/defaultValue 时，设置时区、语言 |
| value                   | moment              |  No  | null | 当前值 |
| placeholder             | String              |  No  | '' | 输入框占位符 |
| className               | String              |  No  | '' |  触发区域的 className|
| id                      | String              |  No  | '' |  触发区域的 id |
| popupClassName          | String              |  No  | '' | 面板的 className |
| showHour                | Boolean             |  No  | true |  是否显示小时 |
| showMinute              | Boolean             |  No  | true | 是否显示分钟 |
| showSecond              | Boolean             |  No  | true | 是否显示秒 |
| format                  | String              |  No  | - | moment format |
| disabledHours           | Function            |  No  | - | 禁用小时回调 |
| disabledMinutes         | Function            |  No  | - | 禁用分钟回调 |
| disabledSeconds         | Function            |  No  | - | 禁用秒回调 |
| use12Hours              | Boolean             |  No  | false | 12 小时显示模式 |
| hideDisabledOptions     | Boolean             |  No  | false | 是否隐藏被禁用的选项 |
| onChange                | Function            |  No  | null | 选择不同的值触发 |
| addon                   | Function            |  No  | - |  面板的渲染回调，用于在面板底部渲染一些其他元素，例如确认按钮，接受 panel 实例作为参数，可以使用 `panel.close()` 来关闭 panel|
| placement               | String              |  No  | bottomLeft | one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'] |
| transitionName          | String              |  No  | ''  |  |
| name                    | String              |  No  | - | 设置输入框的 name 属性 |
| onOpen                  | Function({ open })  |  No  |   | 在面板展开时调用     |
| onClose                 | Function({ open })  |  No  |   | 在面板收起时调用     |
| hourStep                | Number              |  No  | 1 | 小时选项间隔  |
| minuteStep              | Number              |  No  | 1 | 分钟选项间隔 |
| secondStep              | Number              |  No  | 1 | 秒选项间隔 |
| focusOnOpen             | Boolean             |  No  | false | 面板展开时自动聚焦到输入框 |
| inputReadOnly           | Boolean             |  No  | false | 输入框只读 |
