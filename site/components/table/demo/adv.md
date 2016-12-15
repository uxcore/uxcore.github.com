# 高级表格  (Actionbar+Column Picker+CheckColumn)

- order: 2

---

````jsx

let Table = require('uxcore-table');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           data:this.props.data
        }
    }

      render () {
        
        let me=this;
        // 通过 rowSelection 对象表明需要行选择
        let rowSelection = {
          onSelect: function(record, selected, selectedRows) {
            console.log(record, selected, selectedRows);
          },
          onSelectAll: function(selected, selectedRows) {
            console.log(selected, selectedRows);
          }
        };

        // title, width, type, hidden,dataKey
        let columns = [
            { dataKey: 'id', title: 'ID', width: 50,hidden:true},
            { dataKey: 'country', title:'国家', width: 200,ordered:true},
            { dataKey: 'city',title:'城市', width: 150,ordered:true },
            { dataKey: 'firstName',title:"FristName" },  
            { dataKey: 'lastName' ,title:"LastName"},
            { dataKey: 'email',title:"Email",width: 200,ordered:true },
            { dataKey: 'action1', title:'操作1', width:100, type:"action",actions:{
                "clickme": function(rowData, actions) {
                    alert('thanks clickme,'+rowData.firstName)
                },
                "del": function(rowData) {
                    me.refs.grid.delRow(rowData);
                }
              }
            },
            { dataKey: 'action', title:'链接', width:100,render: function(rowData){
               return <div><a href="#">111</a></div>
              }
            }
        ]

        let fetchUrl = '/components/table/demo/data.json';

        let renderProps={
            height: 400,
            actionBar: {
               '操作条': function(type, table) { 
                   alert(type);
                },
            },
            showSearch:true,
            fetchParams: {},
            fetchUrl: fetchUrl,
            jsxcolumns:columns,
            rowSelection: rowSelection
        };
        return (<Table {...renderProps}  ref="grid"/>);
      }
};

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-adv'))
````