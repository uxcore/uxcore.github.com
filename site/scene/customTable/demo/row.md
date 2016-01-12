# 自定义行的渲染方式

- order: 0

通过判断 rowData，可以给指定的行加上独特的 className

---

````jsx

let Table = require("uxcore-table");

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    

    render() {
        let tableProps = {
            width: 700,
            jsxdata: {
                data: [
                    {
                        "name": '小王',
                        "pinyin": 'xiaowang'
                    },
                    {
                        "name": '小李',
                        "pinyin": 'xiaoli'
                    }
                    
                ]
            },
            jsxcolumns: [
                {dataKey: 'name', title: '姓名', width: 300},
                {dataKey: 'pinyin', title: '拼音', width: 300}
            ],
            addRowClassName: (rowData) => {
                if (rowData.name == "小李") {
                    return "focus"
                }
            }
        }
        return (
            <div className="page-demo1">
                <Table {...tableProps}/>
            </div>
        )
    }

}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-customtable-demo-row'));

/* JS END CSS START*/
````
````css
.kuma-uxtable-row.focus {
    background-color: lightblue;
    color: white;
}
````