# Removeable

- order: 2

可移除的筛选器。

---

````jsx
let Removeable = require('uxcore-pickable').Removeable;
let items = [{
    text: '条件一',
    value: 1,
    checked: true
}, {
    text: '条件二',
    value: 2
}, {
    text: '条件三',
    value: 3
}];

ReactDOM.render(
  <Removeable items={items} onChange={(values, items) => { console.info(values, items) }}/>
, document.getElementById('components-pickable-demo-removeable'));
````