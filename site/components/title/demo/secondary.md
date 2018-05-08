# 二级标题

- order: 1

二级标题

---

````jsx
import { Title } from 'uxcore';

class Demo extends React.Component {

  render() {
    const me = this;
    return (
      <Title type="secondary">能力项设置</Title>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-title-demo-secondary'));
````
