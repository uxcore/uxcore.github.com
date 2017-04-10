# RadioGroup

- category: Components
- chinese: 单选按钮组
- subtype: Form Control

---

## props

### Radiogroup

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string|required|""|radioGroup 被选中的项|
|onChange|function|required|noop|点击 radio 时触发，传入参数 value，代表被选中的项|
|disabled|boolean|optional|false|是否为 disable 状态|


### Radiogroup.Item

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string|required|""|该 radio 所代表的值|
|text|string|optional|""|该 radio 显示的说明|
|disabled|boolean|optional|-|Item 是否为 disable 状态，具有比 Group 更高的优先级|
