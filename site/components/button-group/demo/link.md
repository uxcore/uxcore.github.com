分隔型按钮组（链接型）
========

- order: 3

按钮组中每个链接分隔存在，允许超过一定个数时折叠。

---

````jsx
import { Button } from 'uxcore';
import { ButtonGroup } from 'uxcore';

ReactDOM.render(
  <div>
    <h2>分隔形态(全部展开、Link 型)</h2>
    <ButtonGroup separated actionType="link" maxLength={5}>
      <Button type="outline">One</Button>
      <Button type="outline">Two</Button>
      <Button type="outline">Three</Button>
      <Button type="outline">Four</Button>
      <Button type="outline">Five</Button>
    </ButtonGroup>
    <h2>分隔形态(部分收起、Link 型)</h2>
    <ButtonGroup separated actionType="link" maxLength={3}>
      <Button type="outline">One</Button>
      <Button type="outline">Two</Button>
      <Button type="outline">Three</Button>
      <Button type="outline">Four</Button>
      <Button type="outline">Five</Button>
    </ButtonGroup>
    <h2>分隔形态(全部收起、Link 型)</h2>
    <ButtonGroup separated actionType="link" maxLength={1}>
      <Button type="outline">One</Button>
      <Button type="outline">Two</Button>
      <Button type="outline">Three</Button>
      <Button type="outline">Four</Button>
      <Button type="outline">Five</Button>
    </ButtonGroup>
  </div>, document.getElementById('components-button-group-demo-link'));
````

````css
h2 {
  margin: 8px 0;
}
````
