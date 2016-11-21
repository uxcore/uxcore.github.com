# 基本使用

- order: 0

基本用法。

---

````jsx

import EmptyData from 'uxcore-empty-data';

class Demo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <div>
          <EmptyData style={{ width: '200px' }} />
        </div>
      );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-empty-data-demo-basic'));
````
