# 列固定

- order: 5

支持左侧或右侧列固定

---


````jsx


const Table = require('uxcore-table');

class Demo extends React.Component {
      render () {
        const columns = [
            { dataKey: 'country', title:'国家', width: 200, ordered: true, type: "money", delimiter: ',' },
            { dataKey: 'city',title:'城市', width: 150},
            { dataKey: 'firstName', title: 'FristName', width: 200 },  
            { dataKey: 'firstName', title: 'FristName', width: 200 },  
            { dataKey: 'firstName', title: 'FristName', width: 200 },  
            { dataKey: 'lastName' , title: 'LastName'},
            { dataKey: 'email', title: 'Email', width: 200, ordered: true },
            { 
                dataKey: 'action1', 
                title:'操作1', 
                width:100, 
                type:"action",
                rightFixed: true,
                actions:{
                    "编辑": function(rowData, actions) {
                        console.log(actions.addEmptyRow);
                        me.refs.grid.toggleSubComp(rowData);
                    },
                    "删除": function(rowData) {
                        me.refs.grid.delRow(rowData);
                    },
                },
            },
        ];

        const renderProps= {
            height: 300,
            fetchUrl: '/components/table/demo/data.json',
            jsxcolumns: columns,
            className: 'kuma-uxtable-split-line',
            beforeFetch: (sendData, from) => { return sendData;},
            processData: (data) => {return data;}           
        };
        return (<Table {...renderProps}  ref="grid"/>);
      }
};

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-fixed'))
````