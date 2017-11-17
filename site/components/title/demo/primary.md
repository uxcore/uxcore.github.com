# 一级标题

- order: 0

一级标题

---

````jsx
import Title from 'uxcore-title';

class Demo extends React.Component {

  render() {
    const me = this;
    return (
      <Title type="primary">新增面试标准</Title>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-title-demo-primary'));
````
