# 更强的封装

- order: 0

封装新增、删除和编辑的逻辑进入表格，实现简单的套餐式表格，只需配置即可生成。

---

````jsx
let FisGrid = require('uxcore-fis-grid');
let Button = require('uxcore-button');
let Form = require('uxcore-form');
/*
 * 讲解：从 Form 中取出 Form 的零件用以配置生成一个完整的 Form。
 * Form 的使用文档见：https://github.com/uxcore/uxcore-form
 */
let {FormRow, InputFormField, OtherFormField, Validators, ButtonGroupFormField, TableFormField} = Form;

/*
 * 讲解：object-assign 是一个非常实用的用于对象深拷贝和扩展的函数
 * 详细说明见 https://www.npmjs.com/package/object-assign
 */
let assign = require('object-assign');


/*
 * 讲解：下面是 react 的生成一个类的方式，同样是使用了 ES6 语法
 * 他改变了原有的 JS 蹩脚的声明和继承类的方法，提供一种更加面向对象的声明方式
 * 详细说明见：http://es6.ruanyifeng.com/#docs/class
 */
class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTxt: ''
        }
    }

    render() {
        let me = this;

        let formComp = <Form className="demoForm">
                        <FormRow>
                            <InputFormField jsxlabel="国家" jsxname="country" jsxrules={{validator: Validators.isNotEmpty, errMsg: "非空"}}/>
                            <InputFormField jsxname="id" jsxshow={false}/>
                        </FormRow>
                        <FormRow>
                            <InputFormField jsxlabel="城市" jsxname="city" jsxrules={{validator: Validators.isNotEmpty, errMsg: "非空"}}/> 
                            <InputFormField jsxlabel="email" jsxname="email" jsxrules={
                                [   
                                    {validator: Validators.isNotEmpty, errMsg: "非空"},
                                    {validator: Validators.isEmail, errMsg: "请输入正确的 email 地址"}
                                ]
                            }/> 
                        </FormRow>
                        <FormRow>
                            <InputFormField jsxlabel="FirstName" jsxname="firstName" jsxrules={{validator: Validators.isNotEmpty, errMsg: "非空"}}/> 
                            <InputFormField jsxlabel="LastName" jsxname="lastName" jsxrules={{validator: Validators.isNotEmpty, errMsg: "非空"}}/> 
                        </FormRow>
                       </Form>;

        let newColumns = [
            { dataKey: 'country', title:'国家', width: 200, type: "text"},
            { dataKey: 'city',title:'城市', width: 150, type: "text"},
            { dataKey: 'firstName',title:"FristName", type: "text" },  
            { dataKey: 'lastName' ,title:"LastName", type: "text"},
            { dataKey: 'email',title:"Email", width: 200, type: "text"},
            { dataKey: 'action1', title:'操作1', width:100, type:"action",actions:{
                '增加': function(rowData, actions) {
                    actions.addEmptyRow();
                },
                '删除': function(rowData, actions) {
                    actions.delRow(rowData);
                }
            }}
        ];


        let newProps={
            width: 900,
            height: 400,
            jsxcolumns:newColumns
        };

        let formComp2 = <Form className="demoForm2">
                            <TableFormField jsxname="dicts" jsxshowLabel={false} {...newProps}/>
                        </Form>;

        let columns = [
            { dataKey: 'id', title: 'ID', width: 50,hidden:true},
            { dataKey: 'country', title:'国家', width: 100, type: "money", delimiter: ','},
            { dataKey: 'city',title:'城市', width: 150,ordered:true },
            { dataKey: 'firstName',title:"FristName" },  
            { dataKey: 'lastName' ,title:"LastName"},
            { dataKey: 'email',title:"Email",width: 200},
        ];

        let subCols = [
          {dataKey: 'firstName', title: 'firstName', width: 200},
          {dataKey: 'city', title: '城市', width: 200}
        ]

        let renderSubProps={
            showHeader:true,
            showPager:false,
            jsxcolumns:subCols,
            fetchUrl:"http://demo.nwux.taobao.net/file/getGridJson.jsonp",
            queryKeys:["firstName", "city"],
            processData: (data) => {return data;}
        };

        let renderProps={
            height: 400,
            width: 900,
            fetchUrl: "http://demo.nwux.taobao.net/file/getGridJson.jsonp",
            // fetchUrl: "http://10.1.159.52:3002/demo/data.json",
            jsxcolumns: columns,
            subComp: (<FisGrid options={renderSubProps}/>),
        };

        let props1 = assign({}, renderProps, {
            editData: {
                comp: formComp,
                url: 'http://demo.nwux.taobao.net/file/writeGrid.jsonp'
            },
            addNewData: {
                comp: formComp2,
                url: 'http://demo.nwux.taobao.net/file/addNewData.jsonp',
                // url: 'http://localhost:8122/file/addNewData.jsonp'
            },
            deleteData: {
                url: 'http://demo.nwux.taobao.net/file/deleteData.jsonp',
                // url: 'http://localhost:8122/file/deleteData',
                // type: 'POST'
            },
            showSearch: true
        })

        return (
            <div className="pageHome">
                <FisGrid ref="grid1" options={props1} />
            </div>
        );
    }
}

ReactDOM.render(
  <Page />
, document.getElementById('scene-fisgrid-demo-basic'));

/* JS END CSS START*/
````


