# 显示总条数

- order: 4

更多分页。

---

````jsx
var Pagination = require('uxcore-pagination');

function onChange(page) {
  console.log(page);
}

ReactDOM.render(
  <Pagination onChange={onChange} total={500} showTotal />,
 document.getElementById('components-pagination-demo-total'));
````
