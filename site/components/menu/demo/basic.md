# 顶部导航

- order: 0

水平的顶部导航菜单。

---

````jsx
var Menu = require('uxcore-menu');
var SubMenu = Menu.SubMenu;
var MenuItem = Menu.Item;
window.Menu = Menu;

function handleClick(e) {
    console.log('click', e);
}

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'mail'
        };
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <i className="kuma-icon kuma-icon-email"></i>导航一
                </Menu.Item>
                <Menu.Item key="app">
                    <i className="kuma-icon kuma-icon-wangwang"></i>导航二
                </Menu.Item>
                <SubMenu title={<span><i className="kuma-icon kuma-icon-setting"></i>导航 - 子菜单</span>}>
                    <Menu.Item key="setting:1">选项1</Menu.Item>
                    <Menu.Item key="setting:2">选项2</Menu.Item>
                    <Menu.Item key="setting:3">选项3</Menu.Item>
                    <Menu.Item key="setting:4">选项4</Menu.Item>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="#" target="_blank">导航四 - 链接</a>
                </Menu.Item>
            </Menu>
        );
    }
}

ReactDOM.render(
    <Demo />
, document.getElementById('components-menu-demo-basic'));
````
