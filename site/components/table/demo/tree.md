# Tree 表格

- order: 3

树形表格，数据格式参考：http://uxco.re/components/table/demo/data.json

---

````jsx

import classnames from 'classnames';;
import { Table } from 'uxcore';

class Demo extends React.Component {

  render() {
    const me = this;
    const columns = [
      {
        dataKey: 'country',
        title: '国家国家国家国家',
        width: 200,
      },
      {
        dataKey: 'city',
        title: '城市',
        width: 200,
      },
      {
        dataKey: 'firstName',
        title: 'FristName',
        width: 200,
        
      },
      {
        dataKey: 'lastName',
        title: 'LastName',
        width: 200,
        
      },
      {
        dataKey: 'email',
        title: 'Email',
        width: 200,
        ordered: true,
      },
    ];

    const renderProps = {
      height: 400,
      // width: 800,
      showSearch: true,
      fetchUrl: '/components/table/demo/data.json',
      jsxcolumns: columns,
      renderModel: 'tree',
      rowSelection: {
        onSelect: (checked, selectedRow, selectedRows) => {
          console.log('selectedRows:', selectedRows);
        },
        onSelectAll: () => {},
      },
    };
    return (<Table {...renderProps} ref="table" />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-tree'));
````