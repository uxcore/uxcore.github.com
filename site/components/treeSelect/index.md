# TreeSelect

- category: Components
- chinese: 树选择
- order: 2
- subtype: Form Control

---

树型选择控件

## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## API

### TreeSelect props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional css class of root dom node | String | '' |
|prefixCls | prefix class | String | 'uxcore-tree-select' |
|animation | dropdown animation name. only support slide-up now | String | '' |
|transitionName | dropdown css animation name | String | '' |
|choiceTransitionName | css animation name for selected items at multiple mode | String | '' |
|dropdownMatchSelectWidth | whether dropdown's with is same with select | bool | true |
|dropdownClassName | additional className applied to dropdown | String | - |
|dropdownStyle | additional style applied to dropdown | Object | {} |
|dropdownPopupAlign | specify alignment for dropdown | Object | - |
|notFoundContent | specify content to show when no result matches. | String | 'Not Found' |
|showSearch | whether show search input in single mode | bool | true |
|allowClear | whether allowClear | bool | false |
|maxTagTextLength | max tag text length to show | number | - |
|multiple | whether multiple select (true when enable treeCheckable) | bool | false |
|disabled | whether disabled select | bool | false |
|inputValue | if enable search, you can set default input's value, if set to null, auto clear input value when finish select/unselect operation | string/null | '' |
|defaultValue | initial selected treeNode(s) | same as value type | - |
|value | current selected treeNode(s). | normal: String/Array<String>. labelInValue: {value:String,label:React.Node}/Array<{value,label}>. treeCheckStrictly(halfChecked default false): {value:String,label:React.Node, halfChecked}/Array<{value,label,halfChecked}>. | - |
|labelInValue| whether to embed label in value, see above value type | Bool | false |
|onChange | called when select treeNode or input value change | function(value, label(null), extra) | - |
|onSelect | called when select treeNode | function(value, node, extra) | - |
|onSearch | called when input changed | function | - |
|showCheckedStrategy | `TreeSelect.SHOW_ALL`: show all checked treeNodes (Include parent treeNode). `TreeSelect.SHOW_PARENT`: show checked treeNodes (Just show parent treeNode). Default just show child. | enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD } | TreeSelect.SHOW_CHILD |
|treeIcon | show tree icon | bool | false |
|treeLine | show tree line | bool | false |
|treeDefaultExpandAll | default expand all treeNode | bool | false |
|treeCheckable | whether tree show checkbox (select callback will not fire) | bool | false |
|treeCheckStrictly | check node precisely, parent and children nodes are not associated| bool | false |
|filterTreeNode | whether filter treeNodes by input value. default filter by treeNode's treeNodeFilterProp prop's value | bool/Function(inputValue:string, treeNode:TreeNode) | Function |
|treeNodeFilterProp | which prop value of treeNode will be used for filter if filterTreeNode return true | String | 'value' |
|treeNodeLabelProp | which prop value of treeNode will render as content of select | String | 'title' |
|treeData | treeNodes data Array, if set it then you need not to construct children TreeNode. (value should be unique across the whole array) | array<{value,label,children, [disabled]}> | [] |
|treeDataSimpleMode | enable simple mode of treeData.(treeData should be like this: [{"id":1, "pId":0, "label":"test1"},...], `pId` is parent node's id) | bool/object{id:'id', pId:'pId', rootPId:null} | false |
|loadData | load data asynchronously | function(node) | - |

### TreeNode props
> note: you'd better to use `treeData` instead of using TreeNode.

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|disabled | disable treeNode | bool | false |
|key | it's value must be unique across the tree's all TreeNode, you must set it  | String | - |
|value | default as treeNodeFilterProp (be unique across the tree's all TreeNode) | String | '' |
|title | tree/subTree's title | String/element | '---' |
|isLeaf | whether it's leaf node | bool | false |