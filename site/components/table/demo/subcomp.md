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
      width: 800,
      height: 400,
      fetchUrl,
      jsxcolumns: columns,
      rowSelection,
      renderSubComp: (rowData) =>
        (<div className="sub-box">
          <div className="sub-country">{`当前国家: ${rowData.country}`}</div>
          <div className="sub-city">{`当前城市: ${rowData.city}`}</div>
        </div>),
    };
    return (
      <div>
        <Table {...renderProps} ref={function saveRef(c) { me.table = c; }} />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-subcomp'))
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