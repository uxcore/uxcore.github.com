# MultiSelect

- category: Components
- subtype: 表单及相关
- chinese: 复选择器

---

## Props

### MulitSelect

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|array|required|[]|由 value 组成的数组，与 React 受限组件表现一致，选中项与 value 保持一致，数组中的值与 item 的 value 相对应|
|onChange|function|required|-|与 React 受限组件表现一致，在 checkbox 群发生改变时触发，借此来更改 value|
|disabled|boolean|optional|false|是否为 disable 状态|
|className|string|optional|''|选择框的classname|
|dropdownClassName|string|optional|''|下拉框的classname|
|placeholder|string|optional|''|-|
|titleBreakStr|string|optional|'、'|选中选项在选择框中的链接符|
|optionLabelProp|string|optional|'text'|item中的哪一个prop作为选项展示的label|
|maxSelect|number|optional|-|最多可选选项数量|
|showSelectAll|boolean|optional|true|是否显示全选按钮(如果maxSelect小于实际数量则该按钮成为disabled状态)|
|showClear|boolean|optional|true|是否显示清空按钮|
|onSubmit|function|optional|-|点击确认时的回调函数，返回valueList数组和labelList数组|
### MulitSelectItem

> 通过 MulitSelect.Item 取得。实际prop与checkboxGroup.Item相同

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|text|string|optinal|-|checkbox 后面跟着的说明文字|
|value|string|required|-|checkbox 对应的值|