# 基本使用

- order: 0

基本使用。

---

````jsx
import { Select } from 'uxcore';
const Option = Select.Option;

ReactDOM.render(
  <Select defaultValue="lucy" style={{ width: 200 }} dropdownClassName="kuma-select2-selected-has-icon">
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="disabled" disabled>Disabled</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
, document.getElementById('components-select2-demo-basic'));
````
