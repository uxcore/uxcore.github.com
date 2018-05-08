# 定制文案

- order: 1

定制文案。

---

````jsx

import { EmptyData } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <EmptyData style={{ width: '200px' }}>
          <div style={{ lineHeight: 2 }}>
            <div>你还没有创建目标哦</div>
            <div>马上去<a>添加目标</a></div>
          </div>
        </EmptyData>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-empty-data-demo-custom'));
````
