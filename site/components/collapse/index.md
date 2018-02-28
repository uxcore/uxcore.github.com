# Collapse

- category: Components
- chinese: 折叠面板
- order: 15
- subtype: Navigation

---

可以折叠/展开的内容区域。

## Props

### Collapse

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|prefixCls | string | optional | `kuma-collapse` | 默认类名，用户可以通过修改此项来完成样式的定制 |
|activeKey | array/string | optional | the first panel key  | 当前激活面板的 key 默认无，accordion模式下默认第一个元素 |
|defaultActiveKey | array/string | optional | `null` | 初始化选中面板的 key |
|accordion | bool | optional | `false` | 手风琴模式 |
|onChange | function | optional | `(key)=>{}` | 切换面板的回调 |

### Collapse.Panel

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|key| string | optional | index | 当前面板的 key |
|prefixCls| string | optional | Collapse.prefixCls |默认类名，用户可以通过修改此项来完成样式的定制 |
|header | string/number/node | optional | `null`| 面板头内容 |
|isActive| bool | optional | false | 面板当前是否展开,true 表示展开 |
|onItemClick| function| optional | `(isActive, e)=>{}`| 面板头点击事件 |
