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
<button type="button" class="kuma-button kuma-button-outline">二级按钮</button>
<button type="button" class="kuma-button kuma-button-secondary">次要按钮</button>
<button type="button" class="kuma-button kuma-button-disabled">禁用按钮</button>
````


### 按钮尺寸

> 需要让按钮具有不同尺寸吗？使用 `.kuma-button-lg`、`.kuma-button-sm `可以获得大-中-小三种不同尺寸的按钮。

````html
<a href="javascript:;" class="kuma-button kuma-button-primary kuma-button-lg">大按钮</a>
<a href="javascript:;" class="kuma-button kuma-button-primary">中按钮</a>
<a href="javascript:;" class="kuma-button kuma-button-primary kuma-button-sm">小按钮</a>
````

### 按钮组

````html
<div class="kuma-button-group">
	 <button class="kuma-button kuma-button-primary">Left</button>
     <button class="kuma-button kuma-button-primary">Middle1</button>
     <button class="kuma-button kuma-button-primary">Middle2</button>
     <button class="kuma-button kuma-button-primary">Right</button>
</div>
````