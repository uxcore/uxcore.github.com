# 基本

- order: 0

---

````jsx
const classnames = require('classnames');

const LoadMore = require('uxcore-load-more');

let loadTimes = 0;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadState: 'loaded', // loading noMore
      lines: [],
    };
  }

  onLoadMore() {
    const me = this;

    me.setState({
      loadState: 'loading',
    });

    setTimeout(() => {
      const lines = me.state.lines;

      if (++loadTimes < 5) {
        for (let i = 0; i < 50; i++) {
          lines.push(<p key={`${loadTimes}-${i}`}>第{loadTimes}次加载，当前是第{i + 1}条数据</p>);
        }

        me.setState({
          lines,
          loadState: 'loaded',
        });
      } else {
        me.setState({
          loadState: 'noMore',
        });
      }
    }, 1000);
  }

  render() {
    const me = this;

    const props = {
      status: me.state.loadState,
      className: 'demo-class-name',
      trigger: ['view', 'click'],
      onLoadMore: me.onLoadMore.bind(me),
      locale: 'zh-cn',
      viewLoadDelay: 150,

      loadText: '查看更多',
      loadingText: '加载中',
      noMoreText: '没有更多',
    };

    return (
      <div className="demo-content">
        {me.state.lines}
        <LoadMore {...props} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-load-more-demo-basic'));
````

````css
.demo-content {
  margin: 10px auto;
  max-height: 300px;
  overflow: auto;
}

.demo-content p {
  text-align: center;
  font-size: 14px;
  background: #fafafa;
  height: 30px;
  line-height: 30px;
}
````
