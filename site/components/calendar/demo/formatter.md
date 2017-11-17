# 日期格式

- order: 1

使用 `format` 属性，可以自定义你需要的日期显示格式，如 `yyyy/MM/dd`。

---

````jsx
const Calendar = require('uxcore-calendar');

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2016-01-02',
    };
  }
  onSelect(value) {
    console.log(value);
    this.setState({
      value,
    });
  }
  render() {
    return <Calendar value={this.state.value} format="yyyy/MM/dd" onSelect={this.onSelect.bind(this)} />;
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-formatter'));
````
