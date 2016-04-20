# 动画

- order: 5

CSS3 动画

---

````jsx
import Dialog from 'uxcore-dialog';
import Select from 'uxcore-select2';
import Button from 'uxcore-button';

class BasicDemo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			visible: false,
			effect: 'fade'
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
	handleChange(value) {
		this.setState({
			effect: value
		})
	}
	render(){
		let me = this;
		return (
			<div>
				<div>
                    <Select className="demo-select" placeholder="请选择动画效果" defaultValue={me.state.effect} onChange={me.handleChange.bind(me)}>
                        {['fade', 'slideRight', 'slideDown', 'newspaper', 'fall', 'threeFallH', 'threeFallV', 'threeSign', 'superScale', 'threeSlit', 'threeRotateBottom', 'threeRotateLeft'].map((item, index) => {
                            return <Select.Option key={item}>{item}</Select.Option>
                        })}
                    </Select>
                </div>
				<Button onClick={this.showModal.bind(this)}>显示对话框</Button>
				<Dialog title="第一个 Dialog"
					visible={this.state.visible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
					transitionName={this.state.effect}>
					<p>对话框的内容</p>
					<p>对话框的内容</p>
					<p>对话框的内容</p>
				</Dialog>
			</div>
		);
	}
}

ReactDOM.render(
    <BasicDemo />, document.getElementById('components-dialog-demo-animate'));
/* JS END CSS START*/
````
````css
.demo-select {
    width: 200px;
    margin-bottom: 10px;
}
````

