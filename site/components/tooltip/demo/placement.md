# 位置

- order: 1

位置有四个方向。

---

````jsx
var Tooltip = require('uxcore-tooltip');
var text = <span>提示文字</span>;

ReactDOM.render(
  <div>
    <Tooltip placement="left" overlay={text} trigger={['click']}>
      <a href="#">左边左边</a>
    </Tooltip>
    <Tooltip placement="right" overlay={text} trigger={['click']}>
      <a href="#">右边右边</a>
    </Tooltip>
    <Tooltip placement="top" overlay={text} trigger={['click']}>
      <a href="#">上边上边</a>
    </Tooltip>
    <Tooltip placement="bottom" overlay={text} trigger={['click']}>
      <a href="#">下边下边</a>
    </Tooltip>
  </div>
, document.getElementById('components-tooltip-demo-placement'));
````

<style>
#components-tooltip-demo-placement a {
  margin-right: 1em;
}
</style>
