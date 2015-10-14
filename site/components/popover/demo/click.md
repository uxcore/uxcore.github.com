#  点击弹出

- order: 1

点击弹出。

---

````jsx
import Button from 'uxcore-button';
import Popover from 'uxcore-popover';

class ClickDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let overlay = <div>
            <div className="demoContent">
                <i className="kuma-icon kuma-icon-information"></i>
                <span>你确认要删除此项数据吗？</span>
            </div>
            <div className="demoButton">
                <Button size="medium">确定</Button>
                <Button size="medium" color="orange">取消</Button>
            </div>
          </div>;
        return (
            <Popover title="测试" overlay={overlay} placement="right" trigger="click">
                <Button>从右弹出</Button>
            </Popover>v>
        );
    }
};

ReactDOM.render(
	<ClickDemo />,
  	document.getElementById('components-popover-demo-click')
);
````
