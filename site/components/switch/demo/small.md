# 无文字

- order: 0

---

````jsx
const Switch = require('uxcore-switch');

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <Switch checkedChildren="" unCheckedChildren="" className="kuma-switch-no-text" disabled={false} />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, document.getElementById('components-switch-demo-small'));
````
