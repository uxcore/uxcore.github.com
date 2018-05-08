# 多选模式

- order: 2

带对勾的样式

---

````jsx
const classnames = require('classnames');

import { Pickable } from 'uxcore';
const { Item } = Pickable;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [1],
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    const items = [{
      text: '条件一',
      value: 1,
      num: 15,
    }, {
      text: '条件二',
      value: 2,
      num: 20,
    }, {
      text: '条件三',
      value: 3,
      disable: true,
    }];
    return (<div>
      <div>
        <Pickable onChange={this.handleChange.bind(this)} value={this.state.value} type="hook">
          {items.map((item, index) => <Item key={index} value={item.value} number={item.num} disabled={item.disable}>{item.text}</Item>)}
        </Pickable>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-pickable-demo-hook'));
````