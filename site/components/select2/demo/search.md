# 不显示搜索框

- order: 1

当不需要搜索功能时，可以将 showSearch 置为 false

---

````jsx
const Select = require('uxcore-select2');
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select defaultValue="lucy" showSearch={false} style={{ width: 200 }} onChange={handleChange} dropdownClassName="kuma-select2-selected-has-icon">
    <Option value="jack">jack</Option>
    <Option value="lucy">lucy</Option>
    <Option value="disabled" disabled>disabled</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
, document.getElementById('components-select2-demo-search'));
````
