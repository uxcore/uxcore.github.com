# 其他类型

- order: 3

除通用缺省页外，我们还提供了其他 5 种类型的常用空图片

---

````jsx

import { EmptyData } from 'uxcore';
import { Button } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {[{
          img: 'access_restriction',
          name: '权限限制',
        }, {
          img: 'active_empty',
          name: '查询类空页面',
        }, {
          img: 'request_error',
          name: '网页请求错误',
        }, {
          img: 'search_empty',
          name: '网页请求错误',
        }, {
          img: 'unknown_error',
          name: '未知错误',
        }].map(item => (
          <EmptyData style={{ width: '200px', display: 'inline-block' }} icon={`https://g.alicdn.com/uxcore/pic/${item.img}.png`}>
            <div style={{ lineHeight: 2 }}>
              <div>{item.name}</div>
            </div>
          </EmptyData>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-empty-data-demo-other'));
````
