# 左侧自适应，右侧固定

- order: 0

右侧定宽 190 px，左侧自适应
---

````jsx
let Layout = require('uxcore-layout');
let {Left, Right} = Layout;
let classnames = require('classnames');

class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Layout className="layoutDemo">
                <Left adaptive={true} className="left">左</Left>
                <Right width={190} className="right">右</Right>
            </Layout>
        </div>
        
    }
}

ReactDOM.render(<Demo />, document.getElementById('components-layout-demo-leftfixed'))
````

````css
.layoutDemo .left {
  text-align: center;
  line-height: 200px;
  font-size: 32px;
  background: lightblue;
}
.layoutDemo .right {
  text-align: center;
  line-height: 200px;
  font-size: 32px;
  background: yellowgreen;
}
.layoutDemo.fixed {
  min-width: 1000px;
}
.layoutDemo p {
  font-size: 24px;
}
````
