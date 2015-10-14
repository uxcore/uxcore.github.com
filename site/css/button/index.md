# Button

- order: 2
- category: CSS
- chinese:　按钮

---

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
