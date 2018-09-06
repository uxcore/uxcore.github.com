# NoticeIcon

- category: Components
- chinese: 通知图标
- subtype: Presentation

---


## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|icon|string|optional|xiaoxitixingfull| 通知图标; http://uxco.re/components/icon/|
|dot|boolean|optional|false|是否显示通知数量；默认不展示数字，只有一个小红点|
|count|number|optional|-|通知的数量|
|overflowCount|number|optional|99|通知封顶的数字|
|trigger|string|optional|hover|trigger mode：'hover' or 'click'|
|title|string|optional|通知|通知标题|
|placement|string|optional|bottomRight|箭头位置|
|emptyIcon|string|optional|默认图标|其他可选：'access_restriction','acitve_empty','request_error','search_empty','unknown_error';http://uxco.re/components/icon/|
|emptyText|string|optional|暂无数据|占位文字|
|onVisibleChange|function|optional|fuction(visible)|显隐状态的回调
|topAction|React Element|optional|-|右上角操作|
|bottomAction|object \| render function|optional|-|支持默认\*和自定义形式|
|className|string|opitonal|-|添加在icon上的class|
|overlayClassName|string|opitonal|-|添加在Popover上的class|
|enablePopover|bool|optional|-|false|是否使用弹窗|
|onIconClick|function|optional|-|点击Icon触发的事件，但在trigger mode 是 'click' 且使用弹窗时不会触发|
|themeType|string|optional|'default'|其他可选: 'dark'|

\*
如果propTypes为object则使用默认样式渲染，object需按如下定义

```js
{
    text: string,
    action: function
}
```