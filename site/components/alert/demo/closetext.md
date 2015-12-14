# 关闭文字替换图标

- order: 3

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
                <Alert message={' 这是一个 message'} type="message" closable={true} closeText="不再显示" />
            </div>
        );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-alert-demo-closetext'));
````
