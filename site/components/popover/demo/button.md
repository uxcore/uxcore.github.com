# 内置按钮

- order: 2

有时你可能希望气泡内有确定取消的按钮可以关闭气泡，这个例子对应这种场景。

---

````jsx
let Button = require('uxcore-button');
let Popover = require('uxcore-popover');

class HoverDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleOk() {
        console.log('ok')
    }

    handleCancel() {
        console.log('cancel')
    }

    render() {
        let me = this;
        let overlay = <div>
            <div className="demoContent">
                <i className="kuma-icon kuma-icon-information"></i>
                <span>这是一个气泡弹窗</span>
            </div>
          </div>;
        return (
            <div>
                <Popover title="这是标题，可以隐藏" overlay={overlay} placement="top" trigger="click" showButton={true}>
                    <Button>点击弹出</Button>
                </Popover>
            </div>
        );
    }
};

ReactDOM.render(
	<HoverDemo />,
  	document.getElementById('components-popover-demo-button')
);
````

````css
.kuma-popover-wrap + .kuma-popover-wrap {
  margin-left: 20px;
}
.kuma-popover {
  width: 280px;
}
.demoContent {
  height: 60px;
  line-height: 60px;
  font-size: 14px;
}
.demoContent .kuma-icon {
  font-size: 18px;
  color: #ff7e29;
  margin-right: 10px;
  vertical-align: middle;
}
.demoButton .kuma-button + .kuma-button {
  margin-left: 10px;
}
````
