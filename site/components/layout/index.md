# Layout

- category: Components
- chinese: 左右布局
- description: helping you to make an adaptive layout fastly
- order: 0
- subtype: 布局

---

## Usage

```javascript
let Layout = require('uxcore-layout');
let {Left, Right} = Layout;
let classnames = require('classnames');

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <p>左侧自适应，右侧固定</p>
            <Layout className="layoutDemo">
                <Left adaptive={true} className="left">左</Left>
                <Right width={190} className="right">右</Right>
            </Layout>
            <p>右侧自适应，左侧固定</p>
            <Layout className="layoutDemo">
                <Left width={190} className="left">左</Left>
                <Right adaptive={true} className="right">右</Right>
            </Layout>
            <p>左右都固定</p>
            <Layout className="layoutDemo">
                <Left width={500} className="left">左</Left>
                <Right width={500} className="right">右</Right>
            </Layout>
        </div>
        
    }
}

module.exports = Demo;
```

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|


## 子组件

### Left/Right

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|className|string|optional|""|加入额外的类名，在使用 kuma 的基础上进行适当的定制时会用得到|
|width|number|optional|500|布局块的宽度，仅在定宽时起作用|
|adaptive|boolean|optional|false|是否为自适应，未设定 adaptive=true 的一侧，则为定宽，不可两者皆为自适应|
