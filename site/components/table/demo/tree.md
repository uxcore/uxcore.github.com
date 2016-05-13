# Tree 表格

- order: 3

树形表格，数据格式参考：http://uxco.re/components/table/demo/data.json

---

````jsx

let classnames = require('classnames');
let Table = require('uxcore-table');
let urlPrefix = './';


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  render() {

    let me = this;
    let columns = [
      {
        dataKey: 'id',
        title: 'ID',
        width: 50,
        hidden: true
      },
      {
        dataKey: 'country',
        title: '国家国家国家国家',
        width: 200,
        ordered: true,
        type: 'money',
        delimiter: ','
      },
      {
        dataKey: 'city',
        title: '城市',
        width: 150
      },
      {
        dataKey: 'firstName',
        title: 'FristName'
      },
      {
        dataKey: 'lastName',
        title: 'LastName'
      },
      {
        dataKey: 'email',
        title: 'Email',
        width: 200,
        ordered: true
      }
    ];

    let renderProps = {
      height: 400,
      showSearch: true,
      fetchUrl: urlPrefix + 'demo/data.json',
      jsxcolumns: columns,
      renderModel: 'tree'
    };
    return (<Table {...renderProps} ref="table" />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-tree'))
````