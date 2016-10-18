# Popover

- category: Components
- chinese: 弹窗
- order: 12
- subtype: Presentation

---


## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|overlay|string|required|-|弹窗内容|
|overlayClassName|string|optional|-|弹窗的额外类名|
|visible|boolean|optional|-|是否展开弹窗内容，如果不填则自动处理；填写则需要手动处理|
|title|string|optional|-|弹窗标题，不传入则没有标题栏|
|placement|string|optional|top|弹窗从那个方向弹出|
|prefixCls|string|optional|kuma-popup|类名前缀，用于定制化|
|trigger|string|optional|hover|触发弹窗的方式，有 hover 和 click 两种|
|showButton|boolean|optional|false|是否显示内置按钮|
|onOk|function(hideCallback)|optional|noop|内置的确定按钮的回调，当想要关闭 popover 时需调用 hideCallback|
|onCancel|function|optional|noop|内置的取消按钮的回调|
|okText|string|optional|"确定"|内置的确定按钮显示的文案|
|cancelText|string|optional|"取消"|内置的取消按钮显示的文案|
|onVisibleChange|function(isDisplay)|optional|noop|显示状态发生改变的回调，isDisplay表示弹窗是否展开|

