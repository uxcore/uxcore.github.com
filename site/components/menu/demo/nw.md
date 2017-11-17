# 无边框的样式

- order: 4

垂直内嵌菜单的另一种样式，通过设置类名 kuma-menu-none-border 来实现无边框的样式。

---

````jsx
const Menu = require('uxcore-menu');
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

function handleClick(e) {
  console.log('click', e);
}

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '1',
    };
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
			                                                                  <Menu onClick={this.handleClick.bind(this)}
  style={{ width: 240 }}
  className="kuma-menu-none-border"
  defaultOpenKeys={['sub1']}
  selectedKeys={[this.state.current]}
  mode="inline"
                                                               >
  <SubMenu key="sub1" title={<span><i className="kuma-icon kuma-icon-email" /><span>导航一</span></span>}>
    <Menu.Item key="1">选项1</Menu.Item>
    <Menu.Item key="2">选项2</Menu.Item>
    <Menu.Item key="3">选项3</Menu.Item>
    <Menu.Item key="4">选项4</Menu.Item>
  </SubMenu>
  <SubMenu key="sub2" title={<span><i className="kuma-icon kuma-icon-wangwang" /><span>导航二</span></span>}>
    <Menu.Item key="5">选项5</Menu.Item>
    <Menu.Item key="6">选项6</Menu.Item>
    <SubMenu key="sub3" title="三级导航">
      <Menu.Item key="7">选项7</Menu.Item>
      <Menu.Item key="8">选项8</Menu.Item>
    </SubMenu>
  </SubMenu>
  <SubMenu key="sub4" title={<span><i className="kuma-icon kuma-icon-boss" /><span>导航三</span></span>}>
    <Menu.Item key="9">选项9</Menu.Item>
    <Menu.Item key="10">选项10</Menu.Item>
    <Menu.Item key="11">选项11</Menu.Item>
    <Menu.Item key="12">选项12</Menu.Item>
  </SubMenu>
</Menu>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-menu-demo-nw'));
````
