# 基本使用

- order: 0

基本使用。

---

````jsx
let Select = require('uxcore-select2');
let Option = Select.Option;

ReactDOM.render(
  <Select defaultValue="lucy" style={{width:200}}>
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="disabled" disabled>Disabled</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
, document.getElementById('components-select2-demo-basic'));
````
