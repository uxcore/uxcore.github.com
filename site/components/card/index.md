# Card

- category: Components
- chinese: 卡片
- subtype: Presentation

---

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| prefixCls | String | No | - | 类名前缀 |
| className | String | No | - | 额外类名 |
| icon | React Element | No | - | 头部图标 |
| title | React Element | No | - | 头部标题 |
| tip | React Element | No | - | 头部提示 |
| extra | React Element | No | - | 头部右侧额外区域，通用用于放置动作 |
| children | React Element | No | - | 卡片内容 |
| showCollapseIcon | Bool | No | false | 显示折叠按钮 |
| onCollapseChange | func(collapse) | No | noop | 折叠状态发生改变时的回调，参数为是否被折叠 |
| contentPaddingSize | string | No | 'middle' | 内容区间距，枚举值：middle/none |