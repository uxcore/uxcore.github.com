# Pickable

- category: Components
- subtype: Form Control
- chinese:　筛选器

---

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|prefixCls|string|optional|kuma-pickable|类名前缀，不使用 kuma 主题时使用|
|className|string|required|-|增加额外的class|
|onChange|func(value, changedKeys)|optional|-|选中情况变化时触发，返回选中的项，以及目前发生变动的值|
|value|array|optional|true|是否有清除按钮|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+|
|type|string|optional|normal|样式风格，可选值为`normal`,`simple`|
|multiple|boolean|optional|true|是否支持多选|

## Item Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string/number|required|-|该 Item 对应的值|
|disabled|boolean|optional|false|是否禁用|
|number|number|optional|-|number 有值时会显示对应的值|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+|

