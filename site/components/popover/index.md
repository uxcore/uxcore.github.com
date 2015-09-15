# Popover

- category: Components
- chinese: 弹窗
- order: 12

---

uxcore-popover ui component for react

## Usage
```
let Popover = require('uxcore-popover');
let overlay = <div>
    <div className="demoContent">
        <i className="kuma-icon kuma-icon-information"></i>
        <span>你确认要删除此项数据吗？</span>
    </div>
    <div className="demoButton">
        <Button size="medium">确定</Button>
        <Button size="medium" color="orange">取消</Button>
    </div>
</div>

React.render(
    <Popover title="测试" overlay={overlay} placement="top">
        popover content
    </Popover>, targetNode)
```

## API

### props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|overlay|string|required|-|弹窗内容|
|title|string|optional|-|弹窗标题，不传入则没有标题栏|
|placement|string|optional|top|弹窗从那个方向弹出|
|prefixCls|string|optional|kuma-popup|类名前缀，用于定制化|
|trigger|string|optional|hover|触发弹窗的方式，有 hover 和 click 两种|
