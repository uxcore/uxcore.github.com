# 多列表单

- order: 2

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
var options=[
    {jsxtext:"上海",value:"SH",selected:true},
    {jsxtext:"北京",value:"BJ"}
];

var FormLayout = React.createClass({
  doClick: function(){
     this.refs.myform.doSave();
  },
  render: function() {
    return <div>
                <Form jsxmode="EDIT" ref="myform">
                    <FormRowTitle title="Basic Information">sss</FormRowTitle>
                    <FormRow>
                        <InputFormField  jsxdisabled className="one-half"  jsxtext="Name"  jsxname="name" jsxtips="中文名称" jsxvalue="sss" jsxrule={{required: true , message: "not empty"}}/>
                        <InputFormField  className="one-half"  jsxtext="Email" jsxname="email" jsxtips="Email格式"  jsxrule={{required: true,type:"email",message:"should be email"}}/>
                    </FormRow>

                    <FormRow>
                        <TextAreaFormField  className="one-half" jsxtext="Introduce" jsxname="introduce" ></TextAreaFormField>
                        <RadioGroupFormField  className="one-half" jsxtext="Fruit Type" jsxname="fruit"  jsxvalue=""   jsxrule={{required: true , message: "not empty"}}>
                            <input type="radio" value="apple" />Apple
                            <input type="radio" value="orange" />Orange
                            <input type="radio" value="watermelon" />Watermelon
                        </RadioGroupFormField>
                    </FormRow>

                    <FormRow>
                        <InputFormField  className="one-half"  jsxtext="LALA" jsxname="lala" />
                        <SelectFormField className="one-half"  jsxtext="City" jsxname="city">
                            <option >请选择</option>
                            <option value="bj" selected>北京</option>
                            <option value="nj">南京</option>
                            <option value="dj">东京</option>
                            <option value="xj">西京</option>
                        </SelectFormField>
                    </FormRow>

                    <FormRow><Button jsxtext="提交" onClick={this.doClick} /></FormRow>
                </Form>
        </div>
  }
});

React.render(<FormLayout/>, document.getElementById('components-form-demo-multiple-column'))
````
