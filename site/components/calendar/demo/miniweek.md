# MiniWeek

- order: 10


---

````jsx
import { Calendar } from 'uxcore';
const { MiniWeek } = Calendar

const events = [
  {
    start: '2018-12-24 14:00', // 事件开始时间
    end: '2018-12-24 16:00', // 事件结束时间
    important: true,
    // 事件的渲染函数
    render: () => <div>24</div>,
  },
  {
    start: '2018-12-24 14:00', // 事件开始时间
    end: '2018-12-25 16:00', // 事件结束时间
    important: true,
    // 事件的渲染函数
    render: () => <div>24</div>,
  },
  {
    start: '2018-12-23 14:00', // 事件开始时间
    end: '2018-12-27 16:00', // 事件结束时间
    // 事件的渲染函数
    render: () => <div>21-29</div>,
  }
]
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2018-12-02',
    };
  }
  onSelect(value) {
    console.log(value);
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <MiniWeek
          value="2018-12-24"
          locale="en-us"
          events={events}
          scheduleRender={this.miniWeekRender}
          getPopupContainer={() => this.miniRender}
        />
        <div className="miniweek-container" ref={(c) => { this.miniRender = c; }} />
      </div>
    )
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-miniweek'));
````
