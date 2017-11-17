# 表单联动

- order: 0


---

````jsx

const Form = require('uxcore-form');
const Button = require('uxcore-button');

const {
    InputFormField: Input,
    SelectFormField: Select,
    CheckboxGroupFormField: Check,
    Validators,
    OtherFormField: Other,
} = Form;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };
  }

  handleFieldChange(value, name, pass) {
    const names = ['a', 'b'];
    if (pass && names.indexOf(name) !== -1) {
      const me = this;
      const data = me.refs.form.getValues();
      const values = data.values;
      me.refs.form.setValues({
        total: parseFloat(values.a || 0) + parseFloat(values.b || 0),
      });
    }
  }

  handleClick() {
    const me = this;
    alert(JSON.stringify(me.refs.form.getValues(true)));
  }

  render() {
    const me = this;

    return (
      <div className="page-demo1">
        <Form jsxonChange={me.handleFieldChange.bind(me)} jsxvalues={me.state.values} ref="form" instantValidate={false}>
          <Input jsxlabel="A" jsxname="a" jsxrules={{ validator: Validators.isNum, errMsg: '必须为数字' }} />
          <Input jsxlabel="B" jsxname="b" jsxrules={{ validator: Validators.isNum, errMsg: '必须为数字' }} />
          <Input jsxlabel="A+B" jsxname="total" />
          <Other className="other">
            <Button onClick={me.handleClick.bind(me)}>确定</Button>
          </Other>
        </Form>
      </div>
    );
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