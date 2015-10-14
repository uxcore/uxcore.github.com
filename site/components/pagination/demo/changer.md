# 改变

- order: 2

改变每页显示条目数。

---

````jsx
var Pagination = require('uxcore-pagination');

function onChange(page) {
  console.log(page);
}

ReactDOM.render(
  <Pagination showSizeChanger={true} onChange={onChange} total={500} />,
 document.getElementById('components-pagination-demo-changer'));
````
