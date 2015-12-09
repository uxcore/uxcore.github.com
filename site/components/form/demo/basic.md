# 基本使用

- order: 0

无需任何绑定，只要插入几个标签，就可以完成一个表格的搭建。

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
    ButtonGroupFormField
} = Form;


class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit() {
        console.log(this.refs.form.getValues());
    }

    render() {
        let me = this;
        return (
            <div className="demo-basic">
                <style>
                    {".required {font-family:Simsun} .demo-basic-form {width: 532px}"}
                </style>
                <Form ref="form" className="demo-basic-form">
                    <Input jsxname="theme" jsxlabel="主题"  jsxplaceholder="请输入主题"/>
                    <Input jsxname="location" jsxlabel="地点"  jsxplaceholder="请输入地点"/>
                    <Date jsxname="date" jsxlabel="时间" jsxtype="cascade"/>
                    <TextArea jsxname="content" jsxlabel="内容" />
                    <ButtonGroupFormField>
                        <Button size="large" onClick={me.handleSubmit.bind(me)}>确定</Button>
                    </ButtonGroupFormField>
                </Form>
            </div>
        )
        
    }
};

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-basic'))
````
