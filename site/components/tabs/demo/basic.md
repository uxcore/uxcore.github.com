# 卡片式

- order: 1

---

````jsx
var Tabs = require('uxcore-tabs');
var TabPane = Tabs.TabPane;

ReactDOM.render(
  <Tabs defaultActiveKey="2">
      <TabPane tab="tab 1" key="1">选项卡一</TabPane>
      <TabPane tab="tab 2" key="2">选项卡二</TabPane>
      <TabPane tab="tab 3" key="3">选项卡三</TabPane>
  </Tabs>
, document.getElementById('components-tabs-demo-basic'));
````
