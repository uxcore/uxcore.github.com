#  基本用法

- order: 0

基本用法。

---

````jsx
import Tree from 'uxcore-tree';
let TreeNode = Tree.TreeNode;

function handleSelect(e) {
  console.log(e.event, e.node, 'selected:', e.selected);
}

ReactDOM.render(
    <div>
        <Tree className="myCls" onSelect={handleSelect} defaultSelectedKeys={['0-1', '0-1-1']} multiple={true}
          defaultExpandAll={true} showLine={true}>
          <TreeNode title="parent 1" key="0-1">
            <TreeNode title="parent 1-0" key="0-1-1">
              <TreeNode title="leaf" />
              <TreeNode title="leaf" />
            </TreeNode>
            <TreeNode title="parent 1-1">
              <TreeNode title="leaf" />
            </TreeNode>
          </TreeNode>
        </Tree>
    </div>,
  	document.getElementById('components-tree-demo-basic')
);
````
