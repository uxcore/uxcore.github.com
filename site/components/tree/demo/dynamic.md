#  动态加载

- order: 4

点击展开节点，动态加载数据。

---

````jsx
import { Tree } from 'uxcore';

const TreeNode = Tree.TreeNode;

const generateTreeNodes = (treeNode) => {
  const arr = [];
  const key = treeNode.props.eventKey;
  for (let i = 0; i < 3; i++) {
    arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
  }
  return arr;
}


const getNewTreeData = (treeData, curKey, child, level) => {
  const loop = (data) => {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach((item) => {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
};

const setLeaf = (treeData, curKey, level) => {
  const loopLeaf = (data, lev) => {
    const l = lev - 1;
    data.forEach((item) => {
      if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
        curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
};

const loopLoading = (data) => {
  return data.map((item) => {
    if (item.children) {
      return <TreeNode title={item.name} key={item.key}>{loopLoading(item.children)}</TreeNode>;
    }
    return (
      <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf}
        disabled={item.key === '0-0-0'}
      />
    );
  });
};



class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [
        { name: 'pNode 01', key: '0-0' },
        { name: 'pNode 02', key: '0-1' },
        { name: 'pNode 03', key: '0-2', isLeaf: true },
      ],
      checkedKeys: ['0-0'],
    }
  }

  onLoadData = (treeNode) => {
    console.log('load data...');
    return new Promise((resolve) => {
      setTimeout(() => {
        const treeData = [...this.state.treeData];
        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
        this.setState({ treeData });
        resolve();
      }, 500);
    });
  }

  render() {
    
    const treeNodes = loopLoading(this.state.treeData);

    return (
      <div>
        <Tree
          checkable 
          defaultCheckedKeys={this.state.checkedKeys}
          loadData={this.onLoadData}
        >
          {treeNodes}
        </Tree>
      </div>
    )
  }
}

ReactDOM.render(
  <Demo />,
  	document.getElementById('components-tree-demo-dynamic')
);
````
