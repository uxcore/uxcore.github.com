# 表单的扩展2 -- 一些表单装饰物的使用

- order: 0

在表单中，一些不需要表单交互的模块，我们称之为装饰物，例如按钮、观看用的表格等等，  
这个场景演示了如何在 Form 中自定义地定义装饰物的。

---

````jsx

let Form = require("uxcore-form");
let Button = require("uxcore-button");
let Table = require("uxcore-table");

let {
    InputFormField: Input, 
    FormRow,
    Validators, 
    OtherFormField: Other
} = Form;

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {}
        }
    }

    handleClick() {
        let me = this;
        alert(JSON.stringify(me.refs.form.getValues(true)));
    }

    render() {
        let me = this;
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
            ]
        };
        return (
            <div className="page-demo3">
                <Form jsxvalues={me.state.values} ref="form">
                    <FormRow>
                        <Input jsxlabel="A" jsxname="a" jsxrules={{validator: Validators.isNum, errMsg: "必须为数字"}}/>
                        <Other>
                            <span className="yuan">元</span>
                        </Other>
                    </FormRow>
                    <Other className="other">
                        <Table {...tableProps}/>
                        <Button onClick={me.handleClick.bind(me)} className="confirmButton">确定</Button>
                    </Other>
                </Form>
            </div>
        )
    }

}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-commonform-demo-decoration'));

/* JS END CSS START*/
````
````css
.page-demo3 .other {
    padding-left: 100px
}

.page-demo3 .confirmButton {
    margin-top: 10px;
}

.page-demo3 .yuan {
    line-height: 34px;
}
````