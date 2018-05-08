# 缺省页

- order: 0

点击查看代码

---

````jsx
import { EmptyData } from 'uxcore';

class Demo extends React.Component {
  render() {
    return (
      <div className="fillErrorDemo">
        <div className="errorLeft">
          <EmptyData style={{ width: '220px', height: '220px' }} type="large" />
        </div>
        <div className="errorRight">
          <div className="tips">
            <p className="tipsTitle">哎呀！导出失败了</p>
            <p className="tipsContent">请亲尝试重新导出一次哦～</p>
            <p className="errorTips">您访问的页面不存在，请确认链接无误后再试。紧急情况下可前往<a>https://go.alibaba-inc.com</a>寻求帮助</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('scene-defaultpage-demo-basic')
);

/* JS END CSS START*/
````

````css
#scene-defaultpage-demo-basicbutton {
  position: relative;
  height: 500px;
}
.fillErrorDemo {
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 684px;
    height: 220px;
    font-family: 'PingFangSC-Medium';
}
.fillErrorDemo .errorLeft {
  float: left;
  width: 220px;
  height: 220px;
}
.fillErrorDemo .errorLeft .kuma-empty-data-icon{
  height: 220px;
  width: 220px;
}
.fillErrorDemo .errorLeft .kuma-empty-data-content{
  display: none;
}
.fillErrorDemo .errorRight {
  float: right;
  display: table;
  width: 400px;
  height: 100%;

}
.fillErrorDemo .errorRight .tips{
  display: table-cell;
  vertical-align: middle;
  margin-right: 64px;
  width: 400px;
}
.fillErrorDemo .errorRight .tipsTitle {
  margin-bottom: 28px;
  line-height: 32px;
  font-size: 32px;
  color:rgba(31,56,88,0.8);
  letter-spacing: 0;
}
.fillErrorDemo .errorRight .tipsContent,
.fillErrorDemo .errorRight .errorTips{
  line-height: 22px;
  font-size: 14px;
  letter-spacing: 0;
}
.fillErrorDemo .errorRight .errorTips {
  color: rgba(-2147483648,26,-2147483648,0.60);
}
.fillErrorDemo .errorRight .tipsContent{
    margin-bottom: 8px;
    color:rgba(31,56,88,0.6)
}

````
