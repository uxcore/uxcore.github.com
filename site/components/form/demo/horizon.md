# 横向排列

- order: 2

无需任何设置，自动实现横排，并可以根据系数进行弹性布局。

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
    Validators
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
            <div className="demo-horizon">
                <style>
                </style>
                <Form ref="form" className="demo-horizon-form">
                    <Row>
                        <Input jsxname="theme" jsxlabel="主题" required={true} jsxplaceholder="请输入主题" jsxrules={[
                            {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                            {validator: function(value) {return value.length < 3}, errMsg: "不能超过3个字"}
                        ]}/>
                        <Input jsxname="location" jsxlabel="地点" required={true} jsxplaceholder="请输入地点" jsxrules={[
                            {validator: Validators.isNotEmpty, errMsg: "不能为空"}
                        ]}/>
                    </Row>
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

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-horizon'))
````
