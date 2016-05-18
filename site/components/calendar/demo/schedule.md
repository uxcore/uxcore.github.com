# 显示日期和日程

- order: 8

Calendar 通过开放 contentRender 参数来完成日期渲染上的定制，并提供了一个默认的渲染函数 Calendar.util.generateContentRender(code) 来完成通用定制。

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
        return <Calendar value={this.state.value} 
                    onSelect={this.onSelect.bind(this)} contentRender={Calendar.util.generateContentRender({
                        '2016-01-07': 'leave',
                        '2016-01-09': 'work',
                        '2016-01-08': 'schedule'
                    }, 'en')}/>
    }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-schedule'));
````
