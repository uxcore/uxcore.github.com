# 高级表格 (操作栏 + 自定义列 + 分页)

- order: 2

---

````jsx

const Table = require('uxcore-table');

class Demo extends React.Component {

  render() {
    const me = this;
    // 通过 rowSelection 对象表明需要行选择
    const rowSelection = {
      onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
      },
      onSelectAll(selected, selectedRows) {
        console.log(selected, selectedRows);
      },
    };

    const columns = [
      { dataKey: 'country', title: '国家', width: 200, ordered: true },
      { dataKey: 'city', title: '城市', width: 200, ordered: true },
      { dataKey: 'firstName', title: 'FristName', width: 200 },
      { dataKey: 'lastName', title: 'LastName', width: 200 },
      { dataKey: 'email', title: 'Email', width: 200, ordered: true },
    ];

    const fetchUrl = '/components/table/demo/data.json';

    const renderProps = {
      height: 400,
      actionBar: {
        操作条(type, table) {
          alert(type);
        },
      },
      className: 'kuma-uxtable-split-line',
      showSearch: true,
      fetchParams: {},
      fetchUrl,
      jsxcolumns: columns,
      rowSelection,
    };
    return (<Table {...renderProps} />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-adv'));
````