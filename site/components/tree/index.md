# Tree

- category: Components
- chinese: 树形控件
- order: 10
- subtype: Navigation

---

类似ztree的树组件

## API

### Tree props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional css class of root dom node | String | '' |
|prefixCls | prefix class | String | '' |
|showLine | whether show line | bool | true |
|showIcon | whether show icon | bool | true |
|selectable | whether can be selected | bool | true |
|multiple | whether multiple select | bool | false |
|checkable | whether support checked | bool/React Node | false |
|defaultExpandAll | expand all treeNodes | bool | false |
|defaultExpandedKeys | expand specific treeNodes | String[] | - |
|expandedKeys | Controlled expand specific treeNodes | String[] | - |
|autoExpandParent | whether auto expand parent treeNodes | bool | true |
|checkedKeys | Controlled checked treeNodes(After setting, defaultCheckedKeys will not work) | String[] | [] |
|defaultCheckedKeys | default checked treeNodes | String[] | [] |
|selectedKeys | Controlled selected treeNodes(After setting, defaultSelectedKeys will not work) | String[] | [] |
|defaultSelectedKeys | default selected treeNodes | String[] | [] |
|onExpand | fire on treeNode expand or not | function(node, expanded, expandedKeys) | - |
|onCheck | click the treeNode/checkbox to fire | function(checkedKeys, e:{checked: bool, checkedNodes, node, event}) | - |
|onSelect | click the treeNode to fire | function(selectedKeys, e:{selected: bool, selectedNodes, node, event}) | - |
|filterTreeNode | filter some treeNodes as you need. it should return true | function(node) | - |
|loadData | load data asynchronously and the return value should be a promise | function(node) | - |
|onRightClick | select current treeNode and show customized contextmenu | function({event,node}) | - |
|onMouseEnter | call when mouse enter a treeNode | function({event,node}) | - |
|onMouseLeave | call when mouse leave a treeNode | function({event,node}) | - |
|draggable | whether can drag treeNode. (drag events are not supported in Internet Explorer 8 and earlier versions or Safari 5.1 and earlier versions.) | bool | false |
|onDragStart | it execs when fire the tree's dragstart event | function({event,node}) | - |
|onDragEnter | it execs when fire the tree's dragenter event | function({event,node,expandedKeys}) | - |
|onDragOver | it execs when fire the tree's dragover event | function({event,node}) | - |
|onDragLeave | it execs when fire the tree's dragleave event | function({event,node}) | - |
|onDrop | it execs when fire the tree's drop event | function({event, node, dragNode, dragNodesKeys}) | - |

### TreeNode props
> note: if you have a lot of TreeNode, like more than 1000,   
> make the parent node is collapsed by default, will obvious effect, very fast.  
> Because the children hide TreeNode will not insert into dom.

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional class to treeNode | String | '' |
|disabled | whether disabled the treeNode | bool | false |
|disableCheckbox | whether disable the treeNode' checkbox | bool | false |
|title | tree/subTree's title | String/node | '---' |
|key | it's used with tree props's (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. you'd better to set it, and it must be unique in the tree's all treeNodes | String | treeNode's position |
|isLeaf | whether it's leaf node | bool | false |
