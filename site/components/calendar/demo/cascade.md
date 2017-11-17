# 级联

- order: 10

我们推荐在只有年月日级联选择的情况下使用此面板，对于有时间选择的情况使用 Form 中提供的双输入框级联方式。

---

````jsx
const Calendar = require('uxcore-calendar');

const { RangeCalendar } = Calendar;


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onRangeSelect(value) {
    this.setState({
      rangeValue: value,
    });
  }

  render() {
    return (
      <RangeCalendar
        value={this.state.rangeValue}
        onSelect={(v, formatted) => {
          console.log(v, formatted);
          this.onRangeSelect(v, formatted);
        }}
      />
    );
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-cascade'));
````
