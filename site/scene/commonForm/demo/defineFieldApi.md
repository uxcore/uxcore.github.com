# 表单的扩展2 -- 使用 API 自定义一个 FormField

- order: 2

通过继承 Form.createFormField API，用户可以快速地将自己的业务组件封装成 FormField，以满足各种业务上的需求。    
定制的 FormField 同样可以使用 Form 带来通用配置，如布局、样式、校验、值的管理等等。  
可以与上面的例子进行一个对比，感受一下之间的不同性，这种方式没有扩展 FormField 的方式定制，但相比较起来封装更加简单。
---

````jsx

import { Form } from 'uxcore';
import { Button } from 'uxcore';

const {
    OtherFormField: Other,
} = Form;

// 组件拥有 prop `value` 和 `onChange`
// 当然也可以不叫 `value` 和 `onChange`，只需要根据文档，传入对应的 prop 名即可。

class DoubleInput extends React.Component {
  handleChange(index, e) {
    const me = this;
    const value = e.currentTarget.value;
    const stateValue = (me.props.value || []).slice(0);
    stateValue[index] = value;
    me.props.onChange(stateValue);
  }
  render() {
    const me = this;
    const arr = [];
    const values = me.props.value || [];
    arr.push(<input className="kuma-input" value={values[0]} onChange={me.handleChange.bind(me, 0)} key="input1" />);
    arr.push(<span className="split" key="split">-</span>);
    arr.push(<input className="kuma-input" value={values[1]} onChange={me.handleChange.bind(me, 1)} key="input2" />);
    return (
      <div>{arr}</div>
    );
  }
}

const DoubleInputFormField = Form.createFormField({
  component: <DoubleInput />,
  fieldName: 'DoubleInputFormField',
});

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };
  }

  handleClick() {
    const me = this;
    alert(JSON.stringify(me.refs.form.getValues()));
  }

  handleReset() {
    const me = this;
    me.refs.form.resetValues();
  }

  render() {
    const me = this;

        // FormField 通用的 props 都可以使用。
    return (
      <div className="page-demo3">
        <Form ref="form" jsxvalues={{
          double: [2, 4],
        }}
        >
          <DoubleInputFormField jsxlabel="双输入框" jsxname="double" className="kuma-doubleinput-uxform-field" />
          <Other className="other">
            <Button onClick={me.handleClick.bind(this)}>确定</Button>
          </Other>
        </Form>
      </div>
    );
  }

}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-commonform-demo-definefieldapi'));

/* JS END CSS START*/
````
````css
.page-demo3 .other {
    padding-left: 100px
}
.page-demo3 .kuma-doubleinput-uxform-field .kuma-input {
    width: 200px
}
.page-demo3 .kuma-doubleinput-uxform-field .split {
    margin: 0 5px;
}
.page-demo3 .kuma-button {
    margin-right: 10px;
}
````