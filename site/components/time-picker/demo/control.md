# 受控模式

- order: 1

通过 value 和 onChange 进入受控模式

---

````jsx

import { TimePicker } from 'uxcore';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date().getTime(),
    };
  }
  render() {
    return (
      <TimePicker
        value={this.state.value}
        onChange={(value) => {
          console.log(value);
          this.setState({ value });
        }}
      />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-time-picker-demo-control'));
````
