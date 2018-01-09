基本使用
========

- order: 1

传统意义上的按钮组

---

````jsx
const Button = require('uxcore-button');
const ButtonGroup = require('uxcore-button-group');

ReactDOM.render(
  <div>
    <h2>一级按钮</h2>
    <ButtonGroup type="primary">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <h2>二级按钮</h2>
    <ButtonGroup type="secondary">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <h2>outline</h2>
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </div>, document.getElementById('components-button-group-demo-basic'));
````

````css
h2 {
  margin: 8px 0;
}
````