# 时间选择

- order: 4

准确到秒的时间选择面板。

---

````jsx
var Calendar = require('uxcore-calendar');

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '2016-01-02'
        }
    }
    onSelect(value) {
        console.log(value);
        this.setState({
            value: value
        });
    }
    render() {
        return <Calendar hasTrigger={true} showTime={true} format="yyyy-MM-dd HH:mm:ss" value={this.state.value} onSelect={this.onSelect.bind(this)} />
    }

}


ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-time'));
````
