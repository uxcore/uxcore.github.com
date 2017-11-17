图标按钮
========

- order: 6

---

````jsx
const Button = require('uxcore-button');
const Icon = require('uxcore-icon');

ReactDOM.render(
  <div>
    <Button style={{ marginRight: '10px' }} size="small"><Icon name="xiazai" />small</Button>
    <Button style={{ marginRight: '10px' }} size="medium"><Icon name="xiazai" />medium</Button>
    <Button style={{ marginRight: '10px' }} size="large"><Icon name="xiazai" />large</Button>
    <Button style={{ marginRight: '10px' }} type="primary"><Icon name="xiazai" />primary</Button>
    <Button style={{ marginRight: '10px' }} type="secondary"><Icon name="xiazai" />secondary</Button>
    <Button style={{ marginRight: '10px' }} type="outline"><Icon name="xiazai" />outline</Button>
  </div>
, document.getElementById('components-button-demo-icon'));
````
