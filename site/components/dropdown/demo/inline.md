无边框
======

- order: 5

无边框。

---

````jsx
const Dropdown = require('uxcore-dropdown');
const Menu = require('uxcore-menu');

const menu = (<Menu>
  <Menu.Item>
    <a target="_blank" href="http://www.alipay.com/">第一个菜单项</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" href="http://www.taobao.com/">第二个菜单项</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" href="http://www.tmall.com/">第三个菜单项</a>
  </Menu.Item>
</Menu>);

class InlineDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    let inlineDropdownCls = 'kuma-dropdown-inline-wrap';
    if (this.state.open) {
      inlineDropdownCls += ' kuma-dropdown-inline-wrap-open';
    }
    return (
      <Dropdown overlay={menu} overlayClassName="kuma-dropdown-inline" onVisibleChange={function (open) { this.setState({ open }); }.bind(this)}>
        <div className={inlineDropdownCls}>
          <i className="kuma-icon kuma-icon-set" />
        </div>
      </Dropdown>
    );
  }
}

ReactDOM.render(
  <InlineDemo />,
    document.getElementById('components-dropdown-demo-inline')
);
````
