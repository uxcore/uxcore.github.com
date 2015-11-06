点击触发
========

-	order: 2

点击触发

---

````jsx
const Dropdown = require('uxcore-dropdown');
const Menu = require('uxcore-menu');

var menu = <Menu>
  <Menu.Item>
    <a target="_blank" href="http://www.alipay.com/">第一个菜单项</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" href="http://www.taobao.com/">第二个菜单项</a>
  </Menu.Item>
  <Menu.Item>
    <a target="_blank" href="http://www.tmall.com/">第三个菜单项</a>
  </Menu.Item>
</Menu>;

ReactDOM.render(
    <Dropdown overlay={menu} trigger={["click"]}>
        <button className="kuma-button kuma-button-sblue">点击触发</button>
    </Dropdown>,
    document.getElementById('components-dropdown-demo-click')
);
````
