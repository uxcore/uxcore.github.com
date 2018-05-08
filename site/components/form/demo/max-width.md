# 输入区域最大宽度

- order: 3

为了应对一些宽屏情况下自适应过长的问题，我们提供了两套最大宽度限制。

---



````jsx
import { Button } from 'uxcore';
import { Form } from 'uxcore';

const {
  InputFormField: Input,
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
      <div className="demo-max-width">
        <Form ref={(c) => { this.form = c; }} className="demo-basic-form">
          <Input jsxname="theme" jsxlabel="主题" jsxplaceholder="请输入主题" inputBoxMaxWidth="middle" />
          <Input jsxname="location" jsxlabel="地点" jsxplaceholder="请输入地点" inputBoxMaxWidth="middle" />
          <TextArea jsxname="content" jsxlabel="内容" inputBoxMaxWidth="large" />
          <Other>
            <Button style={{ marginLeft: '88px', marginTop: '16px' }} onClick={() => { this.handleSubmit(); }}>确定</Button>
          </Other>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-max-width'));
````


