# Form

- order: 7
- tag: uxcore, form
- description: stupid form
- maintainers: 骁勇
- version: 1.0.5
- lastupdate: 2015/9/10
- screenshots: example/screenshot.png

---

## uxcore-form [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-form.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-form) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-form.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-form#info=devDependencies)

## TL;DR

uxcore-form ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-form
$ cd uxcore-form
$ npm install
$ gulp server
```

## Usage

> see demo/FormDemo.js for details  
> 每一个 field 需要按照 Form -> FormRow -> FormField 的方式进行嵌套，允许 Form -> FormField 的嵌套，会自动增加 FormRow 这一层，并默认占一整行。

```
let classnames = require('classnames');
let {Button, ButtonGroup} = require('uxcore-button');

let Form = require('../src');
let {
    Constants,
    FormRowTitle,
    FormRow,
    FormField,
    InputFormField,
    Validators,
    RadioGroupFormField,
    SelectFormField,
    TextAreaFormField,
    NumberInputFormField,
    DateFormField,
    CheckboxGroupFormField,
    CascadeSelectFormField,
    UploadFormField,
    OtherFormField
} = Form;

let CheckboxItem = CheckboxGroupFormField.Item;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick() {
        let me = this;
        console.log(me.refs.form.getValues());
    }

    handleChange(value) {
        console.log(value);
    }

    render() {
        let me = this;
        let data = {
            test1: "我是测试",
            fruit: "apple",
            city: "nj",
            textArea: "我是多行文本",
            date: "2015-09-01",
            checkbox: ["sea"]
        }

        return (
            <div>
                <Form ref="form" jsxmode={Constants.MODE.EDIT} jsxvalues={data} jsxonChange={me.handleChange.bind(me)}>
                    <FormRowTitle jsxtitle="我是行标题"/>
                    <FormRow>
                        <InputFormField  
                         jsxname="test1"
                         jsxlabel="测试输入框"
                         jsxplaceholder="请输入"
                         jsxtips="请输入数字"
                         jsxrules={{validator: Validators.isNotEmpty, errMsg: "不能为空"}}/>
                        <RadioGroupFormField jsxname="fruit" jsxlabel="Fruit Type" jsxflex={1}>
                                <input type="radio" value="apple" />Apple
                                <input type="radio" value="orange" />Orange
                                <input type="radio" value="watermelon" />Watermelon
                        </RadioGroupFormField>
                    </FormRow>
                    <OtherFormField className="button-group">
                        <ButtonGroup>
                            <Button size="medium" onClick={me.handleClick.bind(me)}>提交</Button>
                            <Button size="medium">重置</Button>
                        </ButtonGroup>
                    </OtherFormField>
                </Form>
            </div>
        );
    }
};

module.exports = Demo;
```

## Demo
http://uxcore.github.io/uxcore/

## API

### Form

* getValues() 获取目前的 values 和 pass（是否通过检测），在使用 onChange 函数监听的情况下意义不大。  
* isDirty() 获取目前的数据是否没有通过检测。

## props

### Form

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxprefixCls|string|optional|"kuma-form"|默认类名，用户可以通过修改此项来完成样式的定制|
|jsxmode|string|optional|"EDIT"|Form 编辑和只读模式，传值方式见 demo|
|jsxvalues|object|optional|-|传入表单的初始值，格式见 Usage，每一个 key 与 formField 中的 jsxname 相对应|
|jsxonChange|function|optional|noop|当表单中值有变化时触发，传回 values，格式同 jsxvalues|

### FormRow

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxprefixCls|string|optional|"kuma-form-row"|默认类名，用户可以通过修改此项来完成样式的定制|

### FormField 通用配置

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxshow|bool|optional|true|是否显示该表单域，不显示的表单域将不占宽度|
|jsxname|string|required|-|表单字段，返回值时该字段将作为 key|
|jsxlabel|string|required|-|左侧的说明文字，不写即为留白|
|jsxprefixCls|string|optional|"kuma-form-field"|默认类名，用户可以通过修改此项来完成样式的定制|
|jsxflex|number|optional|1|占 FormRow 宽的比例，类似于 css3 中的 flex-box|
|jsxtips|string|optional|""|说明文字|
|jsxrules|object/array|optional|-|validators，具体用法和格式见 Usage，Form 已经提供了一些现成的 validator 供使用。也可以自己编写|

### Validators

> Form 提供了一些通用的 validator，通过 Form.Validators 来引入。用法还是见 Usage 和 `demo/formDemo.js` 包括：
> 所有的 validator 返回 true，表示通过。
> validator 也可以自己定义，会传入相应的表单值，根据判断，返回 true，表示通过。

* isNotEmpty
* isNum
* isInt: 是否是整数
* isDecimal: 是否是小数
* isArray
* isRegExp
* isObject
* isFunc
* isEmail
* isUrl
* isHex
* isIdCard: 是否是中国身份证。
* isCNMobile: 是否是中国手机号。

### FormField 专属配置
> 所有的 FormField 都共享通用配置，所有的专属配置在 `demo/formDemo.js`，均有体现。

RadioGroupFormField

* children：需要传入 input 来完成初始化

SelectFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxdata|object|optional|-|传入用于生成列表的数据，格式为{value: text}|
|jsxfetchUrl|string|optional|-|如果 Select 是通过搜索异步获取选项，则需要填入此项，目前指支持 jsonp。|
|jsxstyle|obj|optional|-|与 react 传入 style 的方式相同，修改 Field 的样式|
|beforeFetch|func|optional|-|会传入 {q: value}， value 为搜索框中变化的值，在发出 ajax 请求之前，将数据处理为应该发送的格式，并需返回该数据。|
|afterFetch|func|optional|-|会传入返回的数据， 将其处理为 jsxdata 的格式并返回|
|jsxshowSearch|func|optional|true|是否显示搜索栏|
|jsxtags|bool|optional|false|是否启用 tag 模式|
|jsxmultiple|bool|optional|false|是否启用 multiple 模式|
|jsxallowClear|bool|optional|false|是否显示清除按钮|
|jsxsearchPlaceholder|string|optional|""|搜索框默认文字|

see datails in [uxcore-select2](https://www.npmjs.com/package/uxcore-select2)

CheckboxGroupFormField

* Item：通过 CheckboxGroupFormField.Item 取的，有两个 props
    * value
    * text：显示的值

DateFormField

支持出 onSelect 外，[uxcore-calendar](https://www.npmjs.com/package/uxcore-calendar) 的所有 props。

NumberInputFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxtype|string|optional|""|目前支持 "money", "cnmobile" 和 "card", 提供三种格式化显示的方法|

UploadFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxaction|string|required|-|上传文件的 url|
|jsxparams|object|optional|-|随文件上传时传的参数|
|jsxfileName|string|optional|原文件名|文件上传时的文件名|
|jsxonStart|func|optional|noop|文件上传时触发|
|jsxonError|func|optional|noop|上传失败时触发|
|jsxonSuccess|func|optional|noop|上传成功时触发|
|jsxonProgress|func|optional|noop|上传过程中触发|

> 具体说明参考：https://github.com/uxcore/uxcore-rc-upload

CascadeSelectFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxstyle|obj|optional|-|与 react 传入 style 的方式相同，修改 Field 的样式|

### OtherFormField

> OtherFormField 是一个特殊的 FormField，它用来和其他 FormField 一起完成布局（比如在一行排列等），如果需要一些装饰类的东西，可以以子元素的形式传入到这个 Field 里。
> 他也可以用于布局中的占位。

### ButtonGroupField

> ButtonGroupField 是一个特殊的 FormField，它用来生成一些特定的表单按钮，这是为了与 Grid 相结合而准备的。如果需要自定义一些按钮，请使用 OtherFormField 和 uxcore-button 相结合来使用。
