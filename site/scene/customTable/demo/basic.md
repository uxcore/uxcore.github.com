# 自定义列的渲染方式

- order: 0

原本数据为 小李、小王，在展示前，通过 column 的 render 函数来自定义列的渲染。

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
                {dataKey: 'name', title: '姓名', width: 300, render: (cellData, rowData) => {
                    return <span>{cellData + '同学'}</span>
                }},
                {dataKey: 'pinyin', title: '拼音', width: 300, render: (cellData, rowData) => {
                    return <span>{cellData + 'tongxue'}</span>
                }}
            ]
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
, document.getElementById('scene-customtable-demo-basic'));

/* JS END CSS START*/
````
````css

````