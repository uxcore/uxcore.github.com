# 显示输入

- order: 9

可以在输入框中直接修改时间。

---

````jsx
import { Calendar } from 'uxcore';


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
    return <Calendar locale="en-us" value={this.state.value} onSelect={this.onSelect.bind(this)} showDateInput />;
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-dateinput'));
````
