# 点赞

- order: 2

---

````jsx
const Tag = require('uxcore-tag');
const { Item } = Tag;

const tagData = [
  {
    tag: 'owner创建0',
    count: 0,
    canAddCount: true,
    createByOwner: true,
  },
  {
    tag: 'owner创建1',
    count: 1,
    canAddCount: true,
    createByOwner: true,
  },
];

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: tagData,
    };
  }

  onLike(tag) {
    const me = this;
    let data = me.state.data;

    data = data.map((item) => {
      if (item.tag === tag) {
        item.count += 1;
      }
      return item;
    });

    me.setState({
      data,
    });

    console.log('赞标签: ', tag);
  }

  render() {
    const me = this;

    const props = {
      className: 'tag-classname',
      addTags: false,
      locale: 'zh-cn',
    };

    return (
      <div className="demo">

        <Tag {...props}>
          {me.state.data.map((item, index) => (
            <Item
              key={`uxcore-tag-item-${index}`}
              className={item.createByOwner ? 'create-by-owner' : ''}
              tag={item.tag}
              count={item.count}
              canAddCount={item.canAddCount}
              maxDisplayCount={99}
              onAddCount={me.onLike.bind(me)}
              locale="zh-cn"
            >
              {item.tag}
            </Item>
          ))}
        </Tag>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-tag-demo-like'));
````
