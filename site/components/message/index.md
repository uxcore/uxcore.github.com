# Message

- category: Components
- subtype: 交互提醒
- chinese: 全局提醒

---

## API

* Message.success(content, duration)
* Message.error(content, duration)
* Message.info(content, duration)
* Message.loading(content, duration)

| 参数 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|content|React.Element or String|required|-|提示的内容|
|duration|Number|optional|1.5|多长(秒)时间消失|

另外提供了一个全局方法用于配置 

```js
Message.config({
	className: 'xxx',  // 在 uxcore-kuma 样式基础上定制时使用
	prefixCls: 'xxx'  // 类名前缀，不想使用 uxcore-kuma 样式时使用
})
```





