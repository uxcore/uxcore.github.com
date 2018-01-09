# 行展开

- order: 7

Table 允许用户传入自定义行展开内容。

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
      {
        dataKey: 'select',
        type: 'checkboxSelector',
      },
      {
        dataKey: 'id',
        title: 'ID',
        width: 50,
        hidden: true,
      },
      {
        dataKey: 'country',
        title: '国家',
        width: 200,
        ordered: true,
      },
      {
        dataKey: 'city',
        title: '城市',
        width: 150,
        ordered: true,
        message: '都是中国城市',
      },
      {
        dataKey: 'firstName',
        title: 'FristName',
      },
      {
        dataKey: 'lastName',
        title: 'LastName',
      },
      {
        dataKey: 'email',
        title: 'Email',
        width: 200,
        ordered: true,
      },
    ];
    const fetchUrl = 'http://eternalsky.me:8122/file/getGridJson.jsonp';
    const renderProps = {
      height: 400,
      fetchUrl,
      jsxcolumns: columns,
      rowSelection,
      className: 'kuma-uxtable-split-line',
      renderSubComp: (rowData) => {
        console.log(rowData);
        const subProps = {
          jsxcolumns: [
            {
              dataKey: 'id',
              title: '序号',
            },
            {
              dataKey: 'class',
              title: '分类',
              width: 200,
            },
            {
              dataKey: 'dep',
              title: '部门',
              width: 200,
            },
            {
              dataKey: 'person',
              title: '采购员',
              width: 200,
            },
          ],
          jsxdata: {
            data: [
              { id: '001', class: 'API管理系统', dep: '用户体验部', person: '大圣' },
              { id: '002', class: 'API管理系统', dep: '用户体验部', person: '大圣' },
              { id: '003', class: 'API管理系统', dep: '用户体验部', person: '大圣' },
              { id: '004', class: 'API管理系统', dep: '用户体验部', person: '大圣' },
            ],
          },
          className: 'kuma-uxtable-ghost',
        };
        return (
          <div style={{ padding: '0 24px', background: 'rgba(31,56,88,0.04)' }}>
            <Table {...subProps} />
          </div>
        );
      },
    };
    return (
      <div>
        <Table {...renderProps} ref={function saveRef(c) { me.table = c; }} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-subcomp'));
````

````css
.sub-box {
    border: 1px dashed yellowgreen;
    
}
.sub-box > div {
    display: inline-block;
    font-size: 16px;
    width: 200px;
    line-height: 40px;
    padding: 10px 20px;
}
````