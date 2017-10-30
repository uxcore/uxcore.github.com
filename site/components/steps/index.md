# Steps

- category: Components
- chinese: 步骤条
- order: 17
- subtype: Presentation

---

引导用户按照流程完成任务的导航条。

## API

## Props

### Steps
| 配置项 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
| prefixCls | prefix class name | string | | kuma-step |
| className | additional class name added to wrap | string | | |
|current | 可选参数，指定当前处理正在执行状态的步骤，从0开始记数。在子Step元素中，可以通过status属性覆盖状态。 | number | 无 | 0|
|direction | 可选参数，指定步骤条方向（目前支持水平和竖直两种方向，默认水平方向）。 | string | vertical | 无 |
|maxDescriptionWidth | 可选参数，指定步骤的详细描述文字的最大宽度。 | number | 无 | 100 |
|showIcon | 步骤节点是否显示图标或数字 | bool | `true` or `false` | true |
|type | 步骤条类型 | string | `default` `arrow-bar` `title-on-top` `long-desc` or `bottom-desc` | `default` |
|showDetail | 可选参数[direction=vertical或type=long-desc不生效],是否显示详情面板[step的children] | bool | `true` `false` | `false` |
|currentDetail | 可选参数[direction=vertical或type=long-desc不生效],指定当前正在显示的详情面板，从0开始记数 | number | `0` ... | `0` |
|onChange | 可选参数[direction=vertical或type=long-desc不生效],指定步骤icon点击事件回调,参数为被点击步骤对应数字 | func |  | (v)=>{} |

### Steps.Step
| 配置项 | 说明 | 类型 | 可选值 | 默认值 |
|---|---|---|---|---|
|status | 可选参数，指定状态。当不配置该属性时，会使用父Steps元素的current来自动指定状态。 | string | wait, process, finish, error | wait |
|title | 必要参数，标题。 | string/jsx | 无 | 无 |
|description | 可选参数，步骤的详情描述。 | string/jsx | 无 | 空 |
|icon | 可选参数，步骤的Icon。如果不指定，则使用默认的样式。 | string/jsx | 无 | 空 |
|editable | 可选参数，该步骤的内容是否可以返回编辑。 | boolean | true/false | false |

如果指定 editable 为 true，则该节点样式为可点击，使用需要配合传入 onChange 回调函数，回调函数将通过参数回传用户当前点击步骤的 key，可以通过 key 值来调整 current 或者需要显示的内容。
