幽灵按钮
========

- order: 3

背景变为透明，常用在有色背景上。

---

````jsx
const Button = require('uxcore-button');

ReactDOM.render(
  <div style={{ background: 'rgba(31, 56, 88, 0.4)' }}>
    <div
      style={{
        margin: '10px 0',
        padding: '10px 0',
      }}
    >
      <div>
        <Button style={{ marginLeft: '12px' }} ghost type="secondary">secondary</Button>
        <Button style={{ marginLeft: '12px' }} ghost type="outline">outline</Button>
        <Button style={{ marginLeft: '12px' }} ghost type="white">white</Button>
        <Button style={{ marginLeft: '12px' }} ghost danger type="secondary">danger</Button>
      </div>
      <div style={{ marginTop: 12 }}>
        <Button style={{ marginLeft: '12px' }} ghost disabled type="secondary">secondary disabled</Button>
        <Button style={{ marginLeft: '12px' }} ghost disabled type="outline">outline disabled</Button>
        <Button style={{ marginLeft: '12px' }} ghost type="white" disabled>white disabled</Button>
        <Button style={{ marginLeft: '12px' }} ghost danger disabled type="secondary">danger</Button>
      </div>
    </div>
  </div>
, document.getElementById('components-button-demo-ghost'));
````
