# CasMultiSelect

- category: Components
- chinese: 级联多选
- subtype: Form Control

---

## Props

| 选项 | 描述 | 类型 | 必填 | 默认值 |
|---|---|---|---|---|---|
| prefixCls | 默认的类名前缀 | String | `false`| "kuma-cascade-multi" |
| className | 自定义类名 | String | `false` | "" |
| dropdownClassName | dropdown 部分的定制类名 | String | `false` | "" |
| config | 配置项 | Array | `false` | [] |
| options | 横向级联的数据 | Array | `true` | [] |
| value | 可由外部控制的值 | Array | `false` | [] |
| defaultValue | 初始默认的值 | Array | `false` | [] |
| cascadeSize | 级联层级数 | number | `false` | 3 |
| placeholder | input占位符 | string | `false` | 'Please Select' 或 '请选择' |
| notFoundContent | 没有子项级联数据时显示内容 | String | `false` | 'No Data' 或 '没有数据' |
| allowClear | 是否允许清空 | bool | `false` | true |
| disabled | 禁用模式，只能看到结果，不可展开面板 | bool | `false` | false |
| locale | 'zh-cn' or 'en-us' | String | `false` | 'zh-cn' |
| onSelect | 选中选项的回调函数 | function | `false` | (valueList, labelList, leafList) => {} |
| onItemClick | 点击选项事件，返回选项信息 | function | `false` | (item) => {} |
| onOk | 点击确认按钮回调函数 | function | `false` | (valueList, labelList, leafList) => {} |
| onCancel | 取消选择时回调函数 | function | `false` | () => {} |

### Props.config

** 示例 **
```javascript
// 三级横向级联多选
const config = [{
  // 可以为空
}, {
  // 设置第二级不可选
  checkable: false,
}, {
}]
```
> 不传 config 时，checkable: true

> 每一列的 config 可以只配置需要的 key, 不需要全部指定， 如上示例

** 完整 config **
```javascript
// 三级横向级联多选
const config = [{
  checkable: true,
}, {
  checkable: true,
}, {
  checkable: true,
}]
```

### Props.options

| 选项 | 描述 | 类型 | 必填 | 默认值 |
|---|---|---|---|---|---|
| value | 选项的值 | String | `true`| "" |
| label | 选项的名称 | String | `true` | "" |
| children | 选项的子项集 | Array | `false` | [] |

** 示例 **
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

### Props.value

```javascript
const value = ['xihu', 'bingjiang'];
```

** 示例 **
```javascript
<CascadeMultiSelect
  options={options}
  value={['xihu', 'nanjing']}
/>
```

### onSelect

```javascript
(valueList, labelList, leafList) => {
  valueList: 选中选项的value列表
  labelList: 选中选项的label列表
  leafList: 选中所有子项的{value, label}列表
}
```
> 注：如果选项的子集全部选中，则返回该选项值

## CascadeMultiPanel

## API

## Props

| 选项 | 描述 | 类型 | 必填 | 默认值 |
|---|---|---|---|---|---|
| className | 自定义类名 | String | `false` | "" |
| prefixCls | 默认的类名前缀 | String | `false`| "kuma-cascade-multi" |
| config | 配置项 | Array | `false` | [] |
| options | 横向级联的数据 | Array | `true` | [] |
| value | 可由外部控制的值 | Array | `false` | [] |
| cascadeSize | 级联层级数 | number | `false` | 3 |
| notFoundContent | 没有子项级联数据时显示内容 | String | `false` | 'No Data' 或 '没有数据' |
| allowClear | 是否允许清空 | bool | `false` | true |
| locale | 'zh-cn' or 'en-us' | String | `false` | 'zh-cn' |
| onSelect | 选中选项的回调函数 | function | `false` | (valueList, labelList, leafList) => {} |
| onItemClick | 点击选项事件，返回选项信息 | function | `false` | (item) => {} |


## CascadeMultiModal

## API

## Props

| 选项 | 描述 | 类型 | 必填 | 默认值 |
|---|---|---|---|---|---|
| prefixCls | 默认的类名前缀 | String | `false`| "kuma-cascade-multi" |
| className | 自定义类名 | String | `false` | "" |
| config | 配置项 | Array | `false` | [] |
| options | 横向级联的数据 | Array | `true` | [] |
| value | 可由外部控制的值 | Array | `false` | [] |
| cascadeSize | 级联层级数 | number | `false` | 3 |
| notFoundContent | 没有子项级联数据时显示内容 | String | `false` | 'No Data' 或 '没有数据' |
| allowClear | 是否允许清空 | bool | `false` | true |
| locale | 'zh-cn' or 'en-us' | String | `false` | 'zh-cn' |
| onSelect | 选中选项的回调函数 | function | `false` | (valueList, labelList, leafList) => {} |
| onItemClick | 点击选项事件，返回选项信息 | function | `false` | (item) => {} |
| title | 标题 | String | `false` | '级联选择' |
| width | dialog 宽度 | Number | `false` | 672 |
| onOk | 成功按钮回调函数 | Function | `false` | (valueList, labelList, leafList) => {} |
| onCancel | 取消的回调函数 | Function | `false` | () => {} |

props 复用 uxcore-cascade-multi-select 的 props.

继承了部分Dialog的props,

### onOk

```javascript
(valueList, labelList, leafList) => {
  valueList: 选中选项的value列表
  labelList: 选中选项的label列表
  leafList: 选中所有子项的{value, label}列表
}
```

## 使用方法

```javascript
import CascadeMultiSelect from 'uxcore-cascade-multi-select';

const {
  CascadeMultiPanel,
  CascadeMultiModal,
} = CascadeMultiSelect;

render() {
  return () {
    <div>
      <CascadeMultiPanel />
      <CascadeMultiSelect />
      <CascadeMultiModal />
    </div>
  }
}
```
