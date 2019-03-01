# 快速区间选择

- order: 4

---

````jsx
import { Calendar } from 'uxcore';
const { RangeCalendar } = Calendar;

function disabledDate(current, value) {
  return current.getTime() > Date.now();
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: null,
    };
  }
  onRangeSelect(value) {
      this.setState({
        rangeValue: value,
      });
  }
  render() {
    return (
      <div>
        <RangeCalendar
          value={this.state.rangeValue}
          quickSelectRanges={[
            {
              text: '19年1、2月份',
              value: {
                start: '2019-01',
                end: '2019-02'
              }
            },
            {
              text: '18年S2',
              value: {
                start: '2018-09',
                end: '2019-03'
              }
            }
          ]}
          onSelect={(v, formatted) => {
            this.onRangeSelect(v, formatted);
          }}
        />
      </div>
    )
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-quickrange'));
````
