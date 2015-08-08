# Form

## Feature List/特性


## Usage 最佳实践 [demo](http://uxcore.github.io/uxcore-form/)

```sh
$ git clone https://github.com/uxcore/uxcore-form
$ cd uxcore-form
$ npm install
$ npm run dev
```

### Apply scope

* uxcore-form, including form common validation, layout etc

## API

*  Attr

	* jsxname
    * jsxdata
    * jsxmode
    * jsxprefixCls
    * jsxrule
    * jsxvalue

* Form API

    * doValidate
    * isDirty

* Form Field API

    * handleChange
    * doValidate
    * renderField

## 扩展FormField 接口方法

后续FormField会越来越多，成为FormField,几个条件需要满足:

* 继承FormField
* handleChange需要覆盖重写,这个方法是FormField数据变化时，验证和数据回流到Form的入口
* 重写 renderField,渲染field 组件的UI

## 一般FormField的方式, 大部分情况，field里面是其它的组件，类似TableTest

```
 <FormRow>
    <FormField jsxtext="表格" jsxname="table" jsxtips="请留意表格类型" jsxrule={{required: true,message:"not empty"}} jsxvalue="table test">
        <TableTest/>
    </FormField>
</FormRow>
```
FormField为 其child component 准备的数据如下:

```
    return React.cloneElement(child, {
        jsxmode:me.props.jsxmode,
        jsxvalue: me.state.value,
        handleDataChange: me.handleDataChange,
        context: me
    });
```

所以child component 需要做的，就是做自己的业务逻辑，然后通过handleDataChange 同步数据給form 容器
目前缺失的是 child component如何validate 自己的规则，然后 同步到formfield层，see [issue3](https://github.com/uxcore/uxcore-form/issues/3)

## work flow

* Form-> Render-> FormField register to Form (this.fields) by jsxname
* FormField -> Render -> view UI or Edit UI
* FormField -> data Change -> use handleDataChange hook method pass back to Form

## TODO
