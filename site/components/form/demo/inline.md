# inline表单

- order: 0

---

````jsx
var RCForm = require('uxcore-form');
var Form = RCForm.Form;
var InputFormField = RCForm.InputFormField;
var TextAreaFormField = RCForm.TextAreaFormField;
var FormField = RCForm.FormField;
var Button = RCForm.Button;
var FormRow = RCForm.FormRow;
var RadioGroupFormField= RCForm.RadioGroupFormField;
var SelectFormField= RCForm.SelectFormField;
var FormRowTitle= RCForm.FormRowTitle;

var _doClick= function() {
     //Form.doSave();
};

React.render(<div>
    <div className="site-type">inline表单</div>
    <div className="site-container">
    <Form jsxmode="EDIT" className="horizontal-form">
        <FormRow>
            <InputFormField   className="one-half"  jsxtext="用户名"  jsxname="name"  jsxrule={{required: true , message: "not empty"}}/>
            <InputFormField   className="one-half"  jsxtext="密码" jsxname="job" />
        </FormRow>
    </Form>
    </div>
</div>, document.getElementById('components-form-demo-inline'))
````
