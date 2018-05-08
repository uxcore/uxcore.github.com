# 基本

- order: 0

最简单的用法。

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
    return <Calendar locale="en-us" value={this.state.value} onSelect={this.onSelect.bind(this)} />;
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-basic'));
````
