# 警示按钮

- order: 3

用于页面内的影响较大的操作，一般配合二次确认使用。

---

````jsx
import { Button } from 'uxcore';

ReactDOM.render(
  <div>
    <Button danger type="primary">primary</Button>&nbsp;
    <Button danger type="secondary">secondary</Button>&nbsp;
    <Button danger type="outline">outline</Button>
  </div>
  , document.getElementById('components-button-demo-danger'));
````
