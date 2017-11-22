# 布局

- order: 1

提供竖向和横向两种排列方式

---

````css
.demo-layout {
  max-width: 652px;
}
````

````jsx
const Button = require('uxcore-button');
const Form = require('uxcore-form');
const {
    Constants,
    FormRowTitle,
    FormRow: Row,
    InputFormField: Input,
    SelectFormField: Select,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    ButtonGroupFormField,
    OtherFormField: Other,
} = Form;


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        layout: 'h',
      },
    };
  }

  handleSubmit() {
    console.log(this.form.getValues());
  }

  handleChange(values) {
    this.setState({
      values,
    });
  }

  render() {
    const me = this;
    const isV = () => this.state.values.layout === 'v';
    return (
      <div className="demo-layout">
        <Form
          ref={(c) => { this.form = c; }}
          className="demo-basic-form"
          jsxvalues={this.state.values}
          jsxonChange={(values) => { this.handleChange(values); }}
          verticalAlign={isV()}
        >
          <Select
            jsxname="layout"
            jsxlabel="布局"
            jsxdata={[
              { value: 'h', text: '横向' },
              { value: 'v', text: '竖向' },
            ]}
          />
          <Input jsxname="location" jsxlabel="地点" jsxplaceholder="请输入地点" />
          <Date jsxname="date" jsxlabel="时间" jsxtype="cascade" autoMatchWidth />
          <TextArea jsxname="content" jsxlabel="内容" />
          <Other>
            <Button style={{ marginLeft: isV() ? '0px' : '88px', marginTop: '16px' }} onClick={me.handleSubmit.bind(me)}>确定</Button>
          </Other>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-layout'));
````
