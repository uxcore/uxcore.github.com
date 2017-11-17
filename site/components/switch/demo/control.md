# 受控

- order: 2

---

````jsx
const Switch = require('uxcore-switch');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div style={{
        padding: 10,
      }}
      >
        <Switch
          checked={this.state.checked}
          checkedChildren="显示"
          unCheckedChildren="隐藏"
          onChange={() => {
            this.setState({
              checked: !this.state.checked,
            });
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-switch-demo-control'));
````
