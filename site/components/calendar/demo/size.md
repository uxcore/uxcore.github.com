# 尺寸

- order: 1

提供 large、middle、small 三种尺寸

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
        const calendar = (
            <Calendar value={this.state.value} onSelect={this.onSelect.bind(this)} />
        );
        return (
            <div>
                {['large', 'middle', 'small'].map((size) => {
                    return (
                        <div style={{ marginBottom: '4px' }}>
                            {React.cloneElement(calendar, { size })}
                        </div>
                    )
                })}
            </div>
        );
    }

}

ReactDOM.render(
  <Demo />
, document.getElementById('components-calendar-demo-size'));
````
