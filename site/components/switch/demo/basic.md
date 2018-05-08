# 基本使用

- order: 0

---

````jsx
import { Switch } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{
        padding: 10,
      }}
      >
        <Switch checkedChildren="显示" unCheckedChildren="隐藏" disabled={false} />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-switch-demo-basic'));
````
