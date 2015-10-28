# 左列固定 table

- order: 5

---

````jsx

let Table = require('uxcore-table');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        
    }

      render () {
        console.log("demo render");

        let columns = [
            //{ dataKey: 'check', title: '复选框', type: 'checkbox'},
            //{ dataKey: 'id', title: 'ID', width: 50,hidden:true,fixed:true},
            { dataKey: 'country', title:'国家国家国家国家', width: 200,ordered:true, type: "money", delimiter: ',',fixed:true},
            { dataKey: 'city',title:'城市', width: 150},
            { dataKey: 'firstName',title:"FristName",fixed:true,beforeRender:function(rowData) {
                return "abc";
            } },  
            { dataKey: 'lastName' ,title:"LastName"},
            { dataKey: 'email',title:"Email",width: 200,ordered:true },
            { dataKey: 'action1', title:'操作1', width:100, type:"action",actions:{
                "编辑": function(rowData, actions) {
                    console.log(actions.addEmptyRow);
                    me.refs.grid.toggleSubComp(rowData);
                },
                "删除": function(rowData) {
                    me.refs.grid.delRow(rowData);
                }
              },
              beforeRender: function(rowData,actionItems) {
                 if(rowData.jsxid%2==0) {
                    return ['编辑'];
                 }else {
                    return ['编辑','删除'];
                 }
                 
              }
            },
            { dataKey: 'action', title:'链接', width:150,render: function(cellData,rowData){
               return <div><a href="#">{rowData.email}</a></div>
              },beforeRender(rowData) {
                return rowData.email;
              }
            }
        ];

        let renderProps={
            width: 800, //在左列固定模式下，width是必须要給的
            height:300,
            showSearch: true,
            fetchParams: {},
            fetchUrl: './demo/data.json',
            jsxcolumns:columns,
            beforeFetch: (sendData, from) => { return sendData;},
            processData: (data) => {return data;}           
        };
        return (<Table {...renderProps}  ref="grid"/>);
      }
};

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-fixed'))
````