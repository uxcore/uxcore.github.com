# 不带边框选择

- order: 7

不带边框选择。

---

````jsx
let Select = require('uxcore-select2');
let Option = Select.Option;

ReactDOM.render(
    <Select
        className="kuma-select2-inline"
        placeholder="请选择"
        showSearch={false}
        dropdownMatchSelectWidth={false}
        dropdownClassName="kuma-select2-inline-dropdown"
        dropdownAlign={{'offset': [0, -1]}}
        dropdownStyle={{width: 200}}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">LucyLucyLucyLucyLucyLucyLucyLucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="yiminghe">yiminghe</Option>
    </Select>
, document.getElementById('components-select2-demo-inline'));
````
