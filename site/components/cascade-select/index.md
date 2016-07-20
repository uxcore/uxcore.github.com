# CascadeSelect

- category: Components
- chinese: 级联选择
- subtype: Form Control

---

## Props
| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| prefixCls | string | false | `'kuma-cascader'` | 默认的类名前缀 |
| className | string | false | `''` | 自定义类名 |
| options | array | false | `[]` | 选项数据源，格式可见下方Demo |
| value | array | false | `null` | 可由外部控制的值 |
| defaultValue | array | false | `[]` | 初始默认值 |
| placeholder | string | false | `'Please Select'` or `'请选择'` | placeholder |
| onChange | function | false | `function(value, selectedOptions)` | 选择完成后回调 |
| disabled | boolean | false | `false` | 是否禁用 |
| clearable | boolean | false | `false` | 是否支持清除 |
| changeOnSelect | boolean | false | `false` | 是否将每次选择立刻显示在控件中 |
| expandTrigger | string | false | `'click'` | 次级菜单展开方式，支持 `click` 和 `hover` |
| beforeRender | function | false | `(value, selectedOptions) => selectedOptions.map(o => o.label).join(' / ')` | 处理要显示的内容 |
| cascadeSize | number | false | `3` | 级联的层级数 |

## Demos

### props.options

```javascript
const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];
```
