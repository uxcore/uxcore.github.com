# 线条风格的表格

- order: 2

通过 className="kuma-uxtable-border-line"，可以切换另一种表格样式风格。

---

````jsx

const Table = require('uxcore-table');

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const tableProps = {
      width: 700,
      jsxdata: {
        data: [
          {
            name: '小王',
            pinyin: 'xiaowang',
          },
          {
            name: '小李',
            pinyin: 'xiaoli',
          },

        ],
      },
      jsxcolumns: [
                { dataKey: 'name', title: '姓名', width: 300 },
                { dataKey: 'pinyin', title: '拼音', width: 300 },
      ],
      className: 'kuma-uxtable-border-line',
    };
    return (
      <div className="page-demo1">
        <Table {...tableProps} />
      </div>
    );
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-customtable-demo-line'));

/* JS END CSS START*/
````
````css
.kuma-uxtable-row.focus {
    background-color: lightblue;
    color: yellowgreen;
}
````