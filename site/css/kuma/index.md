# Kuma

- order: 0
- tags: 样式,kuma,css,style

---

Kuma是一只轻松可爱休闲的小熊，也常常被唤作“轻松熊”，也是阿里内外的样式解决方案，是一套精选的通用基础样式集合，集成的模块样式都是来自于内外业务中的提炼，同时基于内外交互视觉规范的统一而选定；借Kuma来寓示着通过使用这套集合，希望可以让我们的工作变得轻松舒服一些。

![](https://i.alipayobjects.com/e/201303/2MQNiaBkFJ.png)

---

**`Kuma引入`**

如果页面中已经引入 `infovmcommon/css.vm` 则不需要引入其他样式文件，因为在 `infovmcommon` 中会默认载入 `Kuma.css`，如果没有引入 `infovmcommon` 的话，则需要独立引入一份 `Kuma.css` 文件。

如果不了解 `infovmcommon` 的引入？ 可以移步到 [这里](http://nwux.taobao.net/docs/vmcommon) 解读操作。

---

`Kuma` 服务于我们大家，所以它需要我们大家共同维护，大家可以一起贡献模块样式和Review，发现有任何问题或建议都可以提到 [Kuma issue](https://github.com/uxcore/kuma/issues)

---

## 基础样式 & reset

> 默认基础样式，包括统一浏览器样式margin和padding等位置问题，清除浮动，设置默认排版样式等等。

- 内外边距通常让各个浏览器样式的表现位置不同，所以我们会重新Reset部分元素的边距样式。

```css
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  margin: 0;
  padding: 0;
}
```

- 标题排版自定义默认样式

```css
h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
  font-weight: 500;
}
```


- 重设 HTML5 标签

```css
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
```

- 去掉各Table cell的边距并让其边重合(塌陷),表格线条细条化

```css
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```
- 解决ie下`th`不继承`text-align`

```css
th {
    text-align: inherit;
}
```
- 去除图片、表单元素等的默认边框

```css
fieldset,img {
    border: 0;
}
```
- 去掉列表前的默认标识符号, li会继承

```css
ol,ul {
    list-style:none;
}
```

- 常用统一上标和下标元素时默认样式

```css
sub, sup {
    font-size: 75%; line-height: 0; position: relative; vertical-align: baseline;
}
sup { top: -0.5em; }
sub { bottom: -0.25em; }
```

- 默认a标签链接的:link和:hover状态默认样式

```css
a {
    color: #288df0;
}

a:hover {
    text-decoration: underline;
}
```
- 默认不显示下划线

```css
ins,a {
    text-decoration:none;
}
```

- 部分tag的字体设置

```css
code,
kbd,
pre,
samp {
    font-family: monospace, serif;
    font-size: 1em;
}
```


- 常用的全局属性列表

```css
/*配合JS交互的隐藏*/
.fn-hide {
    display:none;
}

/*左-右浮动*/
.fn-left {
    float:left;
}
.fn-right {
    float:right;
}

/*当单行文字溢出时，可以采用省略号代替展示；当使用 `fn-text-overflow`属性时需要在业务样式中指定`宽度`来调整。*/
.fn-text-overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/*高亮文案颜色*/
.fn-highlight {
    color: #f60;
}

/*备注文案颜色*/
.fn-comment {
    color: #999;
}

/*chrome下字体过小的问题*/
.fn-webkit-adjust {
    -webkit-text-size-adjust: none;
}
```

- 清除浮动类

> 当使用float属性来改变样式时，经常会出现兼容性问题；所以根据经验当操作float属性时要学会适当使用`fn-clear`样式。


```css
.fn-clear:after {
    visibility:hidden;
    display:block;
    font-size:0;
    content:" ";
    clear:both;
    height:0;
}
.fn-clear {
    zoom:1; /* for IE6 IE7 */
}
```

使用起来也非常简单，只需要在包含有浮动属性元素的父级层添加`fn-clear`即可轻松清除并触发`hasLayout`。

````html
<div class="parent fn-clear">
    <div class="fn-left">child-1</div>
    <div class="fn-right">child-2</div>
</div>
````

## 单、复选框 `Update`

> 单选框、复选框基础样式。默认蓝色主题，但是可以分别通过添加 `radio-primary`和`checkbox-primary`来将单、复选框切换到灰色主体。

````html
<label>
    <input class="kuma-checkbox" type="radio" checked> <s></s>
    单选项
</label>
<label>
    <input class="kuma-checkbox radio-primary" type="radio" checked> <s></s>
    单选项
</label>
<label>
    <input class="kuma-checkbox" type="checkbox" checked> <s></s>
    多选项
</label>
<label>
    <input class="kuma-checkbox checkbox-primary" type="checkbox" checked> <s></s>
    多选项
</label>
````

### 默认为蓝色主题

````html
<style>
label {display: inline-block;line-height: 2em;font-size: 12px;vertical-align: middle;}
</style>
<table width="100%">
    <tr>
        <td>
            <label>
                <input class="kuma-checkbox" type="radio"> <s></s>
                未选中
            </label>
            <label>
                <input class="kuma-checkbox" type="radio" checked> <s></s>
                已选中
            </label>
            <label>
                <input class="kuma-checkbox" type="radio" disabled> <s></s>
                未选中禁用
            </label>
            <label>
                <input class="kuma-checkbox" type="radio" disabled checked> <s></s>
                已选中禁用
            </label>
        </td>
        <td>
            <label>
                <input class="kuma-checkbox" type="checkbox"> <s></s>
                未选中
            </label>
            <label>
                <input class="kuma-checkbox" type="checkbox" checked> <s></s>
                已选中
            </label>
            <label>
                <input class="kuma-checkbox" type="checkbox" disabled> <s></s>
                未选中禁用
            </label>
            <label>
                <input class="kuma-checkbox" type="checkbox" disabled checked> <s></s>
                已选中禁用
            </label>
        </td>
    </tr>
</table>
````

## 表格

> 为任意 `<table>` 标签添加 `.kuma-table` 类可以为其赋予基本的样式 — 少量的内补（padding）和水平方向的分隔线。  以下罗列出常用的几种table样式
  - .kuma-table-condensed<br/>
  - .kuma-table-hover<br/>
  - .kuma-table-striped<br/>
  - .kuma-table-bordered<br/>


### 紧凑的表格

> 通过添加 .kuma-table-condensed 类可以让表格更加紧凑，单元格中的内补（padding）均会减半。

````html
<table class="kuma-table kuma-table-condensed">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
    </tbody>
</table>
````

### 有 Hover 样式

> 通过添加 `.kuma-table-hover` 类可以让 <tbody> 中的每一行对鼠标悬停状态作出响应。

````html
<table class="kuma-table kuma-table-hover">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
    </tbody>
</table>
````

### 斑马格的表格

> 通过 `.kuma-table-striped` 类可以给 <tbody> 之内的每一行增加斑马条纹样式。

````html
<table class="kuma-table kuma-table-striped">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
    </tbody>
</table>
````

### 有边框的表格

> 添加 `.kuma-table-bordered` 类为表格和其中的每个单元格增加边框。

````html
<table class="kuma-table kuma-table-bordered">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
    </tbody>
</table>
````

### 带附加项的表格 `New`

> 外面包的结构是为了交互功能的,可以不管

````html
<div class="J_TableWrapper">
<div class="kuma-table-action J_TableFoldWrapper"><a href="javascript:;" class="kuma-table-fold active J_TableFoldToggleTrigger" data-type="fold"></a><a href="javascript:;" class="kuma-table-unfold J_TableFoldToggleTrigger" data-type="unfold"></a></div>
<table class="kuma-table kuma-table-bordered J_Table">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr class="kuma-table-additional-tr J_TableAdditionalTr">
            <td colspan="100%">
                <div class="tr-detail">
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr class="kuma-table-additional-tr J_TableAdditionalTr">
            <td colspan="100%">
                <div class="tr-detail">
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr class="kuma-table-additional-tr J_TableAdditionalTr">
            <td colspan="100%">
                <div class="tr-detail">
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
<script>
seajs.use('$',function($){
   $('.J_TableFoldToggleTrigger').on('click',function(ev){
        ev.preventDefault();
        var tar = $(ev.currentTarget);
        var type = tar.attr('data-type');
        tar.closest('.J_TableFoldWrapper').find('.J_TableFoldToggleTrigger').removeClass('active');
        tar.addClass('active');
        debugger
        if(type === 'fold'){
            tar.closest('.J_TableWrapper').find('.J_TableAdditionalTr').show();
        }else if (type === 'unfold'){
            tar.closest('.J_TableWrapper').find('.J_TableAdditionalTr').hide();
        }

   })
})
</script>
````

## 按钮

### 预定义按钮

> 使用下面列出的类可以快速创建一个带有预定义样式的按钮。

````html
<button type="button" class="kuma-button kuma-button-primary">一级按钮</button>
<button type="button" class="kuma-button kuma-button-secondary">一级按钮</button>
<button type="button" class="kuma-button kuma-button-disabled">橙色按钮</button>
````


### 按钮尺寸

> 需要让按钮具有不同尺寸吗？使用 `.kuma-button-lg`、`.kuma-button-sm `可以获得大-中-小三种不同尺寸的按钮。

````html
<div class="kuma-button-group">
    <a href="javascript:;" class="kuma-button kuma-button-primary kuma-button-lg">大按钮</a>
    <a href="javascript:;" class="kuma-button kuma-button-primary">中按钮</a>
    <a href="javascript:;" class="kuma-button kuma-button-primary kuma-button-sm">小按钮</a>
</div>
````

### Segment-button `New`

````html
<ul class="kuma-segment-button">
	<li class="first selected"><span>全员</span></li><li class="last"><span>直接下属</span></li>
</ul>
<br>
<ul class="kuma-segment-button">
	<li class="first"><span>全员</span></li><li class="last selected"><span>直接下属</span></li>
</ul>
````

### Switch-button(开关按钮) `New`

````html
<div class="kuma-switch-button close">
	<span class="kuma-switch-txt">显示</span>
	<div class="kuma-switch-circle"></div>
</div>
<br>
<div class="kuma-switch-button open">
	<span class="kuma-switch-txt">隐藏</span>
	<div class="kuma-switch-circle"></div>
</div>
````

## 表单

> 通用表单样式。可基于此表单样式构建各类功能表单。

````html
<style>
.kuma-form-text {
    width: 80px;
}
.kuma-form {
    margin: 40px 0;
}
.kuma-form .kuma-input,
.kuma-form .kuma-textarea {
    width: 277px;
}
.kuma-form-item select {
    width: 145px;
}
</style>

<form class="kuma-form">
    <fieldset>
        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>姓名:
            </label>
            <input name="username" class="kuma-input" type="text" placeholder="张三">
            <span class="kuma-form-other">请填写真实姓名</span>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>密码:
            </label>
            <input name="password" class="kuma-input" type="password">
            <span class="kuma-form-other">密码不能少于6位，且不能大于15位</span>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>性别:
            </label>
            <label class="kuma-form-text">
                <input name="gender" class="kuma-checkbox" type="radio" value="m"> <s></s>
                男
            </label>
            <label class="kuma-form-text">
                <input name="gender" class="kuma-checkbox" type="radio" value="f"> <s></s>
                女
            </label>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                订阅内容:
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="1"> <s></s>
                数码
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="2"> <s></s>
                家电
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="3"> <s></s>
                居家
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="4"> <s></s>
                食品
            </label>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                所在城市:
            </label>
            <select name="province">
                <option value="110000">北京</option>
                <option value="120000">天津</option>
                <option value="130000">河北省</option>
                <option value="140000">山西省</option>
                <option value="150000">内蒙古自治区</option>
                <option value="210000">辽宁省</option>
                <option value="220000">吉林省</option>
                <option value="230000">黑龙江省</option>
                <option value="310000">上海</option>
                <option value="320000">江苏省</option>
                <option value="330000">浙江省</option>
                <option value="340000">安徽省</option>
                <option value="350000">福建省</option>
                <option value="360000">江西省</option>
                <option value="370000">山东省</option>
                <option value="410000">河南省</option>
                <option value="420000">湖北省</option>
                <option value="430000">湖南省</option>
                <option value="440000">广东省</option>
                <option value="450000">广西壮族自治区</option>
                <option value="460000">海南省</option>
                <option value="500000">重庆</option>
                <option value="510000">四川省</option>
                <option value="520000">贵州省</option>
                <option value="530000">云南省</option>
                <option value="540000">西藏自治区</option>
                <option value="610000">陕西省</option>
                <option value="620000">甘肃省</option>
                <option value="630000">青海省</option>
                <option value="640000">宁夏回族自治区</option>
                <option value="650000">新疆维吾尔自治区</option>
                <option value="710000">台湾省</option>
                <option value="810000">香港特别行政区</option>
                <option value="820000">澳门特别行政区</option>
                <option value="990000">海外</option>
            </select>
            &nbsp;
            <select name="city">
                <option value="110101">东城区</option>
                <option value="110102">西城区</option>
                <option value="110103">崇文区</option>
                <option value="110104">宣武区</option>
                <option value="110105">朝阳区</option>
                <option value="110106">丰台区</option>
                <option value="110107">石景山区</option>
                <option value="110108">海淀区</option>
                <option value="110109">门头沟区</option>
                <option value="110111">房山区</option>
                <option value="110112">通州区</option>
                <option value="110113">顺义区</option>
                <option value="110114">昌平区</option>
                <option value="110115">大兴区</option>
                <option value="110116">怀柔区</option>
                <option value="110117">平谷区</option>
                <option value="110228">密云县</option>
                <option value="110229">延庆县</option>
            </select>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                家庭住址:
            </label>
            <input name="address" class="kuma-input" type="text" placeholder="前门东大街3号">
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                联系电话:
            </label>
            <input name="mobile" class="kuma-input" type="text" placeholder="01058159988">
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                留言:
            </label>
            <textarea name="note" class="kuma-textarea"></textarea>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                激活码:
            </label>
            <input name="actcode" class="kuma-input" disabled>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                从哪里得知:
            </label>
            <label class="kuma-form-text">
                <input name="fromwhere" class="kuma-checkbox" type="radio" value="1" disabled> <s></s>
                朋友
            </label>
            <label class="kuma-form-text">
                <input name="fromwhere" class="kuma-checkbox" type="radio" value="2" disabled> <s></s>
                电视
            </label>
            <label class="kuma-form-text">
                <input name="fromwhere" class="kuma-checkbox" type="radio" value="3" disabled> <s></s>
                网络
            </label>
            <label class="kuma-form-text">
                <input name="fromwhere" class="kuma-checkbox" type="radio" value="4" disabled checked> <s></s>
                其他
            </label>
        </div>

        <div class="kuma-form-item">
            <input type="submit" class="kuma-button" value="确 定">
            <input type="button" class="kuma-button kuma-button-secondary" value="取 消">
        </div>
    </fieldset>
</form>


<script>
seajs.config({
    alias: {
        '$': 'jquery/jquery/1.7.2/jquery',
        'validator': 'alinw/validator/2.0.0/validator',
        'select': 'alinw/select/2.0.0/select'
    }
});
seajs.use(['$', 'validator', 'select'], function($, Validator, Select) {

    /**
     * 初始化下拉框
     */
    Select.init('select');

    /**
     * 初始化表单校验
     */
    var validator = new Validator({
        element: 'form'
    });
    // 覆盖默认的错误信息显示方式
    var showMessage = function(message, element) {
        this.getExplain(element).html('<span class="kuma-tiptext kuma-tiptext-error"><i class="kuma-tiptext-icon kuma-icon kuma-icon-error" title="出错"></i>&nbsp;' + message + '</span>');
        this.getItem(element).addClass(this.get('itemErrorClass'));
    };
    validator.addItem({
        element: '[name=username]',
        reqkumared: true,
        rule: 'minlength{min:2} maxlength{max:20}',
        errormessage: '亲，请填写您的真实姓名',
        showMessage: showMessage
    });
    validator.addItem({
        element: '[name=password]',
        reqkumared: true,
        rule: 'minlength{min:6} maxlength{max:15}',
        errormessageReqkumared: '亲，密码必须输入哦',
        errormessageMinlength: '亲，密码不能少于6位哦',
        errormessageMaxlength: '亲，密码不能多于15位哦',
        showMessage: showMessage
    });
    validator.addItem({
        element: '[name=gender]',
        reqkumared: true,
        errormessageReqkumared: '亲，请选择您的性别',
        showMessage: showMessage
    });
    validator.addItem({
        element: '[name=address]',
        rule: 'maxlength{max:100}',
        errormessageMaxlength: '亲，地址不能超过100个字符哦',
        showMessage: showMessage
    });
    validator.addItem({
        element: '[name=mobile]',
        rule: 'digits',
        errormessage: '亲，请填写正确的联系方式',
        showMessage: showMessage
    });
    validator.addItem({
        element: '[name=note]',
        rule: 'maxlength{max:100}',
        errormessageMaxlength: '亲，留言不能超过100个字符哦',
        showMessage: showMessage
    });
});
</script>
````

### 表单多列展示

> 可在 `.kuma-form` 中增加样式 `.kuma-form-column` 来实现多列表单，具体宽度需要自定义覆盖

````html
<style>
.kuma-form-column .kuma-form-item{
    width:250px;
}
.kuma-form-column .kuma-input{
    width: 200px;
}
</style>
<form class="kuma-form kuma-form-column">
    <fieldset>
        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>姓名:
            </label>
            <input name="username" class="kuma-input" type="text" width="200" placeholder="张三">
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>密码:
            </label>
            <input name="password" class="kuma-input" width="200" type="password">
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>性别:
            </label>
            <label class="kuma-form-text">
                <input name="gender" class="kuma-checkbox" type="radio" value="m"><s></s> 男
            </label>
            <label class="kuma-form-text">
                <input name="gender" class="kuma-checkbox" type="radio" value="f"><s></s> 女
            </label>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                订阅内容:
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="1"><s></s> 数码
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="2"><s></s>                家电
            </label>
        </div>

        <div class="kuma-form-item" style="padding-left:300px;">
            <input type="submit" class="kuma-button" value="确 定">
            <input type="button" class="kuma-button kuma-button-secondary" value="取 消">
        </div>
    </fieldset>
</form>
````

## 条件

> 条件筛选和标签筛选组件

### 多维度筛选

````html
<style>
.demo-wrapper {
    margin: 20px 0;
}
</style>


<div class="demo-wrapper">

<div class="kuma-filter fn-clear">
    <div class="kuma-filter-title fn-left">
        多纬度筛选：
    </div>
    <ul class="kuma-filter-condition fn-left">
        <li>
            <a href="javascript:void(0)">
                <span>条件一</span><span class="kuma-icon-triangle-down kuma-icon"></span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)">
                <span>条件二</span><span class="kuma-icon-triangle-down kuma-icon"></span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)">
                <span>条件三</span><span class="kuma-icon-triangle-down kuma-icon"></span>
            </a>
        </li>
    </ul>
</div>

<div class="kuma-filter fn-clear">
    <ul class="kuma-tag-removeable">
        <li class="kuma-tag">
            <span>职务类型：技术类 运营类</span><a href="javascript:void(0)" class="kuma-icon-close kuma-icon"></a>
        </li>
        <li class="kuma-tag">
            <span>层级：P5 P6 P7 M2 M3</span><a href="javascript:void(0)" class="kuma-icon-close kuma-icon"></a>
        </li>
        <li class="kuma-tag">
            <span>阶段：待审批 审批不通过</span><a href="javascript:void(0)" class="kuma-icon-close kuma-icon"></a>
        </li>
        <li class="kuma-tag-clear">
            <a href="javascript:void(0)">清空条件</a>
        </li>
    </ul>
</div>

<div class="kuma-filter">
    <div class="fn-clear">
        <div class="kuma-filter-title fn-left">
            筛选级一：
        </div>
        <ul class="kuma-tag-pickable">
            <li class="kuma-tag">
                <a href="javascript:void(0)">
                    <span>条件一</span>
                    <span class="kuma-checkmarkbg"></span>
                    <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                </a>
            </li>
            <li class="kuma-tag picked">
                <a href="javascript:void(0)">
                    <span>条件二</span>
                    <span class="kuma-checkmarkbg"></span>
                    <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                </a>
            </li>
            <li class="kuma-tag">
                <a href="javascript:void(0)">
                    <span>条件三</span>
                    <span class="kuma-checkmarkbg"></span>
                    <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                </a>
            </li>
        </ul>
    </div>
    <div class="fn-clear">
        <div class="kuma-filter-title fn-left">
            筛选级二：
        </div>
        <ul class="kuma-tag-pickable">
            <li class="kuma-tag">
                <a href="javascript:void(0)">
                    <span>条件一</span>
                    <span class="kuma-checkmarkbg"></span>
                    <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                </a>
            </li>
            <li class="kuma-tag picked">
                <a href="javascript:void(0)">
                    <span>条件二</span>
                    <span class="kuma-checkmarkbg"></span>
                    <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                </a>
            </li>
            <li class="kuma-tag">
                <a href="javascript:void(0)">
                    <span>条件三</span>
                    <span class="kuma-checkmarkbg"></span>
                    <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
                </a>
            </li>
            <li class="kuma-tag-clear">
                <a href="javascript:void(0)">清空所选</a>
            </li>
        </ul>
    </div>
</div>

</div>
````

## 带图标提示文案 `Update`

> 带各类图标的提示文案。

````html
<p class="kuma-tiptext kuma-tiptext-message">
    <i class="kuma-tiptext-icon kuma-icon kuma-icon-information"></i>
    信息
</p>

<p class="kuma-tiptext kuma-tiptext-error">
    <i class="kuma-tiptext-icon kuma-icon kuma-icon-error"></i>
    出错
</p>

<p class="kuma-tiptext kuma-tiptext-warning">
    <i class="kuma-tiptext-icon kuma-icon kuma-icon-caution"></i>
    警告
</p>

<p class="kuma-tiptext kuma-tiptext-success">
    <i class="kuma-tiptext-icon kuma-icon kuma-icon-success"></i>
    成功
</p>

<p class="kuma-tiptext kuma-tiptext-question">
    <i class="kuma-tiptext-icon kuma-icon kuma-icon-query"></i>
    疑问
</p>

<p class="kuma-tiptext kuma-tiptext-stop">
    <i class="kuma-tiptext-icon kuma-icon kuma-icon-prohibition"></i>
    阻止
</p>

<p class="kuma-tiptext kuma-tiptext-wait">
    <i class="kuma-tiptext-icon kuma-icon kuma-icon-wait"></i>
    等待
</p>
````

````html
<div class="kuma-tiptext-container kuma-tiptext-container-message">
    <p class="kuma-tiptext kuma-tiptext-message">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-information"></i>
        内外前端Demo中心
    </p>
    <p class="kuma-tiptext kuma-tiptext-follow">
        内外前端Demo中心各类图标的提示文案。
    </p>
    <p class="kuma-tiptext kuma-tiptext-follow">
        内外前端Demo中心各类图标的提示文案，内外前端Demo中心各类图标的提示文案。
    </p>
    <i class="kuma-tiptext-close kuma-icon kuma-icon-close"></i>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-error">
    <p class="kuma-tiptext kuma-tiptext-error">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-error"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-warning">
    <p class="kuma-tiptext kuma-tiptext-warning">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-caution"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-success">
    <p class="kuma-tiptext kuma-tiptext-success">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-success"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-question">
    <p class="kuma-tiptext kuma-tiptext-question">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-query"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-stop">
    <p class="kuma-tiptext kuma-tiptext-stop">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-prohibition"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-wait">
    <p class="kuma-tiptext kuma-tiptext-wait">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-wait"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
````
````html
<div class="kuma-tiptext-container kuma-tiptext-container-message">
    <div class="kuma-tiptext-arrow kuma-tiptext-arrowup">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="kuma-tiptext kuma-tiptext-message">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-information"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-message">
    <div class="kuma-tiptext-arrow kuma-tiptext-arrowdown">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="kuma-tiptext kuma-tiptext-message">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-information"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-message">
    <div class="kuma-tiptext-arrow kuma-tiptext-arrowleft">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="kuma-tiptext kuma-tiptext-message">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-information"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
<br>
<div class="kuma-tiptext-container kuma-tiptext-container-message">
    <div class="kuma-tiptext-arrow kuma-tiptext-arrowright">
        <em>◆</em>
        <span>◆</span>
    </div>
    <p class="kuma-tiptext kuma-tiptext-message">
        <i class="kuma-tiptext-icon kuma-icon kuma-icon-information"></i>
        内外前端Demo中心各类图标的提示文案。
    </p>
</div>
````

## 卡片面板 `New`

> 默认卡片面板展示

````html
<div class="kuma-card">
    <div class="card-titlebar fn-clear">
        <span class="title">默认布局</span>
    </div>
    <div class="card-content">内容区</div>
</div>
````
> 右侧带有操作的面板

````html
<div class="kuma-card">
    <div class="card-titlebar fn-clear">
        <span class="title">右侧操作条</span>
        <span class="actions">
            <i class="kuma-icon kuma-icon-chevron-left prev disabled" data-role="prev"></i>
            <i class="kuma-icon kuma-icon-chevron-right next" data-role="next"></i>
        </span>
    </div>
    <div class="card-content">内容区</div>
</div>
````

## 面包屑

> 面包屑样式

````html
<div class="kuma-crumbs">
    <a href="#">首页</a>
    <a href="#">管理平台 </a>
    <a href="#">流程管理</a>
    <span>编辑流程信息</span>
</div>
````

## 加载指示器 `New`

````html
<div class="kuma-loading-s"></div>
<br>
<div class="kuma-loading"></div>
<br>
<div class="kuma-loading-l"></div>
````

## 进度条

> 各种应用Case中的导航状态或进度条，目前暂分为两种状态和三种状态展现；


### 双状态条(实现&虚线标注形态)

> 通过添加 `.kuma-steps` 来创建状态条基础样式，再通过 `.double-s` 和 `.ds-dash` 来区分双状态条的实现和虚线样式形态。


````html
<div class="kuma-steps">
    <div class="kuma-steps-bd">
        <ul class="fn-clear double-s">
            <li class="ds-col">
                <div class="s-item done">
                    <i class="kuma-icon kuma-icon-number1"></i><strong>步骤1</strong>
                </div>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number2"></i><strong>步骤2</strong>
                </div>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number3"></i><strong>步骤3</strong>
                </div>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number4"></i><strong>步骤4</strong>
                </div>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number5"></i><strong>步骤5</strong>
                </div>
            </li>
        </ul>
    </div>
</div>
````

````html
<div class="kuma-steps">
    <div class="kuma-steps-bd">
        <ul class="fn-clear double-s ds-dash">
            <li class="ds-col">
                <div class="s-item done">
                    <i class="kuma-icon kuma-icon-number1"></i><strong>步骤1</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number2"></i><strong>步骤2</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number3"></i><strong>步骤3</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number4"></i><strong>步骤4</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
            <li class="ds-col">
                <div class="s-item">
                    <i class="kuma-icon kuma-icon-number5"></i><strong>步骤5</strong>
                </div>
                <p class="desc">2014-12-11</p>
            </li>
        </ul>
    </div>
</div>
<br />
````

### 三状态条

> 通过添加 `.various-s` 来变换三中状态(done/current/wait)展现形式。

````html
<div class="kuma-steps">
    <div class="steps-status">
        <span class="status-start"></span>
        <ul class="various-s">
            <li class="vs-col done">
                <div class="status-line"><s></s></div>
                <p class="desc">高朋</p>
            </li>
            <li class="vs-col done">
                <div class="status-line"><s></s></div>
                <p class="desc">朱丽珍</p>
            </li>
            <li class="vs-col cur">
                <div class="status-line"><s></s></div>
                <p class="desc">李江华</p>
            </li>
            <li class="vs-col wait">
                <div class="status-line"><s></s></div>
                <p class="desc">李剑锋(行癫)</p>
            </li>
            <li class="vs-col wait last">
                <div class="status-line"><s></s></div>
                <p class="desc">姜鹏(三丰)</p>
            </li>
        </ul>
    </div>
</div>
````

### 竖向动态条 `New`

````html
<div class="kuma-steps-vertical">
    <div class="steps-status">
        <ul class="various-s">
            <li class="vs-row done">
                <div class="vs-row-hd">
                    <span class="desc">新投递</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd"></div>
            </li>
            <li class="vs-row done">
                <div class="vs-row-hd">
                    <span class="desc">简历评估</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd"></div>
            </li>
            <li class="vs-row cur">
                <div class="vs-row-hd">
                    <span class="desc">简历评估通过</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd">
                    吃饭比欧神快
                </div>
            </li>
            <li class="vs-row wait">
                <div class="vs-row-hd">
                    <span class="desc">面试</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd"></div>
            </li>
            <li class="vs-row wait">
                <div class="vs-row-hd">
                    <span class="desc">发Offer</span>
                    <div class="circle">·</div>
                </div>
                <div class="vs-row-bd"></div>
            </li>
            <li class="vs-row wait">
                <div class="vs-row-hd">
                    <span class="desc">入职</span>
                    <div class="circle">·</div>
                </div>
            </li>
        </ul>
    </div>
</div>
````

## KUMA字体

 - 内部请直接访问 [kuma-icon](http://kuma.nwux.taobao.net/) 来获取字体代码。

````html
<style>
.iconset {
     margin-top: 12px;
    padding: 15px;
    background: #FBFBFB;
    border: 1px solid #eee;
    border-radius: 4px;
}
.icon {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    height: 22px;
    width: 156px;
    color: #888;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 5px;
}
.icon .iconfont {
    margin-right: 10px;
    font-size: 18px;
    width: 20px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    position: relative;
    top: 2px;
}
</style>

<div class="iconset fn-clear">
<div class="icon"><i class="kuma-icon kuma-icon-success"></i> 成功</div>
<div class="icon"><i class="kuma-icon kuma-icon-error"></i> 失败</div>
<div class="icon"><i class="kuma-icon kuma-icon-wait"></i> 等待</div>
<div class="icon"><i class="kuma-icon kuma-icon-prohibition"></i> 禁止</div>
<div class="icon"><i class="kuma-icon kuma-icon-caution"></i> 警告</div>
<div class="icon"><i class="kuma-icon kuma-icon-information"></i> 信息</div>
<div class="icon"><i class="kuma-icon kuma-icon-query"></i> 疑问</div>
<div class="icon"><i class="kuma-icon kuma-icon-unfinished"></i> 待完成</div>
<div class="icon"><i class="kuma-icon kuma-icon-refuse"></i> 取消/拒绝</div>
<div class="icon"><i class="kuma-icon kuma-icon-finish"></i> 完成</div>
<div class="icon"><i class="kuma-icon kuma-icon-stop"></i> 未发起</div>
<div class="icon"><i class="kuma-icon kuma-icon-follow"></i> 添加</div>
<div class="icon"><i class="kuma-icon kuma-icon-mutual"></i> 相互关注</div>
<div class="icon"><i class="kuma-icon kuma-icon-close-hover"></i> 关闭-hover</div>
<div class="icon"><i class="kuma-icon kuma-icon-close"></i> 关闭</div>
<div class="icon"><i class="kuma-icon kuma-icon-choose"></i> 选中</div>
<div class="icon"><i class="kuma-icon kuma-icon-sort-small"></i> 排序</div>
<div class="icon"><i class="kuma-icon kuma-icon-triangle-up"></i> 上(三角)</div>
<div class="icon"><i class="kuma-icon kuma-icon-triangle-down"></i> 下(三角)</div>
<div class="icon"><i class="kuma-icon kuma-icon-triangle-left"></i> 左(三角)</div>
<div class="icon"><i class="kuma-icon kuma-icon-triangle-right"></i> 右(三角)</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-left"></i> 左(箭头)</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-right"></i> 右(箭头)</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-up"></i> 上(箭头)</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-down"></i> 下(箭头)</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-upperright"></i> 右上(箭头)</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-lowright"></i> 右下(箭头)</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-upperleft"></i> 左上(箭头)</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-leftlower"></i> 左下(箭头)</div>
<div class="icon"><i class="kuma-icon kuma-icon-uploading"></i> 上传</div>
<div class="icon"><i class="kuma-icon kuma-icon-download"></i> 下载</div>
<div class="icon"><i class="kuma-icon kuma-icon-transpond"></i> 转发</div>
<div class="icon"><i class="kuma-icon kuma-icon-exit-door"></i> 退出</div>
<div class="icon"><i class="kuma-icon kuma-icon-send"></i> 我发出的</div>
<div class="icon"><i class="kuma-icon kuma-icon-receive"></i> 我收到的</div>
<div class="icon"><i class="kuma-icon kuma-icon-file"></i> 文件</div>
<div class="icon"><i class="kuma-icon kuma-icon-export"></i> 导出</div>
<div class="icon"><i class="kuma-icon kuma-icon-import"></i> 导入</div>
<div class="icon"><i class="kuma-icon kuma-icon-addfile"></i> 添加文件</div>
<div class="icon"><i class="kuma-icon kuma-icon-transfer"></i> 转移文件</div>
<div class="icon"><i class="kuma-icon kuma-icon-nopass"></i> 未通过</div>
<div class="icon"><i class="kuma-icon kuma-icon-exit"></i> 退出</div>
<div class="icon"><i class="kuma-icon kuma-icon-accessory"></i> 附件</div>
<div class="icon"><i class="kuma-icon kuma-icon-link"></i> 链接</div>
<div class="icon"><i class="kuma-icon kuma-icon-record"></i> 录音</div>
<div class="icon"><i class="kuma-icon kuma-icon-picture"></i> 图片</div>
<div class="icon"><i class="kuma-icon kuma-icon-camera"></i> 相机</div>
<div class="icon"><i class="kuma-icon kuma-icon-good"></i> 赞</div>
<div class="icon"><i class="kuma-icon kuma-icon-save"></i> 保存</div>
<div class="icon"><i class="kuma-icon kuma-icon-print"></i> 打印</div>
<div class="icon"><i class="kuma-icon kuma-icon-comment"></i> 评论</div>
<div class="icon"><i class="kuma-icon kuma-icon-edit"></i> 编辑</div>
<div class="icon"><i class="kuma-icon kuma-icon-public"></i> 不私密</div>
<div class="icon"><i class="kuma-icon kuma-icon-delete"></i> 删除</div>
<div class="icon"><i class="kuma-icon kuma-icon-privacy"></i> 私密</div>
<div class="icon"><i class="kuma-icon kuma-icon-favorite"></i> 收藏</div>
<div class="icon"><i class="kuma-icon kuma-icon-inform"></i> 通知</div>
<div class="icon"><i class="kuma-icon kuma-icon-document"></i> 文档</div>
<div class="icon"><i class="kuma-icon kuma-icon-search"></i> 搜索</div>
<div class="icon"><i class="kuma-icon kuma-icon-set"></i> 设置</div>
<div class="icon"><i class="kuma-icon kuma-icon-phone"></i> 电话</div>
<div class="icon"><i class="kuma-icon kuma-icon-diamond"></i> 菱形</div>
<div class="icon"><i class="kuma-icon kuma-icon-chevron-up"></i> 向上</div>
<div class="icon"><i class="kuma-icon kuma-icon-chevron-down"></i> 向下</div>
<div class="icon"><i class="kuma-icon kuma-icon-chevron-right"></i> 向右</div>
<div class="icon"><i class="kuma-icon kuma-icon-chevron-left"></i> 向左</div>
<div class="icon"><i class="kuma-icon kuma-icon-title-right"></i> 年份增加</div>
<div class="icon"><i class="kuma-icon kuma-icon-title-left"></i> 年份减少</div>
<div class="icon"><i class="kuma-icon kuma-icon-title-up"></i> 收起</div>
<div class="icon"><i class="kuma-icon kuma-icon-title-down"></i> 展开</div>
<div class="icon"><i class="kuma-icon kuma-icon-title-down"></i> 已关注</div>
<div class="icon"><i class="kuma-icon kuma-icon-at"></i> At</div>
<div class="icon"><i class="kuma-icon kuma-icon-call"></i> 话机</div>
<div class="icon"><i class="kuma-icon kuma-icon-card"></i> 名片</div>
<div class="icon"><i class="kuma-icon kuma-icon-wangwang"></i> 旺旺</div>
<div class="icon"><i class="kuma-icon kuma-icon-email"></i> 邮件</div>
<div class="icon"><i class="kuma-icon kuma-icon-at-direct"></i> 直接@</div>
<div class="icon"><i class="kuma-icon kuma-icon-privacy-middle"></i> 私密居中</div>
<div class="icon"><i class="kuma-icon kuma-icon-calender"></i> 日历</div>
<div class="icon"><i class="kuma-icon kuma-icon-more"></i> 更多</div>
<div class="icon"><i class="kuma-icon kuma-icon-top"></i> 回到顶部</div>
<div class="icon"><i class="kuma-icon kuma-icon-share"></i> 分享</div>
<div class="icon"><i class="kuma-icon kuma-icon-complete"></i> 完成任务</div>
<div class="icon"><i class="kuma-icon kuma-icon-cancel"></i> 取消任务</div>
<div class="icon"><i class="kuma-icon kuma-icon-add"></i> 添加</div>
<div class="icon"><i class="kuma-icon kuma-icon-coin"></i> 钱币</div>
<div class="icon"><i class="kuma-icon kuma-icon-man"></i> 人物</div>
<div class="icon"><i class="kuma-icon kuma-icon-first"></i> 首页</div>
<div class="icon"><i class="kuma-icon kuma-icon-last"></i> 末页</div>
<div class="icon"><i class="kuma-icon kuma-icon-restart"></i> 重启</div>
<div class="icon"><i class="kuma-icon kuma-icon-share-small"></i> 分享小</div>
<div class="icon"><i class="kuma-icon kuma-icon-trample"></i> 踩</div>
<div class="icon"><i class="kuma-icon kuma-icon-show"></i> 显示</div>
<div class="icon"><i class="kuma-icon kuma-icon-hide"></i> 隐藏</div>
<div class="icon"><i class="kuma-icon kuma-icon-staff"></i> 员工</div>
<div class="icon"><i class="kuma-icon kuma-icon-boss"></i> 主管</div>
<div class="icon"><i class="kuma-icon kuma-icon-smile"></i> 笑脸</div>
<div class="icon"><i class="kuma-icon kuma-icon-recipient"></i> 收件人</div>
<div class="icon"><i class="kuma-icon kuma-icon-sender"></i> 寄件人</div>
<div class="icon"><i class="kuma-icon kuma-icon-hkumayi"></i> 会议</div>
<div class="icon"><i class="kuma-icon kuma-icon-deliver"></i> 转交</div>
<div class="icon"><i class="kuma-icon kuma-icon-value"></i> 价值观</div>
<div class="icon"><i class="kuma-icon kuma-icon-comment-activate"></i> 评论激活</div>
<div class="icon"><i class="kuma-icon kuma-icon-score"></i> 分数</div>
<div class="icon"><i class="kuma-icon kuma-icon-help"></i> 帮助</div>
<div class="icon"><i class="kuma-icon kuma-icon-number0"></i> 序号0</div>
<div class="icon"><i class="kuma-icon kuma-icon-number1"></i> 序号1</div>
<div class="icon"><i class="kuma-icon kuma-icon-number2"></i> 序号2</div>
<div class="icon"><i class="kuma-icon kuma-icon-number3"></i> 序号3</div>
<div class="icon"><i class="kuma-icon kuma-icon-number4"></i> 序号4</div>
<div class="icon"><i class="kuma-icon kuma-icon-number5"></i> 序号5</div>
<div class="icon"><i class="kuma-icon kuma-icon-number6"></i> 序号6</div>
<div class="icon"><i class="kuma-icon kuma-icon-number7"></i> 序号7</div>
<div class="icon"><i class="kuma-icon kuma-icon-number8"></i> 序号8</div>
<div class="icon"><i class="kuma-icon kuma-icon-number9"></i> 序号9</div>
<div class="icon"><i class="kuma-icon kuma-icon-number10"></i> 序号10</div>
<div class="icon"><i class="kuma-icon kuma-icon-member"></i> 成员</div>
<div class="icon"><i class="kuma-icon kuma-icon-cooperation"></i> 合作</div>
<div class="icon"><i class="kuma-icon kuma-icon-manager"></i> 经理</div>
<div class="icon"><i class="kuma-icon kuma-icon-total-score"></i> 总分</div>
<div class="icon"><i class="kuma-icon kuma-icon-tag"></i> 标签</div>
<div class="icon"><i class="kuma-icon kuma-icon-arrow-crumbs"></i> 面包屑箭头</div>
<div class="icon"><i class="kuma-icon kuma-icon-chart"></i> 图表</div>
<div class="icon"><i class="kuma-icon kuma-icon-tree-close"></i> 收起树</div>
<div class="icon"><i class="kuma-icon kuma-icon-tree-open"></i> 展开树</div>
</div>
````
