# Select2

- category: Components
- chinese: 选择器
- order: 2
- subtype: Form Control

---

类似 Select2 的选择器。

## 何时使用

弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。

```html
<Select>
  <Option value="lucy">lucy</Option>
</Select>
```

## Props

### Select props

|参数|说明|类型|默认值|
|---|----|---|------|
|value | 指定当前选中的条目 | string/Array | 无 |
|defaultValue | 指定默认选中的条目 | string/Array | 无 |
|multiple | 支持多选 | bool  | false |
|filterOption | 是否根据输入结果过滤选项，默认是使用 optionFilterProp 对应的 Option 属性来过滤  | bool/function(inputValue, Option) | true |
|showSearch | 是否在单选模式下显示搜索 | bool | true |
|tags | 可以把随意输入的条目作为tag，输入项不需要与下拉选项匹配 | bool | false |
|onSelect | 被选中时调用，参数为选中的option value值 | function(value, option:Option) | 无 |
|onDeselect | 取消选中时调用，参数为选中的option value值，仅在multiple或tags模式下生效 | function(value) | 无 |
|onChange | 选中option，或input的value变化(combobox模式下)时，调用此函数 | function | 无 |
|onSearch | 搜索框值发生变化时调用 | function(key) | noop |
|allowClear | 显示清除按钮 |  | false |
|placeholder | 选择框默认文字 | string | 无 |
|searchPlaceholder | 搜索框默认文字 | string | 无 |
|optionFilterProp | 输入项过滤对应的 option 属性 | string | value |
|combobox | 输入框自动提示模式 | bool | false |
|optionLabelProp| 选择 Option 的哪个 prop 作为选择框中的显示。| string | 'children' |
|getPopupContainer| 弹出的菜单渲染在哪个容器中 | function(trigger:Node):Node | function(){return document.body;}|
|dropdownMatchSelectWidth|dropdown 部分是否和 select 部分同宽| boolean | true |
|dropdownClassName | dropdown 部分的定制类名 | string | - |
|notFoundContent   | 未找到选项时的提示文案   | string | not found |
|size | 尺寸，枚举值 `large`, `small`, `middle` | string | large |


### Option props
|参数|说明|类型|默认值|
|---|----|---|------|
|disabled | 是否禁用 | Boolean | false |
|key | 如果react需要你设置此项，此项值与value的值相同，然后可以省略value设置 | String | |
|value | 默认根据此属性值进行筛选 | String | - |
|title | 如果你不满意自动生成的 title，你可以用这个 prop 来修改 | String | - |

### OptGroup props
|参数|说明|类型|默认值|
|---|----|---|------|
|label | 组名 | String/React.Element | 无 |
|key |  | String | - |