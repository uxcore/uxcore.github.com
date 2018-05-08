# 实际场景

- order: 3

---

````jsx
import { Tag } from 'uxcore';
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
  {
    tag: 'owner创建100',
    count: 100,
    canAddCount: true,
    createByOwner: true,
  },
  {
    tag: '自己创建0',
    count: 0,
    canAddCount: true,
    createByOwner: false,
  },
  {
    tag: '自己创建1',
    count: 1,
    canAddCount: true,
    createByOwner: false,
  },
  {
    tag: '自己创建100',
    count: 100,
    canAddCount: true,
    createByOwner: false,
  },
  {
    tag: '他人创建0',
    count: 0,
    canAddCount: true,
    createByOwner: false,
  },
  {
    tag: '他人创建1',
    count: 1,
    canAddCount: true,
    createByOwner: false,
  },
  {
    tag: '他人创建100',
    count: 100,
    canAddCount: true,
    createByOwner: false,
  },
  {
    tag: '测试一下',
    count: 5,
    canAddCount: true,
    createByOwner: false,
  },
  {
    tag: '点过赞',
    count: 100,
    canAddCount: false,
    createByOwner: false,
  },
  {
    tag: '点过赞2',
    count: 2,
    canAddCount: false,
    createByOwner: false,
  },
];

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: tagData,
    };
  }

  onClickTag(tag) {
    console.log('点击标签: ', tag);
  }
  onAdd(tag) {
    const me = this;
    const data = me.state.data;


    const item = {
      tag,
      count: 0,
      canAddCount: false,
      createByOwner: false,
    };

    data.push(item);

    me.setState({
      data,
    });

    console.log(`添加标签: ${tag}`);
  }
  onLike(tag) {
    const me = this;
    let data = me.state.data;

    data = data.map((item) => {
      if (item.tag === tag) {
        item.count += 1;
        item.canAddCount = false;
      }
      return item;
    });

    me.setState({
      data,
    });

    console.log('赞标签: ', tag);
  }
  onDelete(tag, cb) {
    const me = this;
    let data = me.state.data;

    data = data.filter(item => item.tag !== tag);

    if (cb) {
      cb();
    }
    me.setState({
      data,
    });

    console.log(`删除标签: ${tag}`);
  }

  render() {
    const me = this;

    const props = {
      className: 'tag-classname',
      addTags: true,
      onAdd: me.onAdd.bind(me),
      locale: 'zh-cn',
      // locale: 'en-us'
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
              canDelete
              onClick={me.onClickTag.bind(me)}
              maxDisplayCount={99}
              onAddCount={me.onLike.bind(me)}
              onDelete={me.onDelete.bind(me)}
              confirmDeleteText="确定删除该标签吗?"
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
, document.getElementById('components-tag-demo-complex'));
````
