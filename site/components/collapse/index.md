# Collapse

- category: Components
- chinese: 折叠面板
- order: 15
- subtype: 导航

---

可以折叠/展开的内容区域。

## API

## Props

### Collapse

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|activeKey | array|string | the first panel key | 当前激活 tab 面板的 key 默认无，accordion模式下默认第一个元素 |
|defaultActiveKey | array|string | null | 初始化选中面板的 key |
|accordion | Boolean | false | 手风琴模式 |
|onChange | Function | 无 | 切换面板的回调 |

### Collapse.Panel

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|key | String | 无 | 对应 activeKey  |
|header | React.Element or String | 无 | 面板头内容 |
