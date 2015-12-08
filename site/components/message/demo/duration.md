# 消失时间

- order: 1

可以设置每个 Message 的自动消失时间。

---

````jsx

let Message = require('uxcore-message');
let Button = require('uxcore-button');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick(type) {
        Message[type]("这是一个 " + type, 10) // 设定 10s 后消失
    }

    render() {
        let me = this;
        return (
            <div className="demo1">
                <Button onClick={me.handleClick.bind(me, 'success')}>显示成功提示</Button>
                <Button onClick={me.handleClick.bind(me, 'info')}>显示普通提示</Button>
                <Button onClick={me.handleClick.bind(me, 'error')}>显示错误提示</Button>
                <Button onClick={me.handleClick.bind(me, 'loading')}>显示加载提示</Button>
            </div>
        );
    }
};
ReactDOM.render(
  <Demo />
, document.getElementById('components-message-demo-duration'));

/* JS END CSS START*/

````

````css
.demo1 .kuma-button + .kuma-button {
    margin-left: 20px
}
````