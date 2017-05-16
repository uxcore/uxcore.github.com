# Tag

- category: Components
- chinese: 标签
- order: 2
- subtype: Presentation

---


## Props

### Tag

|配置项|类型|必填|默认值|功能/备注|
|---|---|---|---|---|
|className|string|optional|''|额外的className|
|addTags|boolean|optional|true|是否可以新增tag|
|onAdd(tagName)|function|optional|noop|新增tag的回调,tagName为新增的标签名|
|locale|string|optional|'zh-cn'|语言，另可选'en-us', 'pl-pl'|


### TagItem

> 通过 Tag.Item 取得。

|配置项|类型|必填|默认值|功能/备注|
|---|---|---|---|---|
|className|string|optional|''|额外的className|
|tag|string|require|''|tag的值|
|type|string|optional| | 枚举值 `show`, `success`, `warning`, `info`, `danger` |
|count|number|optional|0|标签后面的数字|
|canAddCount|boolean|optional|false|是否可以增加数字|
|canDelete|boolean|optional|false|是否可以删除标签| 
|onClick(tagName)|function|optional|noop|点标签回调|
|maxDisplayCount|number|optional|99|最大显示数字|
|onAddCount(tagName)|function|optional|noop|点击增加数字的加号回调|
|onDelete(tagName, cb)|function|optional|noop|点击删除icon回调 注意手动调用cb，否则弹窗不会消失|
|confirmDeleteText|string|optional|''|确认删除文案，如果不填则直接触发onDelete回调|