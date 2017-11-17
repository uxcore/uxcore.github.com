# 一、二、三级标题混排

- order: 3

一、二、三级标题混排

---

````jsx
import Title from 'uxcore-title';

class Demo extends React.Component {

  render() {
    const me = this;
    return (
      <div>
        <Title type="primary">新增面试标准</Title>
        <Title type="secondary">能力项设置</Title>
        <Title type="thirdary">专业能力</Title>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-title-demo-combo'));
````
