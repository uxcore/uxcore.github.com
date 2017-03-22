# 禁用

- order: 1

---

````jsx
let Switch = require('uxcore-switch');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div style={{
                padding: 10
            }}>
                <Switch
                    checkedChildren="显示"
                    unCheckedChildren="隐藏"
                    disabled
                />
            </div>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-switch-demo-disabled'));
````
