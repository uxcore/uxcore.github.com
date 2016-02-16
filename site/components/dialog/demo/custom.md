# 确认对话框

- order: 3

确认对话框。

---

````jsx
import Dialog from 'uxcore-dialog';
import Button from 'uxcore-button';
let confirm = Dialog.confirm;

function showConfirm(){
  confirm({
    title: '您是否确认要删除这项内容',
    content: '一些解释',
    onOk: function() {
      alert('确定');
    },
    onCancel: function() {}
  });
}

class ConfirmDemo extends React.Component {
	render(){
		return (<Button onClick={showConfirm.bind(this)}>
			  确认对话框
		</Button>);
	}
}

ReactDOM.render(
    <ConfirmDemo />, document.getElementById('components-dialog-demo-custom'));

````
