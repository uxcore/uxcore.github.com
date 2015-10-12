#  没有标题

- order: 2

没有标题。

---

````jsx
import Button from 'uxcore-button';
import Popover from 'uxcore-popover';

class NoTitleDemo extends React.Component {

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
            <Popover overlay={overlay} placement="right">
                <Button>从右弹出</Button>
            </Popover>
        );
    }
};

React.render(
	<NoTitleDemo />,
  	document.getElementById('components-popover-demo-notitle')
);
````
