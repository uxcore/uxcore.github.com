# Steps

- category: Components
- chinese: 步骤条
- order: 17
- subtype: 交互提醒

---

引导用户按照流程完成任务的导航条。

## API

## Props

### Steps
| 配置项 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|current | 可选参数，指定当前处理正在执行状态的步骤，从0开始记数。在子Step元素中，可以通过status属性覆盖状态。 | number | 无 | 0|
|size | 可选参数，指定大小（目前只支持普通和迷你两种大小）。 | string | small, default | default |
|direction | 可选参数，指定步骤条方向（目前支持水平和竖直两种方向，默认水平方向）。 | string | vertical | 无 |
|maxDescriptionWidth | 可选参数，指定步骤的详细描述文字的最大宽度。 | number | 无 | 100 |
|showIcon | 步骤节点是否显示图标或数字 | bool | `true` or `false` | true |

### Steps.Step
| 配置项 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|status | 可选参数，指定状态。当不配置该属性时，会使用父Steps元素的current来自动指定状态。 | string | wait, process, finish | wait |
|title | 必要参数，标题。 | string/jsx | 无 | 无 |
|description | 可选参数，步骤的详情描述。 | string/jsx | 无 | 空 |
|icon | 可选参数，步骤的Icon。如果不指定，则使用默认的样式。 | string/jsx | 无 | 空 |
