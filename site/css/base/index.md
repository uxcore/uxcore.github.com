# Base

- order: 0
- category: CSS
- chinese:　基础样式

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

### 加载指示器

````html
<div class="kuma-loading-s"></div>
<br>
<div class="kuma-loading"></div>
<br>
<div class="kuma-loading-l"></div>
````
