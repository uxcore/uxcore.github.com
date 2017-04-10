# 总数未知

- order: 7

基础分页。

---

````jsx
var Pagination = require('uxcore-pagination');

function onChange(page) {
  console.log(page);
}

ReactDOM.render(
  <Pagination onChange={onChange} current={2} />,
 document.getElementById('components-pagination-demo-unknown-total'));
````
