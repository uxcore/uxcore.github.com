# Layout

- order: 1
- category: CSS
- chinese: 布局

---
## 基本布局
基本布局包含三种宽度，分别为`kuma-container-1000`、`kuma-container-1180`、`kuma-container-full`
````html
<style>
.layout-demo-container {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #DEDEDE;
}
</style>
<div class="kuma-container-1000 layout-demo-container">
我是kuma-layout-1000
</div>
<div class="kuma-container-1180 layout-demo-container">
我是kuma-layout-1180
</div>
<div class="kuma-container-full layout-demo-container">
我是kuma-layout-full
</div>
````

## 栅格布局

每个栅格都由 `kuma-row` 包裹
`kuma-row` 被包含在 `kuma-container`(固定宽度) 或 `kuma-container-fluid`(自适应宽度) 中以便于对齐

### example: Stacked-to-horizontal

````html
<style>
.kuma-row [class^=col-] {
  padding: 5px;
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
}
</style>
<div class="kuma-row">
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
  <div class="col-md-1">.col-md-1</div>
</div>
<div class="kuma-row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="kuma-row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4">.col-md-4</div>
</div>
<div class="kuma-row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
````

### example: Mobile and desktop
````html
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="kuma-row">
  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>

<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="kuma-row">
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>

<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="kuma-row">
  <div class="col-xs-6">.col-xs-6</div>
  <div class="col-xs-6">.col-xs-6</div>
</div>
````
