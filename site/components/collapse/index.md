# Collapse

- category: Components
- chinese: Collapse 折叠面板
- order: 15

---

可以折叠/展开的内容区域。

## API

## Props

### Collapse

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|activeKey | 当前激活 tab 面板的 key | Array or String | 默认无，accordion模式下默认第一个元素 |
|defaultActiveKey | 初始化选中面板的 key | String | 无 |
|onChange | 切换面板的回调 | Function | 无 |

### Collapse.Panel

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|key | 对应 activeKey | String | 无 |
|header | 面板头内容 | React.Element or String | 无 |
