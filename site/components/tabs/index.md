# Tabs

- category: Components
- chinese: 选项卡
- order: 5

---

```js
var Tabs = require('uxcore-tabs');
var TabPane = Tabs.TabPane;

var callback = function(key){

}

React.render(
  (
    <Tabs defaultActiveKey="2" onChange={callback}>
      <TabPane tab='tab 1' key="1">first</TabPane>
      <TabPane tab='tab 2' key="2">second</TabPane>
      <TabPane tab='tab 3' key="3">third</TabPane>
    </Tabs>
  ),
  document.getElementById('t2'));
```

## development
```
npm install
npm run dev
// nav to http://localhost:9090/example/
```

## API
### Tabs
|name|type|default|description|
|----|----|-------|-----------|
|activeKey |String| |current active tabPanel's key|
|tabPosition|	String|	|	tab nav 's position. one of ['left','right','top','bottom']|
|animation|	String|	|	tabPane's animation. current only support slide-horizontal in assets/index.css|
|transitionName|	Object|	|	specify backward and forward transitionName. such as ```js { backward:'rc-tabs-slide-horizontal-backward', forward:'rc-tabs-slide-horizontal-forward' } ```|
|defaultActiveKey|	String|	first active tabPanel's key|	initial active tabPanel's key if activeKey is absent|
|onChange|	Function|(key)		|called when tabPanel is changed|
|onTabClick|	Function|(key)		|called when tab is clicked|

### TabPane
|name|type|default|description|
|----|------|-|---------------|
|key|	Object|	|corresponding to activeKey|
|tab|	String|	|current tab's title corresponding to current tabPane|
