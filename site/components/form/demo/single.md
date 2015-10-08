# 单列表单

- order: 0

---

````jsx
let Button = require('uxcore-button');
let Form = require('uxcore-form');
let {
    Constants,
    FormRowTitle,
    FormRow,
    FormField,
    InputFormField,
    Validators,
    RadioGroupFormField,
    SelectFormField,
    TextAreaFormField,
    NumberInputFormField,
    DateFormField,
    CheckboxGroupFormField,
    CascadeSelectFormField,
    UploadFormField,
    OtherFormField,
    ButtonGroupFormField,
    EditorFormField,
    GridFormField
} = Form;

let CheckboxItem = CheckboxGroupFormField.Item;
let RadioItem = RadioGroupFormField.Item;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jsxvalues: {
                test1: "我是测试",
                fruit: "apple",
                city: "nj",
                textArea: "我是多行文本",
                date: "2015-09-01",
                checkbox: ["sea"],
                dicts:{
                   datas:[
                      {
                        city: "hz",
                        email: "333",
                        name: "33"
                      }, {
                        city: "bj",
                        email: "33322",
                        name: "3322"
                      }
                   ]
                },
                cascade: ["a", "ab"],
                editor: "a"
            }
        }
    }

    handleClick() {
        let me = this;
        console.log(me.refs.form.getValues());
    }

    handleFormClick(data) {
        this.refs.form.setState({
           mode:'VIEW'
        })
    }

    handleChange(value) {
        console.log(value);
    }

    handleValueChange() {
        let me = this;
        me.setState({
            jsxvalues: {
                test1: "我是测试22",
                fruit: "apple",
                city: "nj",
                textArea: "我是多行文本",
                date: "2015-09-01",
                checkbox: ["sea"],
                // cascade: ["a", "ab"]
            }
        })
    }

    render() {
        let me = this;
        let data = {
            test1: "我是测试",
            fruit: "apple",
            city: "nj",
            textArea: "我是多行文本",
            date: "2015-09-01",
            checkbox: ["sea"],
            // cascade: ["a", "ab"]
        }

        let casData = {
            length: 3,
            contents: [
                {
                    value: "a",
                    text: "A",
                    contents: [
                        {
                            value: "ab",
                            text: "AB",
                            contents: [
                                {
                                    value: "abc",
                                    text: "ABC"
                                },
                                {
                                    value: "abd",
                                    text: "ABD"
                                }
                            ]
                        },
                        {
                            value: "ac",
                            text: "AC",
                            contents: [
                                {
                                    value: "acb",
                                    text: "ACB"
                                },
                                {
                                    value: "acd",
                                    text: "ACD"
                                }
                            ]
                        }
                    ]
                },
                {
                    value: "b",
                    text: "B",
                    contents: [
                        {
                            value: "ba",
                            text: "BA",
                            contents: [
                                {
                                    value: "bab",
                                    text: "BAB"
                                },
                                {
                                    value: "bad",
                                    text: "BAD"
                                }
                            ]
                        },
                        {
                            value: "bc",
                            text: "BC",
                            contents: [
                                {
                                    value: "bca",
                                    text: "BCA"
                                },
                                {
                                    value: "bcd",
                                    text: "BCD"
                                }
                            ]
                        }
                    ]
                }
            ]
        }


        let columns = [
            { dataKey: 'jsxid',title:"jsxid",width: 40 },
            { dataKey: 'city',title:'城市', width: 180,type:'select' ,options:{
               'hz':'杭州',
               'bj':'北京',
               'sh':'上海',
               'ah':'安徽'
            }},
            { dataKey: 'name',title:"姓名",width: 200,type:"text"},
            { dataKey: 'email',title:"Email",width: 200,type:"text"},
            { dataKey: 'action1', title:'操作1', width:100, type:"action",items:[
              {title:'增加', type:"addRow", cb: function(rowData){console.info(rowData)}},
              {title:'删除', type:"delRow", cb: function(rowData){console.info(rowData)}}
            ]}
        ];


        let renderProps={
            jsxcolumns:columns
        };


        return (
            <div>
                <Form ref="form" jsxmode={Constants.MODE.EDIT} jsxvalues={me.state.jsxvalues} jsxonChange={me.handleChange.bind(me)}>
                    <FormRowTitle jsxtitle="我是行标题"/>
                    <FormRow>
                        <InputFormField
                         jsxname="test1"
                         jsxlabel="普通输入框"
                         jsxmode={Constants.MODE.VIEW}
                         jsxtips="请输入数字"
                         jsxrules={{validator: Validators.isNotEmpty, errMsg: "不能为空"}}/>
                        <RadioGroupFormField jsxname="fruit" jsxlabel="Radio" jsxflex={1}>
                                <RadioItem value="apple" text="Apple"/>
                                <RadioItem value="orange" text="Orange"/>
                                <RadioItem value="watermelon" text="Watermelon"/>
                        </RadioGroupFormField>
                        <ButtonGroupFormField jsxshow={false}>
                            <Button size="medium" type="submit" onClick={me.handleFormClick.bind(me)}>提交</Button>
                            <Button size="medium" type="reset">取消</Button>
                        </ButtonGroupFormField>
                    </FormRow>
                    <FormRow>
                        <SelectFormField
                         jsxlabel="单选"
                         jsxname="city"
                         jsxfetchUrl="http://suggest.taobao.com/sug"
                         afterFetch={(obj) => {
                            let data = {};
                            obj.result.forEach((item, index) => {
                                data[item[1]] = item[0];
                            });
                            console.log(data);
                            return data;
                         }}
                         jsxdata={{
                            "bj": "北京",
                            "nj": "南京",
                            "dj": "东京",
                            "xj": "西京"
                         }}
                         jsxstyle={{
                            width: 200
                         }}/>
                         <NumberInputFormField
                          jsxname="number"
                          jsxlabel="数字输入框"
                          jsxtype="money"
                          jsxplaceholder="输入数字"
                          jsxtips="数字和一般的输入框不同"
                          jsxrules={[
                            {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                            {validator: Validators.isNum, errMsg: "请输入数字"}
                         ]}/>
                    </FormRow>
                    <FormRow>
                        <SelectFormField
                         jsxlabel="单选 combo 模式"
                         jsxname="goods"
                         jsxfetchUrl="http://suggest.taobao.com/sug"
                         jsxcombobox={true}
                         afterFetch={(obj) => {
                            let data = {};
                            obj.result.forEach((item, index) => {
                                data[item[1]] = item[0];
                            });
                            return data;
                         }}
                         jsxstyle={{width: 200}}/>

                    </FormRow>
                    <FormRowTitle jsxtitle="我是行标题2"/>
                    <FormRow>
                        <TextAreaFormField jsxname="textArea" jsxlabel="多行文本框"/>
                        <CheckboxGroupFormField jsxname="checkbox" jsxlabel="复选框">
                          <CheckboxItem value="air" text="天空"/>
                          <CheckboxItem value="sea" text="大海"/>
                        </CheckboxGroupFormField>
                    </FormRow>
                    <FormRowTitle jsxtitle="级联类"/>
                    <DateFormField jsxtype="cascade" jsxname="casDate" jsxlabel="级联日期" jsxfrom="2015-10-2" jsxto="2015-10-10"/>
                    <CascadeSelectFormField
                     jsxdata={casData}
                     jsxname="cascade"
                     jsxlabel="级联选择"
                     jsxstyle={{
                        width: 200
                     }}/>
                    <EditorFormField jsxname="editor"
                                     jsxlabel="富文本编辑器"
                                     jsxcontent="1"/>
                    <GridFormField jsxname="dicts" jsxlabel="薪酬字典" {...renderProps}>
                    </GridFormField>
                    <ButtonGroupFormField>
                        <Button size="medium" type="submit" onClick={me.handleFormClick.bind(me)}>提交</Button>
                        <Button size="medium" type="reset">取消</Button>
                        <Button size="medium" onClick={me.handleValueChange.bind(me)}>修改 props</Button>
                    </ButtonGroupFormField>
                </Form>
            </div>
        );
    }
};

React.render(<Demo />, document.getElementById('components-form-demo-single'))
````
