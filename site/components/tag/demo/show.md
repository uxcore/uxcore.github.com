# 展示型

- order: 4

用于展示的 tag。

---

````jsx
import { Tag } from 'uxcore';
const { Item } = Tag;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showData: ['关键词：阿里', '关键词：百度'],
    };
  }

  onDelete2(tag, cb) {
    const showData = this.state.showData.filter(item => item !== tag);
    this.setState({
      showData,
    }, () => {
      if (cb) {
        cb();
      }
    });
  }

  render() {
    const me = this;
    return (
      <div>
        <h2 style={{ margin: '8px 0' }}>展示型 TAG （只读）</h2>
        <Tag addTags={false}>
          <Item type="show">Top50 入职学校</Item>
          <Item type="success">积极提醒</Item>
          <Item type="danger">警示提醒</Item>
          <Item type="info">常规提醒</Item>
          <Item type="warning">注意</Item>
        </Tag>
        <h2 style={{ margin: '8px 0' }}>展示型 TAG （可删除）</h2>
        <Tag addTags={false}>
          {me.state.showData.map(item => (
            <Item type="show" canDelete key={item} tag={item} onDelete={me.onDelete2.bind(me)}>{item}</Item>
                ))}
        </Tag>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-tag-demo-show'));
````
