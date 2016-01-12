# 表单联动

- order: 0


---

````jsx

let Form = require("uxcore-form");
let Button = require("uxcore-button");

let {
    InputFormField: Input, 
    SelectFormField: Select, 
    CheckboxGroupFormField: Check, 
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

    handleFieldChange(value, name, pass) {
        let names = ['a', 'b'];
        if (pass && names.indexOf(name) !== -1) {
            let me = this;
            let data = me.refs.form.getValues();
            let values = data.values;
            me.refs.form.setValues({
                total: parseFloat(values.a || 0) + parseFloat(values.b || 0)
            })
        }
    }

    handleClick() {
        let me = this;
        alert(JSON.stringify(me.refs.form.getValues(true)));
    }

    render() {
        let me = this;
        
        return (
            <div className="page-demo1">
                <Form jsxonChange={me.handleFieldChange.bind(me)} jsxvalues={me.state.values} ref="form" instantValidate={false}>
                    <Input jsxlabel="A" jsxname="a" jsxrules={{validator: Validators.isNum, errMsg: "必须为数字"}}/>
                    <Input jsxlabel="B" jsxname="b" jsxrules={{validator: Validators.isNum, errMsg: "必须为数字"}}/>
                    <Input jsxlabel="A+B" jsxname="total" />
                    <Other className="other">
                        <Button onClick={me.handleClick.bind(me)}>确定</Button>
                    </Other>
                </Form>
            </div>
        )
    }

}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-commonform-demo-basic'));

/* JS END CSS START*/
````
````css
.other {
    padding-left: 100px
}
````