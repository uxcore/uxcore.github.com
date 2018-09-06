# Transfer

- category: Components
- chinese: 双栏选择框
- order: 11
- subtype: Form Control

---

## API

* selectItems(arr): 使对应 value 的变成高亮状态 (selected)。    
参数：  
    * arr `Array` 一个由 value 组成的数组。

## Props

|参数|类型|必需|默认值|说明|
|---|----|---|----|---|
|data|array|required|-|用于初始化 transfer 的数据，格式见 Usage，其中 name 和 value 字段必有|
|disabled|boolean|optional|false|是否启用 disable 模式|
|showSearch|boolean|optional|true|是否显示搜索条|
|searchPlaceholder|string|optional|定位输入内容||
|leftTitle|string|optional|'未选中的'|左侧标题|
|rightTitle|string|optional|'已选中的'|右侧标题|
|onChange|func|optional|noop|选中情况变化时触发，返回选中和未选中的项|
