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

## Usage

> see demo/FormDemo.js for details  
> 每一个 field 需要按照 Form -> FormRow -> FormField 的方式进行嵌套，允许 Form -> FormField 的嵌套，会自动增加 FormRow 这一层，并默认占一整行。

```
// see demo
```

## API

### Form

* getValues(data) 获取目前的 values 和 pass（是否通过检测）。  
参数：
    * data `Object`: 数据格式为 {values: {}, pass: false}。

* resetValues() 重置所有的 FormField，如果有默认值则重置为默认值。

* isDirty() 获取目前的数据是否没有通过检测，返回 true 或 false。

## props

### Form

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|
|jsxprefixCls|string|optional|"kuma-form"|默认类名，用户可以通过修改此项来完成样式的定制|
|jsxmode|string|optional|"EDIT"|Form 编辑和只读模式，传值方式见 demo|
|jsxvalues|object|optional|-|传入表单的初始值，格式见 Usage，每一个 key 与 formField 中的 jsxname 相对应|
|jsxonChange|function|optional|noop|当表单中值有变化时触发，传回 values，格式同 jsxvalues|

### FormRow

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|
|jsxprefixCls|string|optional|"kuma-form-row"|默认类名，用户可以通过修改此项来完成样式的定制|

### FormField 通用配置

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|
|jsxshow|bool|optional|true|是否显示该表单域，不显示的表单域将不占宽度|
|jsxmode|string|optional|"EDIT"|FormField 的编辑和只读模式，优先级高于 Form，传值方式见 demo|
|jsxshowLabel|bool|optional|true|是否显示 label|
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

### InputFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxplaceholder|string|optional|""|占位符|

### TextAreaFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxplaceholder|string|optional|""|占位符|


### RadioGroupFormField

* Item：通过 RadioGroupFormField.Item 取得，有两个 props
    * value
    * text：显示的值
* 使用方式：
```
<RadioGroupFormField>
    <Item value="1" text="a">
    <Item value="2" text="b">
    <Item value="3" text="c">
</RadioGroupFormField>
```

### SelectFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxdata|object|optional|-|传入用于生成列表的数据，格式为{value: text}|
|jsxfetchUrl|string|optional|-|如果 Select 是通过搜索异步获取选项，则需要填入此项，目前指支持 jsonp。|
|jsxstyle|obj|optional|-|与 react 传入 style 的方式相同，修改选择框的样式|
|beforeFetch|func|optional|-|会传入 {q: value}， value 为搜索框中变化的值，在发出 ajax 请求之前，将数据处理为应该发送的格式，并需返回该数据。|
|afterFetch|func|optional|-|会传入返回的数据， 将其处理为 jsxdata 的格式并返回|
|jsxshowSearch|func|optional|true|是否显示搜索栏|
|jsxtags|bool|optional|false|是否启用 tag 模式|
|jsxmultiple|bool|optional|false|是否启用 multiple 模式|
|jsxallowClear|bool|optional|false|是否显示清除按钮|
|jsxsearchPlaceholder|string|optional|""|搜索框默认文字|
|jsxcombobox|bool|optional|false|标准搜索模式，在该模式下没有下拉框，通过输入产生提示|
|jsxplaceholder|string|optional|"请下拉选择"|占位符|

see datails in [uxcore-select2](https://www.npmjs.com/package/uxcore-select2)

### CheckboxGroupFormField

* Item：通过 CheckboxGroupFormField.Item 取的，有两个 props
    * value
    * text：显示的值
* 使用方式：
```
<CheckboxGroupFormField>
    <Item value="1" text="a">
    <Item value="2" text="b">
    <Item value="3" text="c">
</CheckboxGroupFormField>
```

### DateFormField

支持出 onSelect 外，[uxcore-calendar](https://www.npmjs.com/package/uxcore-calendar) 的所有 props。

### NumberInputFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxplaceholder|string|optional|""|占位符|
|jsxtype|string|optional|""|目前支持 "money", "cnmobile" 和 "card", 提供三种格式化显示的方法。"money"的格式为`123 121 121.213 121`,"cnmobile"的格式为 `86 1565 7263 8223`, "card" 的格式为 `3321 3123 3243 4343`|

### UploadFormField

> 支持 uxcore-uploader 的所有配置项。
> 具体说明参考：https://github.com/uxcore/uxcore-uploader

### CascadeSelectFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxdata|object|required|-|目前级联选择框，只支持直接传入 data 初始化，格式见 Usage 中的 casData，length 为必须传的 key，告诉 field 有几层级联。|
|jsxplaceholder|string|optional|"请下拉选择"|占位符|
|jsxstyle|object|optional|-|与 react 传入 style 的方式相同，修改选择框的样式|

### EditorFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxcontent|string|optional|""|由于 tinymce 的默认值传法的特殊性，EditorFormField 的默认值通过此 prop 传入|
|jsxconfig|object|optional|{}|用户自定义的配置项，tinyMCE 的配置项，官方文档中所有 init 部分的配置在这里完成，详细见 http://www.tinymce.com/wiki.php/Configuration|


### GridFormField

> 支持 uxcore-grid 的全部配置项，在 Form 中通常只需要传入 column 来生成配置项，见 Usage 中的使用。
> 具体说明参考：https://github.com/uxcore/uxcore-grid

### OtherFormField

> OtherFormField 是一个特殊的 FormField，它用来和其他 FormField 一起完成布局（比如在一行排列等），如果需要一些装饰类的东西，可以以子元素的形式传入到这个 Field 里。
> 他也可以用于布局中的占位。

### ButtonGroupField

> ButtonGroupField 是一个特殊的 FormField，它用来生成一些特定的表单按钮，这是为了与 Grid 相结合而准备的。如果需要自定义一些按钮，请使用 OtherFormField 和 uxcore-button 相结合来使用。
