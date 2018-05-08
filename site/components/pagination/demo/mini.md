# 迷你

- order: 5

迷你版本。

---

````jsx
import { Pagination } from 'uxcore';

function onChange(page) {
  console.log(page);
}

ReactDOM.render(
  <Pagination className="mini" onChange={onChange} total={50} />,
 document.getElementById('components-pagination-demo-mini'));
````
