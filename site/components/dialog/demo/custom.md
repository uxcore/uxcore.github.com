# 确认对话框

- order: 4

确认对话框。

---

````jsx
import Dialog from 'uxcore-dialog';
import Button from 'uxcore-button';
const confirm = Dialog.confirm;

function showConfirm() {
  confirm({
    title: '您是否确认要删除这项内容',
    content: '一些解释',
    onOk() {
      alert('确定');
    },
    onCancel() {},
  });
}

class ConfirmDemo extends React.Component {
  render() {
    return (<Button onClick={showConfirm.bind(this)}>
			  确认对话框
		                                  </Button>);
  }
}

ReactDOM.render(
  <ConfirmDemo />, document.getElementById('components-dialog-demo-custom'));

````
