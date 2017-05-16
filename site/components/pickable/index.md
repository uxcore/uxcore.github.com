# Pickable

- category: Components
- subtype: Form Control
- chinese: 筛选器

---

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|prefixCls|string|optional|kuma-pickable|类名前缀，不使用 kuma 主题时使用|
|className|string|required|-|增加额外的class|
|onChange|func(value, changedKeys)|optional|-|选中情况变化时触发，返回选中的项，以及目前发生变动的值|
|multiple|bool|optional|true|是否多选|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+，2.0 版本后此项废弃，改为传入 children 时实现。|
|type|string|optional|normal|样式风格，可选值为 `normal`, `simple`, `hook`, `simpleHook`|

## Item Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string/number|required|-|该 Item 对应的值|
|disabled|boolean|optional|false|是否禁用|
|number|number|optional|-|number 有值时会显示对应的值，2.0 版本后此项废弃，改为传入 children 时实现。|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+，2.0 版本后此项废弃，改为传入 children 时实现。|
