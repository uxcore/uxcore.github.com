# 校验和提示

- order: 1

自带验证函数，并且支持自己手写，并分为实时验证与非实时验证。

---


````css
.demo-validator {
  max-width: 652px;
}
````

````jsx

const Button = require('uxcore-button');
const Form = require('uxcore-form');
const Icon = require('uxcore-icon');
const Tooltip = require('uxcore-tooltip');

const {
  InputFormField: Input,
  DateFormField: Date,
  TextAreaFormField: TextArea,
  OtherFormField,
  SelectFormField,
  Validators,
} = Form;


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: true,
    };
  }

  handleSubmit() {
    console.log(this.form.getValues(true));
  }

  handleModeChange(values, name) {
    console.log(values[name]);
    this.setState({
      mode: values[name] === 'true',
    });
  }

  render() {
    const me = this;
    return (
      <div className="demo-validator">
        <Form className="form-select" jsxvalues={{ mode: 'true' }} jsxonChange={me.handleModeChange.bind(me)}>
          <SelectFormField jsxdata={{ true: '实时校验', false: '非实时校验' }} jsxname="mode" jsxlabel="校验模式" showSearch={false} />
        </Form>
        <Form ref={(c) => { this.form = c; }} className="demo-basic-form" instantValidate={me.state.mode}>
          <Input
            jsxname="theme"
            jsxlabel="主题"
            required
            jsxtips="这是一个提示"
            jsxplaceholder="请输入主题"
            jsxrules={[
              { validator: Validators.isNotEmpty, errMsg: '不能为空' },
              { validator(value) { return value.length <= 3; }, errMsg: '不能超过3个字' },
            ]}
          />
          <Input
            jsxname="location"
            jsxlabel="地点"
            required
            jsxplaceholder="请输入地点"
            jsxrules={[
              { validator: Validators.isNotEmpty, errMsg: '不能为空' },
            ]}
          />
          <Date jsxname="date" jsxlabel="时间" jsxtype="cascade" autoMatchWidth />
          <TextArea
            jsxname="content"
            jsxlabel="内容"
            required
            jsxrules={[
              { validator: Validators.isNotEmpty, errMsg: '不能为空' },
            ]}
          />
          <OtherFormField>
            <Button style={{ marginLeft: '88px', marginTop: '16px' }} onClick={me.handleSubmit.bind(me)}>确定</Button>
          </OtherFormField>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-validator'));
````
