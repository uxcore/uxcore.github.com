# 自动折叠（配置行数）

- order: 5

通过配置 maxLines 可以实现不同的收起效果

---

````jsx
import classnames from 'classnames';;

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
    }, {
      text: '条件八',
      value: 8,
    }, {
      text: '条件九',
      value: 9,
    }];

    return (<div style={{ width: 350 }}>
      <div>
        <Pickable
          enableFold
          maxLines={2}
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
, document.getElementById('components-pickable-demo-fold-max-lines'));
````