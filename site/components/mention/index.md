# Mention

- category: Components
- chinese: At组件
- order: 9

---

编辑框内at任何对象

## API

|参数|说明|类型|默认值|
|---|----|---|------|
| prefixCls | class prefix | string | kuma-mention |
| width | editor's width | number | 200 |
| height | editor's height | number | 100 |
| source | data source for mention content | array or function | [] |
| delay | debounce of the request to data source | number | 100 |
| matchRange | only match the string after delimiter which the length in this range | array | [2, 8] |
| formatter | format the data form source | function | noop |
| panelFormatter | customize whats's in your select panel with this function | function | noop |
| mentionFormatter | customize what's in your mention node with this function | function | noop |
