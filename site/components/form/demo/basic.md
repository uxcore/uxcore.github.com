# 基本使用

- order: 0

无需任何绑定，只要插入几个标签，就可以完成一个表格的搭建。

---


````css
.demo-basic {
  max-width: 652px;
}
````

````jsx
const Button = require('uxcore-button');
const Form = require('uxcore-form');

const {
  InputFormField: Input,
  DateFormField: Date,
  TextAreaFormField: TextArea,
  OtherFormField: Other,
} = Form;


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit() {
    console.log(this.form.getValues());
  }

  render() {
    return (
      <div className="demo-basic">
        <Form ref={(c) => { this.form = c; }} className="demo-basic-form">
          <Input jsxname="theme" jsxlabel="主题" jsxplaceholder="请输入主题" />
          <Input jsxname="location" jsxlabel="地点" jsxplaceholder="请输入地点" />
          <Date jsxname="date" jsxlabel="时间" jsxtype="cascade" autoMatchWidth />
          <TextArea jsxname="content" jsxlabel="内容" inputBoxMaxWidth="large" />
          <Other>
            <Button style={{ marginLeft: '88px', marginTop: '16px' }} onClick={() => { this.handleSubmit(); }}>确定</Button>
          </Other>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-basic'));
````


