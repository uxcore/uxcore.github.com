# 带有外部容器

- order: 1

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
                <Alert className="alert1" message={' 这是一个 message'} type="message" hasContainer={true}/>
                <Alert message={' 这是一个 error'} type="error" hasContainer={true}/>
                <Alert message={' 这是一个 warning'} type="warning" hasContainer={true}/>
                <Alert message={' 这是一个 success'} type="success" hasContainer={true}/>
                <Alert message={' 这是一个 question'} type="question" hasContainer={true}/>
                <Alert message={' 这是一个 stop'} type="stop" hasContainer={true}/>
                <Alert message={' 这是一个 wait'} type="wait" hasContainer={true}/>
            </div>
        );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-alert-demo-container'));

/* JS END CSS START*/
````

````css

.kuma-alert-container {
    margin-bottom: 10px;
}
````
