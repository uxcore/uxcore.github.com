# 可关闭

- order: 2


---

````jsx

const Alert = require('uxcore-alert');
const Button = require('uxcore-button');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleShow() {
    this.refs.alert.toggleShow();
  }

  render() {
    return (
      <div>
        <Alert ref="alert" message={' 这是一个 message'} type="message" closable />
        <Button onClick={this.handleShow.bind(this)}>手动切换是否显示</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-alert-demo-closable'));
````
