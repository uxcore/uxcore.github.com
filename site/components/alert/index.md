# Alert

- category: Components
- subtype: 交互提醒
- chinese:　警告提示

---

## API

* toggleShow: 切换 Alert 的显示状态。

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|prefixCls|string|optional|'kuma-alert'|类名前缀，不想使用 kuma 主题时使用|
|iconPrefixCls|string|optional|'kuma-icon'|图标类名前缀，不想使用 kuma 主题时使用|
|className|string|optional|-|额外的类名|
|type|string|optional|'message'| 警告类型，包括 message', 'error', 'warning', 'success', 'question', 'stop', 'wait'|
|hasContainer|bool|optional|false|是否包含外层容器|
|closable|bool|optional|false|是否能够关闭,此项为 true 时,将自动包含外层容器|
|closeText|string or react element|optional|-|将关闭图标替换成想要的文字|
|message|string or react element|required|-|提示文案|
|description|string or react element|optional|描述文字，将自动包含外层容器|
|onClose|function|optional|noop|在警告关闭时触发，传回 event|
