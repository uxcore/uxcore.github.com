# 不带搜索框

- order: 1

在浮层内顶部有搜索框的单项选择器。

---

````jsx
let Select = require('uxcore-select2');
let Option = Select.Option;

function handleChange(value) {
  console.log('selected ' + value);
}

ReactDOM.render(
  <Select defaultValue="lucy" showSearch={false} style={{width:200}} onChange={handleChange}>
    <Option value="jack">jack</Option>
    <Option value="lucy">lucy</Option>
    <Option value="disabled" disabled>disabled</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
, document.getElementById('components-select2-demo-search'));
````
