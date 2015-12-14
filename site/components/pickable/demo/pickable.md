# Pickable

- order: 0

可复选的筛选器。

---

````jsx
let Pickable = require('uxcore-pickable');
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
  <Pickable items={items} onChange={(values, items) => { console.info(values, items) }}/>
, document.getElementById('components-pickable-demo-pickable'));
````
