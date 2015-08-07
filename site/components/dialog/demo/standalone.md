# standalone

- order: 2

---

````jsx
var Dialog = require('uxcore-dialog');

var container;

function showDialog(content, props) {
  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }
  var dialog = React.render(
    <Dialog {...props} renderToBody={false} visible={true}>{content}</Dialog>, container);
  return dialog;
}

var DialogContent = React.createClass({
  getInitialState: function () {
    return {
      value: ''
    };
  },

  onChange: function (e) {
    this.props.onChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  },

  render: function () {
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
        <button className="kuma-button kuma-button-mwhite" onClick={this.props.handleClose} >Close</button>
        <button className="kuma-button kuma-button-mblue" onClick={this.props.handleSave}>Save changes</button>
      </div>
    </div>);
  }
});

var MyControl = React.createClass({
  onChange: function (v) {
    this.dialogContentInput = v;
  },

  beforeClose: function () {
    return new Promise((resolve) => {
      setTimeout(()=> {
        if (!this.dialogContentInput) {
          if (confirm('input is empty, decide to close?')) {
            resolve(true);
          }
        }
      }, 100);
    });
  },

  requestClose: function () {
    this.d.requestClose();
  },

  handleTrigger: function () {
    this.d = showDialog(
      <DialogContent onChange={this.onChange} handleClose={this.requestClose} handleSave={this.requestClose}/>, {
      title: "第二个弹框",
      onBeforeClose: this.beforeClose,
      style: {width: 600}
    });
  },


  render: function () {
    return (
      <div>
        <button className="kuma-button kuma-button-mblue" onClick={this.handleTrigger}>show dialog</button>
      </div>
    );
  }
});

React.render(
  <div>
    <h1>render dialog standalone</h1>
    <MyControl/>
  </div>,
  document.getElementById('components-dialog-demo-standalone')
);
````
