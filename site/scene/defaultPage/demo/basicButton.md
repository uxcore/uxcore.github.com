# 缺省页 (带按钮)

- order: 1

点击查看代码

---

````jsx
import Button from 'uxcore-button';
import EmptyData from 'uxcore-empty-data';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.onMainClick = this.onMainClick.bind(this);
  }
  onMainClick(e) {
    alert(e.target.innerText);
  }
  onSecondaryClick(e) {
    alert(e.target.innerText);
  }
  render() {
    return (
      <div className="fillErrorDemo">
        <div className="errorLeft">
          <EmptyData style={{ width: '220px', height: '220px' }} type="large" />
        </div>
        <div className="errorRight">
          <div className="tips">
            <p className="tipsTitle">页面出错了</p>
            <p className="errorTips">您访问的页面不存在，请确认链接无误后再试。紧急情况下可前往<a href="https://go.alibaba-inc.com">https://go.alibaba-inc.com</a>寻求帮助</p>
            <div className="errorButtons">
              <Button type="primary" onClick={this.onMainClick}>一级按钮</Button>
              <Button type="secondary" onClick={this.onSecondaryClick}>次要按钮</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('scene-defaultpage-demo-basicbutton')
);

/* JS END CSS START*/
````

````css
#scene-defaultpage-demo-basic {
  position:relative;
  height:500px;
}
.fillErrorDemo {
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:684px;
    height:220px;
}
.fillErrorDemo .errorLeft {
  float:left;
  width:220px;
  height:220px;
}
.fillErrorDemo .errorLeft .kuma-empty-data-icon{
  height:220px;
  width:220px;
}
.fillErrorDemo .errorLeft .kuma-empty-data-content{
  display:none;
}
.fillErrorDemo .errorRight {
  float:right;
  display:table;
  width:400px;
  height:100%;

}
.fillErrorDemo .errorRight .tips{
  display:table-cell;
  vertical-align:middle;
  margin-right:64px;
  width:400px;
}
.fillErrorDemo .errorRight .tipsTitle {
  margin-bottom:28px;
  line-height:32px;
  font-size:32px;
  color:rgba(31,56,88,1);
  letter-spacing:0;
}
.fillErrorDemo .errorRight .errorRips{
  line-height:22px;
  font-size:14px;
  letter-spacing:0;
  color: rgba(-2147483648,26,-2147483648,0.60);
}
.fillErrorDemo .errorRight .errorButtons{
  margin-top:28px;
}
.fillErrorDemo .errorButtons button{
  margin-right:12px;
}
.kuma-button span {
  display:inline-block;
  line-height:12px;
}
````
