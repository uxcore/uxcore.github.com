# 自定义

- order: 2

自定义 & 垂直居中。

---

````jsx
import Dialog from 'uxcore-dialog';
import Button from 'uxcore-button';

class CustomFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
    };
  }
  showModal() {
    this.setState({
      visible: true,
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
    return (<div>
      <Button onClick={this.showModal.bind(this)}>
        显示对话框
      </Button>
      <Dialog
        wrapClassName="vertical-center-dailog"
        visible={this.state.visible}
        title="对话框标题" onOk={this.handleOk} onCancel={this.handleCancel.bind(this)}
        footer={[
          <Button key="back" onClick={this.handleCancel.bind(this)} size="small" type="secondary">返 回</Button>,
          <Button key="submit" onClick={this.handleOk.bind(this)} size="small">提 交</Button>,
        ]}
      >
        <p>对话框的内容</p>
        <p>对话框的内容</p>
        <p>对话框的内容</p>
      </Dialog>
    </div>);
  }
}

ReactDOM.render(
  <CustomFooter />, document.getElementById('components-dialog-demo-confirm'));
````
