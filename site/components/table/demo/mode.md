# Edit table

- order: 4

---

````jsx

let Table = require('uxcore-table');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render () {

        let me=this;

        let columns = [
            { dataKey: 'jsxid',title:"jsxid",width: 60 },  
            { dataKey: 'city',title:'城市', width: 180,type:'select' ,options:{
               'hz':'杭州',
               'bj':'北京',
               'sh':'上海',
               'ah':'安徽'
            }},
            { dataKey: 'name',title:"姓名",width: 200,type:"text"},  
            { dataKey: 'email',title:"Email",width: 200,type:"text"},
            { dataKey: 'action1', title:'操作1', width:100, type:"action",actions:{
                "增加": function(rowData) {
                    me.refs.mytable.addEmptyRow();
                },
                "删除": function(rowData) {
                    me.refs.mytable.delRow(rowData);
                }
              }
            }
        ];

        let renderProps={
            height: 200,
            width: 800,
            showPager:false,
            fetchParams: {},
            jsxcolumns:columns,
            beforeFetch: (sendData) => {sendData.id = 1; return sendData;},
            processData: (data) => {return data;}           
        };

        return (<Table {...renderProps}  ref="mytable"/>);
      }
};

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-mode'))
````