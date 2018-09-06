# Message

- category: Components
- subtype: Presentation
- chinese: 全局提醒

---

## API

* Message.success(content, duration, onClose)
* Message.error(content, duration, onClose)
* Message.info(content, duration, onClose)
* Message.loading(content, duration, onClose)
* Message.mask_loading(content, duration, onClose) // 带遮罩全局的 loading，防止重复点击提交，duration=0代表不会消失，必须使用Message.clear()清除
* Message.clear() // 清除所有的 message。

### 也可以这样进行传参

```javascript
Message.success({
	content: 'xxx',
	duration: 1.5,
	onClose: () => {}
})
```


| 参数 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|content|React.Element or String|required|-|提示的内容|
|duration|Number|optional|1.5|多长(秒)时间消失|
|getContainer|function|optional| - | 为 message 指定要渲染的容器 |

另外提供了一个全局方法用于配置

```js
Message.config({
  multipleInstance: true,  // 是否允许同时展示多个 message, 默认为 true
	className: 'xxx',  // 在 uxcore-kuma 样式基础上定制时使用
	prefixCls: 'xxx',  // 类名前缀，不想使用 uxcore-kuma 样式时使用
})
```





