# 自定义表单域

- order: 3

---

````jsx



var TableTest = React.createClass({
    doValiate: function(data){
        return false;
    },
    getValue: function() {
        return this.refs.el.getDOMNode().value
    },

    handleChange: function(e) {
        var value = e.target ? e.target.value : e;
        this.props.context.handleDataChange(this, value);
    },
    render: function() {

        if (this.props.jsxmode=='EDIT') {
            return <table>
            <tr>
                <td><input type="text" ref="el" value={this.props.jsxvalue} onChange={this.handleChange.bind(this)}/></td>
                <td>002</td>
                <td>003</td>
            </tr>
            <tr>
                <td>0011</td>
                <td>0021</td>
                <td>0031</td>
            </tr>
            <tr>
                <td>0012</td>
                <td>0022</td>
                <td>0032</td>
            </tr>
            </table>
        }else {
            return <table>
            <tr>
                <td>{this.props.jsxvalue}</td>
                <td>002</td>
                <td>003</td>
            </tr>
            <tr>
                <td>0011</td>
                <td>0021</td>
                <td>0031</td>
            </tr>
            <tr>
                <td>0012</td>
                <td>0022</td>
                <td>0032</td>
            </tr>
        </table>
        }
    }
});

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
                        <FormField jsxtext="Grid" jsxname="table" jsxtips="please note the grid cell input type" jsxrule={{required: true,message:"not empty"}} jsxvalue="table test">
                            <TableTest/>
                        </FormField>
                    </FormRow>

                    <FormRow><Button jsxtext="提交" onClick={this.doClick} /></FormRow>
                </Form>
        </div>
  }
});

React.render(<FormLayout/>, document.getElementById('components-form-demo-custom-field'))
````
