# 标签

- order: 4

这种模式下可以让输入的值成为一个选项。

---


````jsx
let Select = require('uxcore-select2');
let Option = Select.Option;

let children = [];
for (var i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log('selected ' + value);
}

ReactDOM.render(
  <Select
    dropdownClassName="kuma-select2-selected-has-icon"
   style={{width:400}}
  tags defaultValue={['name2', 'name3']} onChange={handleChange}>
    {children}
  </Select>
, document.getElementById('components-select2-demo-tags'));
````
