# 单列表单

- order: 0

---

````jsx
let {Button, ButtonGroup} = require('uxcore-button');

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
    OtherFormField
} = Form;

let CheckboxItem = CheckboxGroupFormField.Item;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick() {
        let me = this;
        console.log(me.refs.form.getValues());
    }

    handleChange(value) {
        console.log(value);
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
            cascade: ["a", "ab"]
        }

        let casData = {
            length: 3,
            contents: [
                {
                    value: "a",
                    text: "a",
                    contents: [
                        {
                            value: "ab",
                            text: "ab",
                            contents: [
                                {
                                    value: "abc",
                                    text: "abc"
                                },
                                {
                                    value: "abd",
                                    text: "abd"
                                }
                            ]
                        },
                        {
                            value: "ac",
                            text: "ac",
                            contents: [
                                {
                                    value: "acb",
                                    text: "acb"
                                },
                                {
                                    value: "acd",
                                    text: "acd"
                                }
                            ]
                        }
                    ]
                },
                {
                    value: "b",
                    text: "b",
                    contents: [
                        {
                            value: "ba",
                            text: "ba",
                            contents: [
                                {
                                    value: "bab",
                                    text: "bab"
                                },
                                {
                                    value: "bad",
                                    text: "bad"
                                }
                            ]
                        },
                        {
                            value: "bc",
                            text: "bc",
                            contents: [
                                {
                                    value: "bca",
                                    text: "bca"
                                },
                                {
                                    value: "bcd",
                                    text: "bcd"
                                }
                            ]
                        }
                    ]
                }
            ]
        }


        return (
            <div>
                <Form ref="form" jsxmode={Constants.MODE.EDIT} jsxvalues={data} jsxonChange={me.handleChange.bind(me)}>
                    <FormRowTitle jsxtitle="我是行标题"/>
                    <FormRow>
                        <InputFormField  
                         jsxname="test1"
                         jsxlabel="测试输入框"
                         jsxplaceholder="请输入"
                         jsxtips="请输入数字"
                         jsxrules={{validator: Validators.isNotEmpty, errMsg: "不能为空"}}/>
                        <RadioGroupFormField jsxname="fruit" jsxlabel="Fruit Type" jsxflex={1}>
                                <input type="radio" value="apple" />Apple
                                <input type="radio" value="orange" />Orange
                                <input type="radio" value="watermelon" />Watermelon
                        </RadioGroupFormField>

                    </FormRow>
                    <FormRow>
                        <SelectFormField
                         jsxlabel="City"
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
                          jsxlabel="数字输入"
                          jsxtype="money"
                          jsxplaceholder="输入数字"
                          jsxtips="数字和一般的输入框不同"
                          jsxrules={[
                            {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                            {validator: Validators.isNum, errMsg: "请输入数字"}
                         ]}/>
                    </FormRow>
                    <FormRowTitle jsxtitle="我是行标题2"/>
                    <FormRow>
                        <TextAreaFormField jsxname="textArea" jsxlabel="多行文本框"/>
                        <CheckboxGroupFormField jsxname="checkbox" jsxlabel="多选">
                          <CheckboxItem value="air" text="天空"/>
                          <CheckboxItem value="sea" text="大海"/>
                        </CheckboxGroupFormField>
                    </FormRow>
                    <FormRow>
                        <DateFormField jsxname="date" jsxlabel="日期"/>
                        <UploadFormField
                          jsxname="upload"
                          jsxlabel="上传"
                          jsxaction="http://demo.nwux.taobao.net/file/upload"/>
                    </FormRow>
                    <CascadeSelectFormField
                     jsxdata={casData}
                     jsxname="cascade"
                     jsxlabel="级联"
                     jsxstyle={{
                        width: 200
                     }}/>

                    <OtherFormField className="button-group">
                        <ButtonGroup>
                            <Button size="medium" onClick={me.handleClick.bind(me)}>提交</Button>
                            <Button size="medium">重置</Button>
                        </ButtonGroup>
                    </OtherFormField>
                </Form>
            </div>
        );
    }
};

React.render(<Demo />, document.getElementById('components-form-demo-single'))
````
