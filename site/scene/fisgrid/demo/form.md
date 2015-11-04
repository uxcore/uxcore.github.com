# 表单查询，表格展示

- order: 1

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
 * 讲解：object-assign 是一个非常实用的用于对象扩展的函数
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

    handleFormClick(data) {
        let me = this;
        if (data.pass) {
            me.setState({
                searchTxt: data.values.search
            }, function() {
                me.refs.grid2.fetchData();
            })
        }
    }


    render() {
        let me = this;
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


        let props2 = assign({}, renderProps, {
            fetchParams: {
                searchTxt: me.state.searchTxt
            }
        });
        

        return (
            <div className="pageHome">
                <Form>
                    <FormRow>
                        <InputFormField jsxlabel="查询" jsxname="search" />
                        <ButtonGroupFormField>
                            <Button action="submit" size="medium" onClick={me.handleFormClick.bind(me)}>查询</Button>
                        </ButtonGroupFormField> 
                    </FormRow>
                </Form>
                <FisGrid ref="grid2" options={props2}/>
            </div>
        );
    }
}

ReactDOM.render(
  <Page />
, document.getElementById('scene-fisgrid-demo-form'));

/* JS END CSS START*/
````


