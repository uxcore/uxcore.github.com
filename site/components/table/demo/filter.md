# 列筛选

- order: 4

---

````jsx

import { Table } from 'uxcore';

class Demo extends React.Component {
  render() {
    const columns = [
      { dataKey: 'country', title: '国家', width: 200, 
        filters: [{
          text: 'Joe',
          value: 'Joe',
        }, {
          text: 'Jim',
          value: 'Jim',
        }, {
          text: 'Submenu',
          value: 'Submenu',
          children: [{
            text: 'Green',
            value: 'Green',
          }, {
            text: 'Black',
            value: 'Black',
          }],
        }],
      },
      { dataKey: 'city', title: '城市', width: 200 },
      { dataKey: 'firstName', title: 'FristName', width: 200 },
      { dataKey: 'lastName', title: 'LastName', width: 200 },
      { dataKey: 'email', title: 'Email', width: 200 },
    ];

    const fetchUrl = '/components/table/demo/data.json';

    const renderProps = {
      height: 400,
      className: 'kuma-uxtable-split-line',
      showColumnPicker: false,
      fetchUrl,
      jsxcolumns: columns,
    };
    return (<Table {...renderProps} />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-filter'));
````