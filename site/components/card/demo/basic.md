# 基本使用

- order: 0

---

````jsx
import classnames from 'classnames';;
import { Card, Icon } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const cardProps = {
      title: 'Title Title Title Title Title',
      tip: '这是一个提示',
      icon: <Icon usei name="shangchuan" />,
      extra: (
        <a>
        自定义操作
        </a>
      ),
      className: 'card-demo',
      showCollapseIcon: true,
      contentPaddingSize: 'none',
    };
    return (
      <Card
        title="Card title"
        extra={<a href="#">More</a>}
        className="card-demo"
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-card-demo-basic'));

````

````css
.code-box-demo {
  background: rgba(31, 56, 88, 0.3);
}

.card-demo {
  width: 300px;
}

````

