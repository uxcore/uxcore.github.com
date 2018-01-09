# 大表头

- order: 6

列分组

---

````jsx

const Table = require('uxcore-table');
const Button = require('uxcore-button');

// 第一列为radio的demo
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      text: 1,
    };
  }
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
        group: '分组',
        columns: [
          {
            dataKey: 'id',
            title: 'ID',
            width: 50,
          },
          {
            dataKey: 'country',
            title: '国家',
            width: 200,
            ordered: true,
          },
        ],
      },
      {
        dataKey: 'city',
        title: () => '城市',
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
        group: '分组5',
        columns: [
          {
            dataKey: 'id',
            title: 'ID',
            width: 50,
          },
          {
            dataKey: 'country',
            title: '国家',
            width: 200,
            ordered: true,
          },
        ],
      },
      {
        dataKey: 'email',
        title: 'Email',
        width: 200,
        ordered: true,
      }, {
        dataKey: 'action',
        title: '链接',
        width: 100,
        render() {
          return <div><a>111</a></div>;
        },
      },
    ];
    const fetchUrl = 'http://eternalsky.me:8122/file/getGridJson.jsonp';
    const renderProps = {
      height: 400,
      pagerSizeOptions: [5, 10, 15, 20],
      actionBar: {
        Action() {
          me.setState({
            text: 2,
          });
        },
      },
      showSearch: false,
      showColumnPicker: true,
      fetchUrl,
      rowSelector: 'checkboxSelector',
      jsxcolumns: columns,
      rowSelection,
    };
    return (
      <div>
        <Table {...renderProps} className="kuma-uxtable-border-line" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-group'));
````