# Grid

- category: Components
- chinese: 表格
- order: 6

---

```js
var Grid = require('uxcore-grid');

var renderProps={
    headerHeight:50,
    width:700,
    height:500,
    columnPicker: true,
    onPageChange: this.onPageChange,
    onModifyRow: this.onModifyRow,
    rowSelection: rowSelection,
    jsxdata:this.state.data,
    jsxcolumns:columns
};

React.render(
  <Grid {...renderProps} />,
  document.getElementById('target'));
```

## development
```
$ git clone https://github.com/uxcore/grid
$ cd grid
$ npm install
$ npm run dev
```

## API
todo
