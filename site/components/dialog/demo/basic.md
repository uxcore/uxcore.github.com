# 基本用法

- order: 0

基本用法。

---

````jsx
import Dialog from 'uxcore-dialog';

class BasicDemo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			visible: false
		};
	}
	showModal() {
		this.setState({
		  visible: true
		});
	}
	handleOk() {
		console.log('点击了确定');
		this.setState({
		  visible: false
		});
	}
	handleCancel() {
		this.setState({
		  visible: false
		});
	}
	render(){
		return (
			<div>
				<button className="kuma-button kuma-button-mblue" onClick={this.showModal.bind(this)}>显示对话框</button>
				<Dialog title="第一个 Dialog"
					visible={this.state.visible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}>
					<p>对话框的内容</p>
					<p>对话框的内容</p>
					<p>对话框的内容</p>
				</Dialog>
			</div>
		);
	}
}

ReactDOM.render(
    <BasicDemo />, document.getElementById('components-dialog-demo-basic'));

````
