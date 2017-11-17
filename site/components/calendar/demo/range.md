# 不可选区间

- order: 3

设置 `disabledDate` 方法，来确定不可选时段。

如上例：不可选择今天之后的日期。

---

````jsx
const Calendar = require('uxcore-calendar');
function disabledDate(current, value) {
  return current.getTime() > Date.now();
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date().getTime(),
    };
  }
  onSelect(value) {
    console.log(value);
    this.setState({
      value,
    });
  }
  render() {
    return <Calendar disabledDate={disabledDate} value={this.state.value} onSelect={this.onSelect.bind(this)} />;
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-range'));
````
