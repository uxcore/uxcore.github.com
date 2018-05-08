# 页面使用

- order: 2

在页面级的使用。

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
        <EmptyData style={{ width: '200px' }} type="large">
          <div>你还没有创建目标哦</div>
          <Button type="outline" style={{ marginTop: '10px' }}>添加目标</Button>
        </EmptyData>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-empty-data-demo-page'));
````
