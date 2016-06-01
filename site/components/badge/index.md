# Badge

- order: 9
- chinese: 徽标
- subtype: Presentation

---

## Props

| 配置项 |  类型   | 必填     | 默认值 | 功能/备注 |
|-------|--------|----------|-------|---|
| prefixCls | string | optional | kuma-badge | 类名前缀，不想使用 kuma 主题时使用 |
| className | string | optional | - | 额外类名 |
| count | number | optional | -     | 展示的数字，大于 overflowCount 时显示为 overflowCount+，为 0 时隐藏 |
| overflowCount | number | optional | 99 | 展示封顶的数字值|
| dot | boolean | optional | false | 不展示数字，只有一个小红点|
| text | string | optional | "" | 展示的文字 |