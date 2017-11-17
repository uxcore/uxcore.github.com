# 带有外部容器

- order: 1

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
  render() {
    return (
      <div>
        <Alert className="alert1" message={' 这是一个 message'} type="message" hasContainer />
        <Alert message={' 这是一个 success'} type="success" hasContainer />
        <Alert message={' 这是一个 warning'} type="warning" hasContainer />
        <Alert message={' 这是一个 error'} type="error" hasContainer />
      </div>
    );
  }
}

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
