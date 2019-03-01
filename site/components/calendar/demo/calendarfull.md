# 大日历

- order: 10

大日历日期选择,跨日程，提供Calendar.util.generateScheduleContent方法，返回具体日程的相关信息。

---

````jsx
import { Calendar } from 'uxcore';
const { CalendarFull } = Calendar

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
    return (
      <CalendarFull
        value={this.state.value}
        onSelect={this.onSelect}
        fullscreen
        type="month"
        locale="zh-cn"
        format="yyyy/MM/dd"
        scheduleRender={Calendar.fullUtil.generateScheduleContent(events)}
        startHour={8}
        endHour={18}
        step={60}
      />
    )
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-calendarfull'));
````
