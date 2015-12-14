# 验证

- order: 1

自带验证函数，并且支持自己手写，并分为实时验证与非实时验证。

---



````jsx
let Button = require('uxcore-button');
let Form = require('uxcore-form');
let {
    Constants,
    FormRowTitle,
    FormRow: Row,
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    ButtonGroupFormField,
    SelectFormField,
    Validators
} = Form;


class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: true
        };
    }

    handleSubmit() {
        console.log(this.refs.form.getValues());
    }

    handleModeChange(values, name) {
        console.log(values[name]);
        this.setState({
            mode: values[name] == "true" ? true : false
        })
    }

    render() {
        let me = this;
        console.log(me.state.mode);
        return (
            <div className="demo-basic">
                <style>
                    {".required {font-family:Simsun} .demo-basic-form {width: 532px} .form-select {background: #ccc; border-radius: 5px; padding-top: 15px; width: 530px; margin-bottom: 40px;}"}
                </style>
                <Form className="form-select" jsxvalues={{mode: "true"}} jsxonChange={me.handleModeChange.bind(me)}>
                    <SelectFormField jsxdata={{"true": "实时校验", "false": "非实时校验"}} jsxname="mode" jsxlabel="校验模式" showSearch={false}/>
                </Form>
                <Form ref="form" className="demo-basic-form" instantValidate={me.state.mode}>
                    <Input jsxname="theme" jsxlabel="主题" required={true} jsxplaceholder="请输入主题" jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                        {validator: function(value) {return value.length <= 3}, errMsg: "不能超过3个字"}
                    ]}/>
                    <Input jsxname="location" jsxlabel="地点" required={true} jsxplaceholder="请输入地点" jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"}
                    ]}/>
                    <Date jsxname="date" jsxlabel="时间" jsxtype="cascade"/>
                    <TextArea jsxname="content" jsxlabel="内容" required={true} jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"}
                    ]}/>
                    <ButtonGroupFormField>
                        <Button size="large" onClick={me.handleSubmit.bind(me)}>确定</Button>
                    </ButtonGroupFormField>
                </Form>
            </div>
        )
        
    }
};

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-validator'))
````
