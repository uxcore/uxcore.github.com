#  操作项

- order: 5

加入一些对树节点的一些操作

---

````jsx
import { Tree, Menu, Icon } from 'uxcore';

const { DropdownTreeNode } = Tree;

const treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '0-0-0-2', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0' },
    { title: '0-1-0-1', key: '0-1-0-1' },
    { title: '0-1-0-2', key: '0-1-0-2' },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];

const menu = (
  <Menu>
    <Menu.Item>
      添加
    </Menu.Item>
    <Menu.Item>
      删除
    </Menu.Item>
    <Menu.Item>
      重命名
    </Menu.Item>
  </Menu>
);

const loopDropDown = data => data.map((item) => {
  if (item.children) {
    return (
      <DropdownTreeNode
        key={item.key}
        title={item.title}
        dropDownTitle={item.dropDownTitle}
        onDropDownClick={e => e}
        dropDownOverlay={menu}
        dropDownable
      >
        {loopDropDown(item.children)}
      </DropdownTreeNode>
    );
  }
  return <DropdownTreeNode key={item.key} title={item.title} icon={<Icon name="right" />} dropDownable dropDownTitle={item.dropDownTitle} onDropDownClick={e => e} />;
});


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData,
    };
  }
  render() {
    return (
      <div style={{ width: 400 }}>
        <Tree>
          {loopDropDown(this.state.treeData)}
        </Tree>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  	document.getElementById('components-tree-demo-actions')
);
````
