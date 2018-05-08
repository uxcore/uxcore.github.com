# 尺寸

- order: 1

提供 large、middle、small 三种尺寸

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
    const calendar = (
      <Calendar value={this.state.value} onSelect={this.onSelect.bind(this)} />
        );
    return (
      <div>
        {['large', 'middle', 'small'].map(size => (
          <div style={{ marginBottom: '4px' }}>
            {React.cloneElement(calendar, { size })}
          </div>
                    ))}
      </div>
    );
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-size'));
````
