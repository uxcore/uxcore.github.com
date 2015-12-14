#  checked

- order: 2

受控组件，外部传入参数，控制树对象节点

---

````jsx
import Tree from 'uxcore-tree';
let TreeNode = Tree.TreeNode;

class CheckedDemo extends React.Component {
    constructor(props) {
      super(props);
      ['handleClick', 'handleCheck', 'handleSelect'].forEach((m)=> {
        this[m] = this[m].bind(this);
      });
      this.state = {
        checkedKeys: [],
        selectedKeys: []
      };
    }
    handleClick() {
      this.setState({
        checkedKeys: ['p11'],
        selectedKeys: ['p21', 'p11']
      });
    }
    handleCheck(info) {
      console.log('check: ', info);
      this.setState({
        checkedKeys: ['p21'],
        selectedKeys: ['p1', 'p21']
      });
    }
    handleSelect(info) {
      console.log('selected: ', info);
      this.setState({
        checkedKeys: ['p21'],
        selectedKeys: ['p21']
      });
    }
    render() {
      return <div>
        <div>
          <h2>checked</h2>
          <Tree showLine={true} defaultExpandAll={true} checkable={true}
                onCheck={this.handleCheck} defaultCheckedKeys={['p1', 'p22']} checkedKeys={this.state.checkedKeys}
                onSelect={this.handleSelect} defaultSelectedKeys={['p11']} selectedKeys={this.state.selectedKeys} multiple>
            <TreeNode title="parent 1" key="p1">
              <TreeNode key="p10" title="leaf"/>
              <TreeNode title="parent 1-1" key="p11">
                <TreeNode title="parent 2-1" key="p21">
                  <TreeNode title="test" />
                  <TreeNode title={<span>sss</span>}/>
                </TreeNode>
                <TreeNode key="p22" title="leaf"/>
              </TreeNode>
            </TreeNode>
            <TreeNode key="p12" title="leaf"/>
          </Tree>
        </div>
        <button className="kuma-button kuma-button-sm" onClick={this.handleClick}>check sth</button>
      </div>
    }
}

ReactDOM.render(
	<CheckedDemo />,
  	document.getElementById('components-tree-demo-checked')
);
````
