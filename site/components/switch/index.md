# Switch

- order: 9
- chinese: 开关
- subtype: Form Control

---

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|prefixCls|string|optional|'kuma-switch'|类名前缀|
|className|string|optional|-|额外类名|
|checked|boolean|optional|false|是否被选中|
|defaultChecked|boolean|optional|false| 非受限模式|
|onChange|Function(checked)|required|变化时发生|
|checkedChildren|string|optional|-|选中时的文案|
|unCheckedChildren|string|optional|-|未选中时的文案|