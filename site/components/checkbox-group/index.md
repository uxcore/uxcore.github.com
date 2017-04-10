# Checkbox

- category: Components
- chinese: 复选按钮组
- subtype: Form Control

---

## Props

### CheckboxGroup

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|array|required|[]|由 value 组成地数组，与 React 受限组件表现一致，选中项与 value 保持一致，数组中的值与 item 的 value 相对应|
|onChange|function|required|-|与 React 受限组件表现一致，在 checkbox 群发生改变时触发，借此来更改 value|
|disabled|boolean|optional|false|是否为 disable 状态|

### CheckboxItem

> 通过 CheckboxGroup.Item 取得。

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|text|string|optinal|-|checkbox 后面跟着的说明文字|
|value|string|required|-|checkbox 对应的值|
|disabled|boolean|optional|-|Item 是否为 disable 状态，具有比 Group 更高的优先级|
