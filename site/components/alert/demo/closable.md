# 关闭图标

- order: 2


---

````jsx

let Alert = require('uxcore-alert');
let Button = require('uxcore-button');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleShow() {
        this.refs.alert.toggleShow();
    }

    render() {
        return (
            <div>
                <Alert ref="alert" message={' 这是一个 message'} type="message" closable={true} />
                <Button onClick={this.handleShow.bind(this)}>手动切换是否显示</Button>
            </div>
        );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-alert-demo-closable'));
````
