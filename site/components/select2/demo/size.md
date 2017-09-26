# 尺寸

- order: 1

提供 large、middle、small 三种尺寸

---

````jsx
let Select = require('uxcore-select2');
let Option = Select.Option;

function handleChange(value) {
  console.log('selected ' + value);
}

const select = (
  <Select defaultValue="lucy" showSearch={false} style={{ width:200, display: 'block', marginBottom: '4px' }} onChange={handleChange} dropdownClassName="kuma-select2-selected-has-icon">
    <Option value="jack">jack</Option>
    <Option value="lucy">lucy</Option>
    <Option value="disabled" disabled>disabled</Option>
    <Option value="yiminghe">yiminghe</Option>
  </Select>
);

ReactDOM.render(
  <div>
    {['large', 'middle', 'small'].map((size) => {
      return React.cloneElement(select, {
        size,
      })
    })}
  </div>
, document.getElementById('components-select2-demo-size'));
````
