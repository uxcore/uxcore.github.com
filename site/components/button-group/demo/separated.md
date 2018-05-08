分隔型按钮组
========

- order: 2

按钮组中每个按钮分隔存在，允许超过一定个数时折叠。  
表格的操作列使用的就是这种形式。

---

````jsx
import { Button } from 'uxcore';
import { ButtonGroup } from 'uxcore';

ReactDOM.render(
  <div>
    <h2>分隔形态(全部展开、Button 型)</h2>
    <ButtonGroup separated maxLength={5}>
      <Button type="outline">One</Button>
      <Button type="outline">Two</Button>
      <Button type="outline">Three</Button>
      <Button type="outline">Four</Button>
      <Button type="outline">Five</Button>
    </ButtonGroup>
    <h2>分隔形态(部分收起、Button 型)</h2>
    <ButtonGroup separated maxLength={3}>
      <Button type="outline">One</Button>
      <Button type="outline">Two</Button>
      <Button type="outline">Three</Button>
      <Button type="outline">Four</Button>
      <Button type="outline">Five</Button>
    </ButtonGroup>
    <h2>分隔形态(全部收起、Button 型)</h2>
    <ButtonGroup separated maxLength={1} size="medium">
      <Button type="outline">One</Button>
      <Button type="outline">Two</Button>
      <Button type="outline">Three</Button>
      <Button type="outline">Four</Button>
      <Button type="outline">Five</Button>
    </ButtonGroup>
    <h2>分隔形态(部分收起、Button 型、不同 Button Type)</h2>
    <ButtonGroup separated maxLength={4}>
      <Button type="outline">One</Button>
      <Button type="secondary">Two</Button>
      <Button type="secondary">Three</Button>
      <Button type="secondary">Four</Button>
      <Button type="secondary">Five</Button>
    </ButtonGroup>
  </div>, document.getElementById('components-button-group-demo-separated'));
````

````css
h2 {
  margin: 8px 0;
}
````
