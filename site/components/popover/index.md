# Popover

- category: Components
- chinese: 弹窗
- order: 12
- subtype: 交互提醒

---


## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|overlay|string|required|-|弹窗内容|
|title|string|optional|-|弹窗标题，不传入则没有标题栏|
|placement|string|optional|top|弹窗从那个方向弹出|
|prefixCls|string|optional|kuma-popup|类名前缀，用于定制化|
|trigger|string|optional|hover|触发弹窗的方式，有 hover 和 click 两种|
|showButton|boolean|optional|false|是否显示内置按钮|
|onOk|function|optional|noop|内置的确定按钮的回调|
|onCancel|function|optional|noop|内置的取消按钮的回调|
|okText|string|optional|"确定"|内置的确定按钮显示的文案|
|cancelText|string|optional|"取消"|内置的取消按钮显示的文案|
