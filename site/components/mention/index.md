# Mention

- category: Components
- chinese: At组件
- order: 9
- subtype: Form Control

---

编辑框内at任何对象

## API

### Mention

* formatter(arr): format the data form source.
* panelFormatter(obj): customize the panel display.
* onChange(e, value): onChange事件。

### TinymceMention

* formatter(arr): format the data form source.
* panelFormatter(obj): customize the panel display.
* mentionFormatter(obj): customize the insert content with this function.
* onChange(e, value): Callback invoked when the editor's content has been changed.
* onAdd(display, originData): Callback invoked when a mention has been added.

### ContentEditableEditor

* mentionFormatter(obj): customize the insert content with this function.
* onChange(e, value): Callback invoked when the editor's content has been changed.
* onAdd(display, originData): Callback invoked when a mention has been added.

### TextareaEditor

* mentionFormatter(obj): customize the insert content with this function.
* onChange(e, value): Callback invoked when the editor's content has been changed.
* onAdd(display, originData): Callback invoked when a mention has been added.

### InputEditor

* mentionFormatter(obj): customize the insert content with this function.
* onChange(e, value): Callback invoked when the editor's content has been changed.
* onAdd(display, originData): Callback invoked when a mention has been added.


## props

### Mention

|name|Description|Type|Default|
|---|----|---|------|
| prefixCls | class prefix | string | kuma-mention |
| source | data source for mention content | array or function | [] |
| delay | debounce of the request to data source | number | 100 |
| matchRange | only match the string after delimiter which the length in this range | array | [2, 8] |
| formatter | format the data form source | function | |
| panelFormatter | customize the panel display | function | |
| onChange | trigger when editor content change | function(e, value) | |

### TinymceMention

|name|Description|Type|Default|
|---|----|---|------|
| prefixCls | class prefix | string | kuma-mention |
| source | data source for mention content | array or function | [] |
| delay | debounce of the request to data source | number | 100 |
| matchRange | only match the string after delimiter which the length in this range | array | [2, 8] |
| formatter | format the data form source | function | |
| panelFormatter | customize the panel display | function | |
| mentionFormatter | customize the insert content with this function | function | |
| onChange | trigger when editor content change | function(e, value) | |
| onAdd | Callback invoked when a mention has been added | function(display, originData) | |
| insertMode | `ELEMENT_NODE` will insert mention content with a button, `TEXT_NODE` will insert with a text node | string | `ELEMENT_NODE` or `TEXT_NODE` |


### ContentEditableEditor

|name|Description|Type|Default|
|---|----|---|------|
| prefixCls | class prefix | string | kuma-mention |
| width | editor's width | number | 200 |
| height | editor's height | number | 100 |
| placeholder | placeholder | string | '' |
| mentionFormatter | customize the insert content with this function | function | |
| onChange | Callback invoked when the editor's content has been changed | function(e, value) | |
| onAdd | Callback invoked when a mention has been added | function(display, originData) | |
| defaultValue | default values | string | |
| readOnly | can not edit | boolean | |
| delimiter | Defines the char sequence upon which to trigger querying the data source | string | '@' |


### TextareaEditor

|name|Description|Type|Default|
|---|----|---|------|
| prefixCls | class prefix | string | kuma-mention |
| width | editor's width | number | 200 |
| height | editor's height | number | 100 |
| placeholder | placeholder | string | '' |
| mentionFormatter | customize the insert content with this function | function | |
| onChange | Callback invoked when the editor's content has been changed | function(e, value) | |
| onAdd | Callback invoked when a mention has been added | function(display, originData) | |
| defaultValue | default values | string | |
| readOnly | can not edit | boolean | |
| delimiter | Defines the char sequence upon which to trigger querying the data source | string | '@' |

### InputEditor

|name|Description|Type|Default|
|---|----|---|------|
| prefixCls | class prefix | string | kuma-mention |
| width | editor's width | number | 200 |
| height | editor's height | number | 30 |
| placeholder | placeholder | string | '' |
| mentionFormatter | customize the insert content with this function | function | |
| onChange | Callback invoked when the editor's content has been changed | function(e, value) | |
| onAdd | Callback invoked when a mention has been added | function(display, originData) | |
| defaultValue | default values | string | |
| readOnly | can not edit | boolean | |
| delimiter | Defines the char sequence upon which to trigger querying the data source | string | '@' |
