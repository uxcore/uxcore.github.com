# 高级使用

- order: 1

---

````jsx
import classnames from 'classnames';;
import { Card, Icon, Form } from 'uxcore';

const { SwitchFormField, FormRow } = Form;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: {
        showCollapseIcon: false,
        showIcon: false,
        hasContentPadding: true,
        showTip: false,
      }
    };
  }

  render() {
    const { showCollapseIcon, showIcon, hasContentPadding, showTip } = this.state.value;
    const cardProps = {
      title: 'Title Title Title Title Title',
      tip: showTip ? '这是一个提示' : '',
      icon: showIcon ? <Icon usei name="shangchuan" /> : null,
      extra: (
        <a>
        自定义操作
        </a>
      ),
      className: 'card-demo',
      showCollapseIcon,
      contentPaddingSize: hasContentPadding ? 'middle' : 'none',
    };
    return (
      <div>
        <Form className="card-demo-form" jsxvalues={this.state.value} jsxonChange={(value) => { this.setState({ value }) }}>
          <FormRow>
            <SwitchFormField jsxname="showCollapseIcon" jsxlabel="开启折叠展开" />
            <SwitchFormField jsxname="showIcon" jsxlabel="显示图标" />
          </FormRow>
          <FormRow>
            <SwitchFormField jsxname="hasContentPadding" jsxlabel="包含内容边距" />
            <SwitchFormField jsxname="showTip" jsxlabel="显示提示信息" />
          </FormRow>
        </Form>
        <Card
          {...cardProps}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-card-demo-advanced'));

````

````css
.code-box-demo {
  background: rgba(31, 56, 88, 0.3);
}

.card-demo {
  width: 300px;
}

.card-demo-form {
  width: 500px;
}

````

