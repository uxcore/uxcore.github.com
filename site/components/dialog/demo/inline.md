# 点击按钮触发

- order: 1

最简单的用法。

---

````jsx
var Dialog = require('uxcore-dialog');
var Button = require('uxcore-button').Button;

var DialogContent = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  onChange(e) {
    this.props.onChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  },

  onHandleSave() {
    alert('are you sure to save change?');
  },

  render() {
    return (<div>
      <input onChange={this.onChange} value={this.state.value} className="kuma-input"/>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <p>第二个弹出框内容</p>
      <div className="modal-footer">
        <Button color="white" onClick={this.props.onClose}>Close</Button>
        <Button onClick={this.props.onDestroy} >destroy</Button>
        <Button onClick={this.onHandleSave}>Save changes</Button>
      </div>
    </div>);
  }
});

var MyControl = React.createClass({
  getInitialState() {
    return {
      visible: false,
      closable: true
    };
  },

  onChange(v) {
    this.dialogContentInput = v;
  },

  handleClose() {
    this.setState({
      visible: false
    });
  },

  handleDestroy() {
    this.setState({
      destroy: true
    });
  },

  handleTrigger() {
    this.setState({
      visible: true
    });

    // test rerender
    setTimeout(()=> {
      this.setState({
        visible: true
      });
    }, 100);
  },

  toggleClosable() {
    this.setState({
      closable: !this.state.closable
    });
  },

  render() {
    if (this.state.destroy) {
      return null;
    }
    return (
      <div>
        <Button onClick={this.handleTrigger}>show dialog</Button>
      &nbsp;&nbsp;&nbsp;
        <label>
          <input type="checkbox" checked={this.state.closable} onChange={this.toggleClosable}/>
          closable
        </label>
      &nbsp;&nbsp;&nbsp;
        <Button onClick={this.handleDestroy}>destroy</Button>
        <Dialog
          ref='dialog'
          title= "第二个弹框"
          mask={true}
          closable={this.state.closable}
          visible={this.state.visible}
          onClose={this.handleClose}
          style={{width: 600}}
        >
          <DialogContent onChange={this.onChange} onClose={this.handleClose}
            onDestroy={this.handleDestroy}/>
        </Dialog>
      </div>
    );
  }
});

React.render(
  <div>
    <h2>render dialog inside component</h2>
    <MyControl/>
  </div>,
  document.getElementById('components-dialog-demo-inline')
);
````
