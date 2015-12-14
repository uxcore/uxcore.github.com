# 点击按钮触发

- order: 1

最简单的用法。

---

````jsx
import Dialog from 'uxcore-dialog';

class AsyncCloseDemo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			ModalText: '对话框的内容',
			visible: false
		};
  	}
	showModal() {
		this.setState({
		  visible: true
		});
	}
	handleOk() {
		this.setState({
			ModalText: '对话框将在两秒后关闭'
		});
		setTimeout(() => {
		  this.setState({
		    visible: false,
			ModalText: '对话框的内容'
		  });
		}, 2000);
	}
	handleCancel() {
		console.log('点击了取消');
		this.setState({
			visible: false
		});
	}
	render() {
		return (<div>
			<button className="kuma-button kuma-button-mblue" onClick={this.showModal.bind(this)}>显示对话框</button>
			<Dialog title="对话框标题"
				visible={this.state.visible}
				onOk={this.handleOk.bind(this)}
				onCancel={this.handleCancel.bind(this)}>
				<p>{this.state.ModalText}</p>
			</Dialog>
	  	</div>);
	}
}

ReactDOM.render(
  <AsyncCloseDemo />,
  document.getElementById('components-dialog-demo-asyncclose')
);
````
