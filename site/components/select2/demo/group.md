# 分组

- order: 6

option分组

---


````jsx
const Select = require('uxcore-select2');
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select defaultValue="lucy"
    style={{ width: 200 }}
    dropdownClassName="kuma-select2-selected-has-icon"
    showSearch={false}
    onChange={handleChange}
  >
    <OptGroup label="Manager">
      <Option value="jack">jack</Option>
      <Option value="lucy">lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>, document.getElementById('components-select2-demo-group'));
````
