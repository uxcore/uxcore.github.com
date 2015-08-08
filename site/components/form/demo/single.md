# 单列表单

- order: 1

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
  <div className="site-type">单列表单</div>
  <div className="site-container">
    <Form jsxmode="EDIT" className="horizontal-form">
      <FormRow>
          <InputFormField   jsxtext="姓名"  jsxname="name"  jsxrule={{required: true , message: "not empty"}}/>
      </FormRow>
      <FormRow>
          <InputFormField   jsxtext="岗位" jsxname="job" />
      </FormRow>
      <FormRow>
          <TextAreaFormField  jsxtext="简介" jsxname="introduce" ></TextAreaFormField>
      </FormRow>
      <FormRow>
          <RadioGroupFormField   jsxtext="水果" jsxname="fruit" jsxvalue=""  jsxtips="sss" jsxrule={{required: true , message: "not empty"}}>
                  <input type="radio" value="apple" />Apple
                  <input type="radio" value="orange" />Orange
                  <input type="radio" value="watermelon" />Watermelon
          </RadioGroupFormField>
      </FormRow>
      <FormRow>
          <InputFormField   jsxtext="啦啦" jsxname="lala" />
      </FormRow>
      <FormRow>
          <SelectFormField   jsxtext="城市" jsxname="city">
                  <option >请选择</option>
                  <option value="bj" selected>北京</option>
                  <option value="nj">南京</option>
                  <option value="dj">东京</option>
                  <option value="xj">西京</option>
          </SelectFormField>
      </FormRow>
      <FormRow>
          <Button jsxtext="提交" onClick={_doClick} />
      </FormRow>
    </Form>
  </div>
</div>, document.getElementById('components-form-demo-single'))
````
