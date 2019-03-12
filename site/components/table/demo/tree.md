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
        order: true,
      },
      {
        title: '操作',
        type: 'action',
        rightFixed: true,
        width: '300px',
        collapseNum: 5,
        actions: [
          {
            title: '新增子行',
            callback: (rowData) => {
              this.table.addSubRowFromTop({
                "country": `中国`,
                "city": "杭州",
                "firstName": `FirstName_${setTimeout(0)}`,
                "lastName": "LastName",
              }, rowData, () => {
                console.log(this.table.getData())
              })
            }
          },
          {
            title: '删除',
            callback: (rowData) => {
              this.table.delRow(rowData);
            },
          }
        ],
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
    return (<Table {...renderProps} ref={(c) => {this.table = c}} />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-tree'));
````
