# 添加新标签

- order: 1

基本使用。

---

````jsx
import { Tag } from 'uxcore';
const { Item } = Tag;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: ['用户体验', '精品打造', '精益求精'],
    };
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(value) {
    this.setState({
      list: this.state.list.concat([value]),
    });
  }

  render() {
    const me = this;
    return (
      <Tag onAdd={this.onAdd}>
        {this.state.list.map((item, index) => (
          <Item key={index}>{item}</Item>
                ))}
      </Tag>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-tag-demo-add'));
````
