# 基本用法

- order: 0

基本用法。

---

````jsx
import Dialog from 'uxcore-dialog';
import Button from 'uxcore-button';

class BasicDemo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			visible: false
		};
	}
	show() {
		this.setState({
		  visible: true
		});
	}
	render(){
		return (
			<div>
				<Button onClick={this.show.bind(this)}>显示对话框</Button>
				<Dialog title="第一个 Dialog"
					visible={this.state.visible}
					onOk={() => {
						this.setState({
							visible: false
						})
					}}
					onCancel={() => {
						this.setState({
							visible: false
						})
					}}>
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
