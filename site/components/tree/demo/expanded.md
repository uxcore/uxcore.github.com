#  expanded

- order: 1

expanded。

---

````jsx
import Tree from 'uxcore-tree';
let TreeNode = Tree.TreeNode;

ReactDOM.render(
	<div>
        <Tree defaultExpandAll={false}>
          <TreeNode title="parent 1" key="p1">
            <TreeNode key="p10" title="leaf"/>
            <TreeNode title="parent 1-1" key="p11">
              <TreeNode title="parent 2-1" key="p21">
                <TreeNode title="leaf"/>
                <TreeNode title="leaf"/>
              </TreeNode>
              <TreeNode key="p22" title="leaf"/>
            </TreeNode>
          </TreeNode>
        </Tree>
	</div>,
  	document.getElementById('components-tree-demo-expanded')
);
````
