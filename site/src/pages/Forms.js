var React = require('react');
var Router = require('react-router');
var UXForm= require("uxcore-form");

var Form = UXForm.Form;
var InputFormField = UXForm.InputFormField;
var TextAreaFormField = UXForm.TextAreaFormField;
var FormField = UXForm.FormField;
var Button = UXForm.Button;
var FormRow = UXForm.FormRow;
var RadioGroupFormField= UXForm.RadioGroupFormField;
var SelectFormField= UXForm.SelectFormField;

var Forms = React.createClass({
	displayName: 'VIEW_Forms',

	render () {
		return (
			<div className="demo-box">
				<div className="demo-type">简单表单</div>
				<div className="demo-container">
					<Form mode="EDIT" className="horizontal-form">
						<InputFormField   label="姓名"  keyMap="name"  rules={{required: true , message: "not empty"}}/>
						<InputFormField   label="岗位" keyMap="job" />
						<TextAreaFormField  label="简介" keyMap="introduce" ></TextAreaFormField>
						<RadioGroupFormField   label="水果" keyMap="fruit" jsxname="fruit" jsxvalue=""  tips="sss" rules={{required: true , message: "not empty"}}>
						<input type="radio" value="apple" />Apple
						<input type="radio" value="orange" />Orange
						<input type="radio" value="watermelon" />Watermelon
						</RadioGroupFormField>
						<InputFormField   label="啦啦" keyMap="lala" />
						<SelectFormField   label="城市" keyMap="city">
						<option >请选择</option>
						<option value="bj" selected>北京</option>
						<option value="nj">南京</option>
						<option value="dj">东京</option>
						<option value="xj">西京</option>
						</SelectFormField>
						<Button label="提交" />
					</Form>
		        </div>

		        <div className="demo-type">多列表单</div>
				<div className="demo-container">
					<Form mode="EDIT" className="horizontal-form">
		            <FormRow>
		                <InputFormField  className="one-half" label="姓名"  keyMap="name" tips="中文名称"  rules={{required: true , message: "not empty"}}/>
		                <InputFormField  className="one-half"  label="Email" keyMap="email" tips="Email格式"  rules={{required: true,type:"email",message:"should be email"}}/>
		            </FormRow>

		            <FormRow>
		            	<InputFormField  className="one-half"  label="岗位" keyMap="job" />
			            <InputFormField  className="one-half"  label="岗位" keyMap="job2" />
		                <InputFormField  className="one-half"  label="岗位" keyMap="job3" />
		                <InputFormField  className="one-half"  label="岗位" keyMap="job4" />
		            </FormRow>
		            <FormRow>
		                <TextAreaFormField  className="one-half" label="简介" keyMap="introduce" ></TextAreaFormField>
		            	<RadioGroupFormField  className="one-half" label="水果" keyMap="fruit" jsxname="fruit" jsxvalue=""  tips="sss" rules={{required: true , message: "not empty"}}>
		                    <input type="radio" value="apple" />Apple
		                    <input type="radio" value="orange" />Orange
		                    <input type="radio" value="watermelon" />Watermelon
		                </RadioGroupFormField>
		            </FormRow>
		            <FormRow>
		                <InputFormField  className="one-half"  label="啦啦" keyMap="lala" />
		                <SelectFormField className="one-half"  label="城市" keyMap="city">
		                    <option >请选择</option>
		                    <option value="bj" selected>北京</option>
		                    <option value="nj">南京</option>
		                    <option value="dj">东京</option>
		                    <option value="xj">西京</option>
		                </SelectFormField>
		            </FormRow>
		            <FormRow><Button label="提交" /></FormRow>
		        </Form>
		        </div>

		        <div className="demo-type">复杂表单</div>
				<div className="demo-container">
					<Form mode="EDIT" className="horizontal-form">
				        <FormRow>
				            <InputFormField   className="one-third"  label="姓名"  keyMap="name"  rules={{required: true , message: "not empty"}}/>
				            <InputFormField   className="one-third"  label="年龄" keyMap="job" />
				            <InputFormField   className="one-third"  label="性别" keyMap="job" />
				        </FormRow>
				        <TextAreaFormField  label="个人简介" keyMap="introduce" ></TextAreaFormField>
				        <Button label="提交" />
			        </Form>
		        </div>
			</div>
		)
	}
});

module.exports = Forms;
