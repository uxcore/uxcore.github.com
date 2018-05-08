# 黑色

- order: 2

黑色版本

---

````jsx


import { Tooltip } from 'uxcore';
import { Button } from 'uxcore';

class Demo extends React.Component {
  render() {
    const overlay = <div>提示文字</div>;
    return (
      <div className="demo">
        <div className="container">
          <div className="top">
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="topLeft" trigger={['click']}>
              <Button size="small" type="outline">上左</Button>
            </Tooltip>
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="top" trigger={['click']}>
              <Button style={{ marginLeft: 10 }} size="small" type="outline">上边</Button>
            </Tooltip>
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="topRight" trigger={['click']}>
              <Button style={{ marginLeft: 10 }} size="small" type="outline">上右</Button>
            </Tooltip>
          </div>
          <div className="bottom">
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="bottomLeft" trigger={['click']}>
              <Button size="small" type="outline">下左</Button>
            </Tooltip>
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="bottom" trigger={['click']}>
              <Button style={{ marginLeft: 10 }} size="small" type="outline">下边</Button>
            </Tooltip>
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="bottomRight" trigger={['click']}>
              <Button style={{ marginLeft: 10 }} size="small" type="outline">下右</Button>
            </Tooltip>
          </div>
          <div className="left">
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="leftTop" trigger={['click']}>
              <Button size="small" type="outline">左上</Button>
            </Tooltip>
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="left" trigger={['click']}>
              <Button style={{ marginTop: 10 }} size="small" type="outline">左边</Button>
            </Tooltip>
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="leftBottom" trigger={['click']}>
              <Button style={{ marginTop: 10 }} size="small" type="outline">左下</Button>
            </Tooltip>
          </div>
          <div className="right">
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="rightTop" trigger={['click']}>
              <Button size="small" type="outline">右上</Button>
            </Tooltip>
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="right" trigger={['click']}>
              <Button style={{ marginTop: 10 }} size="small" type="outline">右边</Button>
            </Tooltip>
            <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="rightBottom" trigger={['click']}>
              <Button style={{ marginTop: 10 }} size="small" type="outline">右下</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-tooltip-demo-black'));

/* JS END CSS START */
````
````css
.demo {
  padding: 0;
}
.demo .container {
  height: 170px;
  width: 320px;
  position: relative;
}
.demo .container .top {
  position: absolute;
  top: 0;
  left: 80px;
}
.demo .container .bottom {
  position: absolute;
  bottom: 0;
  left: 80px;
}
.demo .container .left,
.demo .container .right {
  width: 58px;
  position: absolute;
}
.demo .container .left {
  left: 0;
  text-align: left;
  top: 35px;
}
.demo .container .right {
  right: 0;
  text-align: right;
  top: 35px;
}
````