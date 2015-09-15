#  悬浮弹出

- order: 0

悬浮弹出。

---

````jsx
import {Button, ButtonGroup} from 'uxcore-button';
import Popover from 'uxcore-popover';

class HoverDemo extends React.Component {

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
            <div>
                <Popover title="测试" overlay={overlay} placement="top">
                    <Button>从上弹出</Button>
                </Popover>
                <Popover title="测试" overlay={overlay} placement="bottom">
                    <Button>从下弹出</Button>
                </Popover>
                <Popover title="测试" overlay={overlay} placement="left">
                    <Button>从左弹出</Button>
                </Popover>
                <Popover title="测试" overlay={overlay} placement="right">
                    <Button>从右弹出</Button>
                </Popover>
            </div>
        );
    }
};

React.render(
	<HoverDemo />,
  	document.getElementById('components-popover-demo-hover')
);
````
