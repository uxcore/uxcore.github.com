# 自动折叠

- order: 4

通过 enableFold 打开

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
    }, {
      text: '条件二',
      value: 2,
      disable: true,
    }, {
      text: '条件三',
      value: 3,
    }, {
      text: '条件四',
      value: 4,
    }, {
      text: '条件五',
      value: 5,
    }, {
      text: '条件六',
      value: 6,
    }, {
      text: '条件七',
      value: 7,
    }];

    return (<div style={{ width: 400 }}>
      <div>
        <Pickable
          enableFold
          onChange={this.handleChange.bind(this)} value={this.state.value} type="hook"
        >
          {items.map((item, index) => <Item key={index} value={item.value} disabled={item.disable}>{item.text}</Item>)}
        </Pickable>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-pickable-demo-fold'));
````