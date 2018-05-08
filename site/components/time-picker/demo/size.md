# 尺寸

- order: 4

提供大中小三种尺寸

---

````jsx

import { TimePicker } from 'uxcore';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <TimePicker />
        <TimePicker size="middle" style={{ marginTop: 10 }} />
        <TimePicker size="small" style={{ marginTop: 10 }} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-time-picker-demo-size'));
````
