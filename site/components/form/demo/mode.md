# 编辑查看模式

- order: 3

Form 支持编辑和查看两种模式，并且支持随时切换，从此两个页面变成一个页面。

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
            mode: Constants.MODE.EDIT
        };
    }

    handleSubmit() {
        console.log(this.refs.form.getValues());
    }

    handleChangeMode() {
        this.setState({
            mode: this.state.mode == Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT
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
                <Form ref="form" className="demo-basic-form" jsxvalues={{
                    theme: "Form 展示",
                    location: "Uxcore 站点",
                    date: ['2015-10-15', '2015-11-15'],
                    content: "这是一个 Form 的模式转换页面。"
                }} jsxmode={me.state.mode}>
                    <Input jsxname="theme" jsxlabel="主题" required={true} jsxplaceholder="请输入主题"/>
                    <Input jsxname="location" jsxlabel="地点" required={true} jsxplaceholder="请输入地点" jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"}
                    ]}/>
                    <Date jsxname="date" jsxlabel="时间" jsxtype="cascade"/>
                    <TextArea jsxname="content" jsxlabel="内容" required={true} jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"}
                    ]}/>
                    <ButtonGroupFormField>
                        <Button onClick={me.handleSubmit.bind(me)}>确定</Button>
                        <Button type="secondary" onClick={me.handleChangeMode.bind(me)}>转换模式</Button>
                    </ButtonGroupFormField>
                </Form>
            </div>
        )
        
    }
};

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-mode'))
````
