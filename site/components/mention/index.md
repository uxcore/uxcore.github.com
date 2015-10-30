# Mention

- category: Components
- chinese: At组件
- order: 9
- subtype: 其它

---

编辑框内at任何对象

## API

* formatter(arr): 对从数据源取到的数据进行处理，返回处理后的结果数组。
* panelFormatter(obj): 自定义选择菜单的结构，返回html。
* mentionFormatter(obj): 自定义插入编辑器中的文本，返回字符串。
* onChange(e, value): onChange事件。

## props

|参数|说明|类型|默认值|
|---|----|---|------|
| prefixCls | class prefix | string | kuma-mention |
| width | editor's width | number | 200 |
| height | editor's height | number | 100 |
| source | data source for mention content | array or function | [] |
| delay | debounce of the request to data source | number | 100 |
| matchRange | only match the string after delimiter which the length in this range | array | [2, 8] |
| formatter | format the data form source | function | |
| panelFormatter | customize whats's in your select panel with this function | function | |
| mentionFormatter | customize what's in your mention node with this function | function | |
| onChange | trigger when editor content change | function | |
