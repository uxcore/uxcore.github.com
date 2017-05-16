#  悬浮弹出

- order: 0

悬浮弹出。

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

    render() {
        let overlay = <div>
            <div className="demoContent">
                <i className="kuma-icon kuma-icon-information"></i>
                <span>这是一个气泡弹窗</span>
            </div>
          </div>;
        return (
            <div style={{ marginLeft: 150 }}>
          <div style={{ marginLeft: 78 }}>
            <Popover placement="topLeft" title={'上左'} overlay={overlay}>
              <Button type="outline">上左</Button>
            </Popover>
            <Popover placement="top" title={'上边'} overlay={overlay}>
              <Button type="outline" style={{marginLeft: 10}}>上边</Button>
            </Popover>
            <Popover placement="topRight" title={'上右'} overlay={overlay}>
              <Button type="outline" style={{marginLeft: 10}}>上右</Button>
            </Popover>
          </div>
          <div style={{ width: 78, float: 'left' }}>
            <Popover placement="leftTop" title={'左上'} overlay={overlay}>
              <Button type="outline">左上</Button>
            </Popover>
            <Popover placement="left" title={'左边'} overlay={overlay}>
              <Button type="outline" style={{marginTop: 5}}>左边</Button>
            </Popover>
            <Popover placement="leftBottom" title={'左下'} overlay={overlay}>
              <Button type="outline" style={{marginTop: 5}}>左下</Button>
            </Popover>
          </div>
          <div style={{ width: 78, marginLeft: 310 }}>
            <Popover placement="rightTop" title={'右上'} overlay={overlay}>
              <Button type="outline" >右上</Button>
            </Popover>
            <Popover placement="right" title={'右边'} overlay={overlay}>
              <Button type="outline" style={{marginTop: 5}}>右边</Button>
            </Popover>
            <Popover placement="rightBottom" title={'右下'} overlay={overlay}>
              <Button type="outline" style={{marginTop: 5}}>右下</Button>
            </Popover>
          </div>
          <div style={{ marginLeft: 78, clear: 'both' }}>
            <Popover placement="bottomLeft" title={'下左'} overlay={overlay}>
              <Button type="outline">下左</Button>
            </Popover>
            <Popover placement="bottom" title={'下边'} overlay={overlay}>
              <Button type="outline" style={{marginLeft: 10}}>下边</Button>
            </Popover>
            <Popover placement="bottomRight" title={'下右'} overlay={overlay}>
              <Button type="outline" style={{marginLeft: 10}}>下右</Button>
            </Popover>
          </div>
        </div>
        );
    }
};

ReactDOM.render(
	<HoverDemo />,
  	document.getElementById('components-popover-demo-hover')
);
````

````css
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
