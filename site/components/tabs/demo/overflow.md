# 溢出

- order: 6

开放型样式

---

````jsx
var Tabs = require('uxcore-tabs');
var TabPane = Tabs.TabPane;

ReactDOM.render(
  <div style={{ width: '600px' }}>
    <Tabs defaultActiveKey="2" type="open">
        <TabPane tab="tab 1" key="1">选项卡一</TabPane>
        <TabPane tab="tab 2" key="2">选项卡二</TabPane>
        <TabPane tab="tab 3" key="3">选项卡三</TabPane>
        <TabPane tab="tab 4" key="4">选项卡四</TabPane>
        <TabPane tab="tab 5" key="5">选项卡五</TabPane>
        <TabPane tab="tab 6" key="6">选项卡六</TabPane>
        <TabPane tab="tab 7" key="7">选项卡七</TabPane>
        <TabPane tab="tab 8" key="8">选项卡八</TabPane>
        <TabPane tab="tab 9" key="9">选项卡九</TabPane>
        <TabPane tab="tab 10" key="10">选项卡十</TabPane>
        <TabPane tab="tab 11" key="11">选项卡十一</TabPane>
        <TabPane tab="tab 12" key="12">选项卡十二</TabPane>
    </Tabs>
  </div>
, document.getElementById('components-tabs-demo-overflow'));
````
