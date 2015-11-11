# Dialog

- order: 1
- category: Components
- chinese: 对话框
- subtype: 交互提醒

---

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Dialog` 在当前页面正中打开一个浮层，承载相应的操作。

## Usage
```js
var Dialog = require('uxcore-dialog');
ReactDOM.render(
  (<Dialog title="第一个 Dialog"
      visible={this.state.visible}
      onOk={this.handleOk.bind(this)}
      onCancel={this.handleCancel.bind(this)}>
      <p>对话框的内容</p>
  </Dialog>),
  document.getElementById('content')
);
```

## API

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | 标题           | React.Element    | 无           |
| visible      | 对话框是否可见  | Boolean    | 无           |
| mousePosition      | 鼠标位置，设置弹窗初始位置           | {x:number,y:number}   | 无           |
| onOk       | 点击确定回调       | function         | 无           |
| onCancel   | 点击遮罩层或右上角叉或取消按钮的回调  | function  | 无           |
| width      | 宽度           | String or Number | 520           |
| footer     | 底部内容       | React.Element    | 确定取消按钮 |
| closable | 是否显示关闭图标和支持点击mask关闭 | Boolean | true |

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
