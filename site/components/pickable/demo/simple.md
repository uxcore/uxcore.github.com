# Simple Type

- order: 2

精简模式，可以附带数字。

---

````jsx
const classnames = require('classnames');

const Pickable = require('uxcore-pickable');
const {Item} = Pickable;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: [1]
        }
    }

    handleChange(value) {
      this.setState({
        value: value
      })
    }

    render() {
      let items = [{
        text: '条件一',
        value: 1,
        num: 15
      }, {
        text: '条件二',
        value: 2,
        num: 20
      }, {
        text: '条件三',
        value: 3,
        disable: true
      }];
      return <div>
        <div>
          <Pickable onChange={this.handleChange.bind(this)} value={this.state.value} type="simple">
            {items.map((item, index) => {
              return <Item key={index} value={item.value} number={item.num} disabled={item.disable}>{item.text}</Item>
            })}
          </Pickable>
        </div>
      </div>;
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-pickable-demo-simple'));
````