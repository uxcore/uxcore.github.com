# Card

- order: 8
- category: CSS
- chinese:　卡片面板

---

## 卡片面板

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
