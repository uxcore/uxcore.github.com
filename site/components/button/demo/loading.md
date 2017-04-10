加载态
========

- order: 3

加载的状态

---

````jsx
var Button = require('uxcore-button');

ReactDOM.render(
  <div>
    <Button style={{ marginRight: '12px', }} loading size="small">small</Button>
    <Button style={{ marginRight: '12px', }} loading size="medium">medium</Button>
    <Button style={{ marginRight: '12px', }} loading size="large">large</Button>
    <Button style={{ marginRight: '12px', }} loading type="primary">primary</Button>
    <Button style={{ marginRight: '12px', }} loading type="secondary">secondary</Button>
    <Button style={{ marginRight: '12px', }} loading type="outline">outline</Button>
  </div>
, document.getElementById('components-button-demo-loading'));
````
