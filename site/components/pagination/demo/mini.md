# 迷你

- order: 5

迷你版本。

---

````jsx
const Pagination = require('uxcore-pagination');

function onChange(page) {
  console.log(page);
}

ReactDOM.render(
  <Pagination className="mini" onChange={onChange} total={50} />,
 document.getElementById('components-pagination-demo-mini'));
````
