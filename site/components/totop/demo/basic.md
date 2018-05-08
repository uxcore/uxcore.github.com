#  基本用法

- order: 0

基本用法。

---

````jsx
const classnames = require('classnames');

import { Totop } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Totop />
        <h1 style={{ fontSize: 22 }}>组件在屏幕的右下方</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
    document.getElementById('components-totop-demo-basic')
);
````
