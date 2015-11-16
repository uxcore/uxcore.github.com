# 基本使用

- order: 0

默认的提醒样式。

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

    render() {
        return (
            <div>
                <Alert className="alert1" message={' 这是一个 message'} type="message" />
                <Alert message={' 这是一个 error'} type="error" />
                <Alert message={' 这是一个 warning'} type="warning" />
                <Alert message={' 这是一个 success'} type="success" />
                <Alert message={' 这是一个 question'} type="question" />
                <Alert message={' 这是一个 stop'} type="stop" />
                <Alert message={' 这是一个 wait'} type="wait" />
            </div>
        );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-alert-demo-basic'));
````
