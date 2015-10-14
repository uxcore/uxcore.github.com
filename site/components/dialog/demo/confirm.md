# 自定义页脚

- order: 2

自定义页脚。

---

````jsx
import Dialog from 'uxcore-dialog';

class CustomFooter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false,
      		visible: false
    	};
  	}
	showModal() {
		this.setState({
			visible: true
		});
	}
	handleOk() {
		this.setState({ loading: true });
		setTimeout(() => {
		  this.setState({ loading: false, visible: false });
		}, 3000);
	}
	handleCancel() {
		this.setState({ visible: false });
	}
	render() {
		return <div>
			<button className="kuma-button kuma-button-mblue" onClick={this.showModal.bind(this)}>
			显示对话框
			</button>
			<Dialog ref="modal"
				visible={this.state.visible}
				title="对话框标题" onOk={this.handleOk} onCancel={this.handleCancel.bind(this)}
				footer={[
					<button key="back" className="kuma-button kuma-button-mwhite" onClick={this.handleCancel.bind(this)}>返 回</button>,
					<button key="submit" className={'kuma-button kuma-button-mblue ' + (this.state.loading ? 'kuma-button-loading': '')} onClick={this.handleOk.bind(this)}>
					提 交
					</button>
				]}>
				<p>对话框的内容</p>
				<p>对话框的内容</p>
				<p>对话框的内容</p>
				<p>对话框的内容</p>
				<p>对话框的内容</p>
			</Dialog>
		</div>;
	}
}

ReactDOM.render(
    <CustomFooter />, document.getElementById('components-dialog-demo-confirm'));
````
