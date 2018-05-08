# 选择时分

- order: 2


---

````jsx

import { TimePicker } from 'uxcore';

class Demo extends React.Component {
  render() {
    return (
      <TimePicker showSecond={false} />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-time-picker-demo-hm'));
````
