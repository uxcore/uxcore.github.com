# Layout

- category: Components
- chinese: 左右布局
- description: helping you to make an adaptive layout fastly
- order: 0
- subtype: 布局

---

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|


## 子组件

### Left/Right

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|
|width|number|optional|500|布局块的宽度，仅在定宽时起作用|
|adaptive|boolean|optional|false|是否为自适应，未设定 adaptive=true 的一侧，则为定宽，不可两者皆为自适应|
