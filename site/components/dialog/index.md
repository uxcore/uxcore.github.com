# Dialog

- order: 1
- category: Components
- chinese: 对话框
- subtype: Presentation

---

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Dialog` 在当前页面正中打开一个浮层，承载相应的操作。

## Usage
```js
const Dialog = require('uxcore-dialog');
ReactDOM.render(
  (<Dialog title="第一个 Dialog"
    visible={this.state.visible}
    onOk={this.handleOk.bind(this)}
    onCancel={this.handleCancel.bind(this)}
  >
    <p>对话框的内容</p>
  </Dialog>),
  document.getElementById('content')
);
```

## API

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | Title of the dialog | String or React.Element    | 无           |
| visible      | current dialog's visible status  | Boolean    | false |
| mousePosition |  set pageX and pageY of current mouse(it will cause transform origin to be set). | {x:number,y:number}   | 无 |
| onOk       | the callback when ok clicked | function | 无 |
| onCancel   | the callback when dialog closed  | function  | 无  |
| width      | dialog width | String or Number | 520           |
| footer     | footer of the dialog       | React.Element    |  |
| closable | whether show close button and click mask to close | Boolean | true |
| maskClosable | whether click mask to close, this prop will be ignored if set closable prop to false | Boolean | true |
| locale     | 国际化(包括 `zh-cn`, `en-us`, 和 `pl-pl`)    | String     |  `zh-cn` |
| className | additional className for dialog | string | |
| wrapClassName | additional className for dialog wrap | string | `vertical-center-dailog` for vertical align the dialog |
| style | Root style for dialog element.Such as width, height | Object | {} |
| zIndex |  | Number | |
| bodyStyle | body style for dialog body element.Such as height | Number | {} |

### Dialog.xxx()

包括：

- `Dialog.info`
- `Dialog.success`
- `Dialog.error`
- `Dialog.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | 标题           | React.Element or String    | 无           |
| onOk       | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭      | function         | 无           |
| onCancel | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭       | function         | 无           |
| width      | 宽度           | String or Number | 416           |
| iconClassName | 图标样式名 | String | kuma-icon-caution |
