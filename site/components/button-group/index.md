# ButtonGroup

- category: Components
- subtype: Form Control
- chinese:　按钮组

---

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| prefixCls | String | No | kuma-button-group | 类名前缀，不使用 kuma 主题时可以使用 |
| className | String | No | | 额外类名 |
| type | String | No | outline | 同 Button 的 type，在 separated 为 false 的情况下，单个 button 的 type 将被这个 type 覆盖 |
| size | String | no | medium | 同 Button 的 size，ButtonGroup 下必须保证 size 统一，设置单个 Button 的 size 无效 |
| separated | Bool | No | false | 是否是分隔的形态，以下 props 仅在 separated 为 true 时起效 | 
| maxLength | Number | No | 3 | 超过多少个 Button 时开始折叠 |
| locale | String | No | zh-cn | 国际化 |
| actionType | String | No | button | 默认形态是按钮型(button) 还是 文字链接型(link) |