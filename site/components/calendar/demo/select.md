# 选择日期

- order: 2

通过设置选择日期的回调事件 `onSelect`，完成交互行为。

---

````jsx
var Calendar = require('uxcore-calendar');

var Picker = React.createClass({
  handleChange: function(value) {
    console.log(new Date(value.getTime()));
  },
  render: function() {
    return <Calendar onSelect={this.handleChange} />
  }
});

React.render(
  <Picker />
, document.getElementById('components-calendar-demo-select'));
````
