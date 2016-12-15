# Timeline

- category: Components
- subtype: Presentation
- chinese: 时间轴

---

## Props

### Timeline

时间轴。

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| className | String | false | 无 | 额外类名 |
| pending | jsx | false | 无 | 指定最后一个幽灵节点内容 |

### Timeline.Item

时间轴的每一个节点。

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| className | String | false | 无 | 额外类名 |
| color | String | false | orange | 指定圆圈颜色 `orange, blue, gray, green`，或自定义的色值 |
| dot | jsx | false | 无 | 自定义时间轴点 |

