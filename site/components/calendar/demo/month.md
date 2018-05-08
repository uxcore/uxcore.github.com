# 月份面板

- order: 6

直接显示月份面板。

---

````jsx
import { Calendar } from 'uxcore';
const MonthCalendar = Calendar.MonthCalendar;


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
    return <MonthCalendar value={this.state.value} onSelect={this.onSelect.bind(this)} />;
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-month'));
````
