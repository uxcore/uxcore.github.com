# Base

- order: 0
- category: CSS
- chinese:　基础样式

---

## 字体

````html
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum culpa iste, sequi praesentium, officia dolorem quas incidunt? Sunt reprehenderit quidem fugit quis officiis ad. Tempora possimus necessitatibus quas facere maiores.</p>
    <p style="font-size: 14px;">Quos quidem recusandae veritatis repellendus saepe unde porro neque provident expedita cupiditate in quas sed architecto ipsum quo, cumque ea sunt quasi eligendi eos id dolor? Officia ex, aperiam sequi.</p>
    <p style="font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum culpa amet, quis dignissimos voluptatibus iste ratione repellendus inventore similique rem labore nihil perspiciatis, sapiente quam expedita, beatae, officiis. Quae, molestiae!</p>
    <p>导合军怎减整助料内击状或回破他未伯五本首斤伯达铁化刚动胜粮未搞内，水听标银燃鲜杆走片广处律功入威帮拉所可宗零格社吧底历代行容到尽波，专岁间年气达队口权材速终马齐际沉脚刑也扬抓划洲见本？</p>
    <p style="font-size: 14px;">帝家天山紧足属但轴因报农源晚依卷而。绝谈计视体沿清掌力批传处旧误众专身力创握给学裂龙伯早胶约党。</p>
    <p style="font-size: 16px;">草公该虽稳怕现称上级江，率村破爱球乱条江剧除法大粒联歌管饭公代种广热况电谈孩研含时变及日及，板牛井急苏触培脚武位再节国火座备？</p>
</div>
````

## 链接

````html
<a href="http://ux.alibaba.net/" class="link-demo">This is a link</a><br/>
<a href="http://ux.alibaba.net/" class="link-demo">这是一个链接</a>
````

## 常用的全局属性列表

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

## 清除浮动类

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

## 加载指示器

````html
<div class="kuma-loading-s"></div>
<br>
<div class="kuma-loading"></div>
<br>
<div class="kuma-loading-l"></div>
````
