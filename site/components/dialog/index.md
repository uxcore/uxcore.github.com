# Dialog

- order: 1
- category: Components
- chinese: 对话框

---

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Dialog` 在当前页面正中打开一个浮层，承载相应的操作。


## API

|name|type|default|description|
|----|----|-------|-----------|
|prefixCls|String|kuma-dialog|The dialog dom node's prefixCls|
|visible|Boolean|false| |
|mask|Boolean| |whether show mask|
|renderToBody|Boolean|true|whether render dialog to body|
|animation|String| |part of dialog animation css class name|
|maskAnimation|String| |part of dialog's mask animation css class name|
|title|String|React.Element|Title of the dialog|
|footer|React.Element| |footer of the dialog|
|closable|Boolean|true|whether show close button and click mask to close|
|onBeforeClose|function(close)| |when click close button or mask. argument is a close function|
|onShow|function| |called on dialog show|
|onClose|function| |called on dialog close|
