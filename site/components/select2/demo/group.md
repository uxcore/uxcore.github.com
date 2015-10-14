# 分组

- order: 5

option分组

---


````jsx
let Select = require('uxcore-select2');
let {Option, OptGroup} = Select;

function handleChange(value) {
  console.log('selected ' + value);
}

ReactDOM.render(
    <Select defaultValue="lucy"
        style={{width:200}}
        showSearch={false}
        onChange={handleChange}>
        <OptGroup label="Manager">
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
        </OptGroup>
        <OptGroup label="Engineer">
            <Option value="yiminghe">yiminghe</Option>
        </OptGroup>
    </Select>, document.getElementById('components-select2-demo-group'));
````
