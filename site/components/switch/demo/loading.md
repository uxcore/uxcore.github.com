# 加载状态

- order: 3

---

````jsx
import { Switch } from 'uxcore';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <Switch
          loading={this.state.loading}
          checked={this.state.checked}
          onChange={(checked) => {
            this.setState({
              loading: true,
            });
            setTimeout(() => {
              this.setState({
                checked,
                loading: false,
              });
            }, 2000);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, document.getElementById('components-switch-demo-loading'));
````
