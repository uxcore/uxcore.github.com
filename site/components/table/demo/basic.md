# 基本表格

- order: 0

---

````jsx

const Table = require('uxcore-table');

class Demo extends React.Component {
  render() {
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
      actionColumn: {
        edit() {},
        del() {},
      },
      className: 'kuma-uxtable-split-line',
      fetchParams: {},
      showColumnPicker: false,
      fetchUrl,
      jsxcolumns: columns,
    };
    return (<Table {...renderProps} />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-basic'));
````