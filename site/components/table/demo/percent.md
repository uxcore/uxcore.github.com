# 百分比布局 + 可调整列宽

- order: 2

表格的列按照百分比布局，同时支持和列固定的组合。拖动屏幕边缘，调整表格整体宽度试一试~

列标题处支持拖拽调整列宽。

---

````jsx

import { Table } from 'uxcore';

class Demo extends React.Component {
  render() {
    const columns = [
      { dataKey: 'country', title: '国家', width: '30%', ordered: true },
      { dataKey: 'city', title: '城市', width: '20%', ordered: true },
      { dataKey: 'firstName', title: 'FristName', width: '15%' },
      { dataKey: 'lastName', title: 'LastName', width: '20%' },
      { dataKey: 'email', title: 'Email', width: '15%', ordered: true },
    ];

    const fetchUrl = '/components/table/demo/data.json';

    const renderProps = {
      height: 400,
      actionColumn: {
        edit() {},
        del() {},
      },
      columnResizeable: true,
      className: 'kuma-uxtable-border-line',
      fetchParams: {},
      showColumnPicker: false,
      fetchUrl,
      jsxcolumns: columns,
    };
    return (<Table {...renderProps} />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-percent'));
````
