# 表单的扩展1 -- 自定义一个 FormField

- order: 0

通过继承 Form.FormField，用户可以自己定义特制的 FormField，以满足各种业务上的需求。  
 定制的 FormField 同样可以使用 Form 带来通用配置，如布局、样式、校验、值的管理等等。
---

````jsx

const Form = require("uxcore-form");
const Button = require("uxcore-button");
const deepcopy = require('deepcopy');
const assign = require('object-assign');
const FormField = require('uxcore-form-field');

const {
    OtherFormField: Other
} = Form;

class DoubleInputFormField extends FormField {
    constructor(props) {
        super(props);
        // 这里不要直接覆盖 this.state = {};
        // 如果希望增加 state，使用扩展。
        // this.state = assign({}, this.state, {xxx: 1})
    }

    // 改写 addSpecificClass，增加该 FormField 专属的 class

    addSpecificClass() {
        return "kuma-doubleinput-uxform-field"
    }


    // 在合适的时机调用 me.handleDataChange，将变动通知给 Form

    handleChange(index, e) {
        let me = this;
        let value = e.currentTarget.value;
        let stateValue = me.state.value || [];
        stateValue[index] = value;
        me.handleDataChange(stateValue);
    }

    // 改写 renderField，决定渲染方式

    renderField() {
        let me = this;
        let arr = [];
        // 这里注意取值使用 state.value，完成和 Form 的通信。
        let values = me.state.value || [];
        arr.push(<input className="kuma-input" value={values[0]} onChange={me.handleChange.bind(me, 0)} key="input1"/>);
        arr.push(<span className="split" key="split">-</span>);
        arr.push(<input className="kuma-input" value={values[1]} onChange={me.handleChange.bind(me, 1)} key="input2"/>);
        return arr;
    }

}

DoubleInputFormField.displayName = "DoubleInputFormField" // 重要，必须 displayName 中带有 FormField 才可以被识别为 FormField。

// 如果你的代码需要兼容 IE，以下两行不可缺少。
// 即使不需要兼容 IE，也不可直接覆盖，如 DoubleInputFormField.defaultProps = {};
DoubleInputFormField.defaultProps = assign({}, FormField.defaultProps);
DoubleInputFormField.propTypes = assign({}, FormField.propTypes);

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {}
        }
    }

    handleClick() {
        let me = this;
        alert(JSON.stringify(me.refs.form.getValues()));
    }

    handleReset() {
        let me = this;
        me.refs.form.resetValues();
    }

    render() {
        let me = this;
        
        // FormField 通用的 props 都可以使用。
        return (
            <div className="page-demo2">
                <Form ref="form" jsxvalues={{
                    double: [2, 4]
                }}> 
                    <DoubleInputFormField jsxlabel="双输入框" jsxname="double" />
                    <Other className="other">
                        <Button onClick={me.handleClick.bind(this)}>确定</Button>
                    </Other>
                </Form>
            </div>
        )
    }

}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-commonform-demo-definefield'));

/* JS END CSS START*/
````
````css
.page-demo2 .other {
    padding-left: 100px
}
.page-demo2 .kuma-doubleinput-uxform-field .kuma-input {
    width: 200px
}
.page-demo2 .kuma-doubleinput-uxform-field .split {
    margin: 0 5px;
}
.page-demo2 .kuma-button {
    margin-right: 10px;
}
````