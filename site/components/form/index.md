# Form

- order: 7
- description: form
- category: Components
- screenshots: example/screenshot.png
- chinese: 表单
- subtype: Form Control

---

---

更多使用场景，请参考 [场景 -> 表单相关](/scene/commonForm/) 部分。

## API

### Form

* getValues(force) 获取目前的 values 和 pass（是否通过检测）。  
参数：
    * force `Boolean`: 强制校验或不校验，undefined 时则忽略此配置。

* resetValues() 重置所有的 FormField，如果有默认值则重置为默认值。

* setValues(data) 手动设置各个 FormField 的值，在表单联动时可能会用得到。
参数：
    * data `Object`: 和 jsxvalues 的格式相同。

* isDirty() 获取目前的数据是否没有通过检测，返回 true 或 false。

#### Form.createFormField(options)

自定义一个 FormField

|Name                |Type                |Require   |Default     |Since Ver. |Note | 
|---                 |---                 |---       |---         |---        |---|
|options.component           |React Element       |yes       |input       |1.8.12    |被包裹的组件，需要提供 value 和 onChange，或相同功能的 API |
|options.valuePropName       |string              |No        |value       |1.8.12    |与 value 对应的 prop 名字 |
|options.changePropName      |string              |No        |onChange    |1.8.12    |与 onChange 对应的 prop 名字|
|options.processValue        |func(value, ...other)                |No        | -          |1.8.12    |针对 value（editKey 对应字段）的处理函数|
|options.renderView         |func(value)                |No        | `val => JSON.stringify(val)`         |1.8.12    |定制化渲染 view 状态|

## props

### Form

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|
|jsxprefixCls|string|optional|"kuma-form"|默认类名，用户可以通过修改此项来完成样式的定制|
|jsxmode|string|optional|"EDIT"|Form 编辑和只读模式，传值方式见 demo|
|jsxvalues|object|optional|-|传入表单的初始值，格式见 Usage，每一个 key 与 formField 中的 jsxname 相对应，注意是初始值，不要把 onChange 中的变化同步到这里|
|jsxonChange|function(values, name, pass)|optional|noop|当表单中值有变化时触发，传回 values，格式同 jsxvalues，同时传回发生变化的表单域的 name，以及该表单域是否通过校验|
|instantValidate|boolean|optional|true|是否开启即时校验|
|asyncValidate|boolean|optional|false|是否开启异步校验模式，目前仅支持全局配置|

### jsxvalues 的格式
```javascript
{
    jsxname1: value1,
    jsxname2: value2
}

```

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
|instantValidate|boolean|optional|true|是否开启即时校验|

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

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 | 版本 |
|---|---|---|---|---|---|
|jsxplaceholder|string|optional|""|占位符|-|
|jsxdisabled|boolean|optional|false|disable 状态|-|
|validateOnBlur|boolean|optional|false|验证是否是在 blur 的时候出发，默认情况是在 change 时触发，此项为 true 后，onChange 的 pass 永远为 true，相对应的 onBlur 的 pass 会随之变化|1.2.10|
|onKeyDown|function(e)|optional|noop|监听键盘事件|
|onBlur|function(e, pass)|optional|noop|输入框 blur 时触发，第二个参数为验证是否通过，若 validateOnBlur 为 false，则 pass 永远为 true|1.2.10|
|onFocus|function(e)|optional|noop|输入框获取焦点时触发|1.2.10|
|renderView|function(value)|optional|noop|自定义渲染 view 状态，参数是默认渲染的值|1.6.0|
|autoTrim|boolean|optional|-|自动去除值两端的空格|1.2.12|
|inputType|string|optional|'text'|input 的 type，目前支持 "text" 和 "password"|1.2.23|

* 插件：
    * Count，通过 InputFormField.Count 取得，一个内置的计数器，用法如下：

    ```javascript
    <InputFormField>
        <Count total="20">
    </InputFormField>
    ```

    * LeftAddon/RightAddon，通过 InputFormField.LeftAddon/InputFormField.RightAddon 取得，给 input 左侧加入自定义的图标或文字，用法如下：

    ```javascript
    <InputFormField>
        <LeftAddon>
            <i className="kuma-icon kuma-icon-phone"></i>
        </LeftAddon>
        <RightAddon>
            <span>元</span>
        </RightAddon>
    </InputFormField>
    ```

### TextAreaFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxplaceholder|string|optional|""|占位符|
|validateOnBlur|boolean|optional|false|验证是否是在 blur 的时候出发，默认情况是在 change 时触发，此项为 true 后，onChange 的 pass 永远为 true，相对应的 onBlur 的 pass 会随之变化|1.2.11|
|onKeyDown|function(e)|optional|noop|监听键盘事件|
|onBlur|function(e, pass)|optional|noop|输入框 blur 时触发，第二个参数为验证是否通过，若 validateOnBlur 为 false，则 pass 永远为 true|1.2.11|
|onFocus|function(e)|optional|noop|输入框获取焦点时触发|1.2.11|
|autoTrim|boolean|optional|-|自动去除值两端的空格|1.2.12|
|autosize|boolean|optional|true|根据内容自动撑开(IE8 下无效)|1.3.10|

> 配置 autosize 的同时，还可以通过样式指定 min-height 和 max-height

* 插件：
    * Count，通过 TextAreaFormField.TextAreaCount 取得，一个内置的计数器，用法如下：

    ```javascript
    <TextAreaFormField>
        <TextAreaCount total={100}>
    </TextAreaFormField>
    ```


### RadioGroupFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxdisabled|boolean|optional|false|disable 状态|

* Item：通过 RadioGroupFormField.Item 取得，有两个 props
    * value
    * text：显示的值
* 使用方式：

```javascript
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
|jsxfetchUrl|string|optional|-|如果 Select 是通过搜索异步获取选项，则需要填入此项|
|jsxstyle|obj|optional|-|与 react 传入 style 的方式相同，修改选择框的样式|
|beforeFetch|func|optional|-|会传入 {q: value}， value 为搜索框中变化的值，在发出 ajax 请求之前，将数据处理为应该发送的格式，并需返回该数据。|
|afterFetch|func|optional|-|会传入返回的数据， 将其处理为 jsxdata 的格式并返回|
|dataType|string|optional|'json'|发送 ajax 请求的类型|

#### jsxdata 的格式
jsxdata 目前支持两种格式

```js
// Object
{
    a: "A",
    b: "B"
}
// Array
[
    {
        value: 'a',
        text: 'A'
    }
]
```

> 此外，SelectFormField 还支持 [uxcore-select2](https://www.npmjs.com/package/uxcore-select2) 除 onSelect/onDeselect 外的全部属性。

### SearchFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|advancedOptions|array|optional|-|右侧高级选项的选择项：格式为`[{value: xxx, text: xxx}]`|
|advancedConfig|object|optional|-|右侧高级选项的配置，同 `uxcore-select2`|
|classOptions|array|optional|-|左侧类别选项的选择项：格式为`[{value: xxx, text: xxx}]`|
|classConfig|object|optional|-|左侧类别选项的配置，同 `uxcore-select2`|
|tidy|bool|optional|-|精简模式|
|onIconClick|function(e)|optional|-|点击搜索图标触发回调|

> 该组件继承自 SelectFormField，支持 SelectFormField 的全部 props。

### CheckboxGroupFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxdisabled|boolean|optional|false|disable 状态|

* Item：通过 CheckboxGroupFormField.Item 取的，有两个 props
    * value
    * text：显示的值
    * disabled：该 Item 的 disable 状态。
* 使用方式：

```javascript
<CheckboxGroupFormField>
    <Item value="1" text="a" disabled={true}>
    <Item value="2" text="b">
    <Item value="3" text="c">
</CheckboxGroupFormField>
```

### DateFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxtype|string|optional|single|single/cascade 单独、级联|
|jsxfrom|string|optional|-|开始日期|
|jsxto|string|optional|-|结束日期|
|panel|string|optional|"day"|何种面板,枚举值为"month","year"和"day"|
|autoMatchWidth|boolean|optional|false|从 1.8.11 版本支持，在级联状态下输入框自动匹配宽度|

除此之外，支持除 onSelect，[uxcore-calendar](https://www.npmjs.com/package/uxcore-calendar) 的所有 props。

### NumberInputFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxplaceholder|string|optional|""|占位符|
|jsxtype|string|optional|""|目前支持 "money", "cnmobile" 和 "card", 提供三种格式化显示的方法。"money"的格式为`123 121 121.213 121`,"cnmobile"的格式为 `86 1565 7263 8223`, "card" 的格式为 `3321 3123 3243 4343`|



### CascadeSelectFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|jsxdata|object|required|-|级联选择框，只支持直接传入 data 初始化，格式见 Usage 中的 casData，length 为必须传的 key，告诉 field 有几层级联。|
|jsxplaceholder|string|optional|"请下拉选择"|占位符|
|jsxstyle|object|optional|-|与 react 传入 style 的方式相同，修改选择框的样式|

### PickableFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|multiple|boolean|optional|true|是否支持多选|
|value|string/number|required|-|pickable Item 对应的值|
|type|string|optional|normal|样式风格，可选值为normal,simple,hook|
|max|number|optional|99|最大显示的数字，超过 max，显示 max+|

### EditorFormField

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|placeholder|string|optional|""|占位符|
|jsxcontent|string|optional|""|已废弃，默认值直接通过 Form 的 jsxvalues 即可传递|
|jsxconfig|object|optional|{}|用户自定义的配置项，tinyMCE 的配置项，官方文档中所有 init 部分的配置在这里完成，详细见 http://www.tinymce.com/wiki.php/Configuration|

#### API

setContent(content)：设置 EditorFormField 的值，很不幸，EditorFormField 无法做成完全受控的组件，因为 setContent 操作会导致搜狗等中文输入法使用障碍，因此 EditorFormField 的值重置通过这个 API 来完成，或者也可以使用 Form 的 setValues 方法。


### OtherFormField

> OtherFormField 是一个特殊的 FormField，它用来和其他 FormField 一起完成布局（比如在一行排列等），如果需要一些装饰类的东西，可以以子元素的形式传入到这个 Field 里。
> 他也可以用于布局中的占位。