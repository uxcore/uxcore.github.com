# 总数未知

- order: 7

基础分页。

---

````jsx
import { Pagination } from 'uxcore';

function onChange(page) {
  console.log(page);
}

ReactDOM.render(
  <Pagination onChange={onChange} current={2} />,
 document.getElementById('components-pagination-demo-unknown-total'));
````
