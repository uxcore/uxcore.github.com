# 右侧自适应，左侧固定

- order: 1

左侧定宽 190 px，右侧自适应
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
                <Left width={190} className="left">左</Left>
                <Right adaptive={true} className="right">右</Right>
            </Layout>
        </div>
        
    }
}

ReactDOM.render(<Demo />, document.getElementById('components-layout-demo-rightfixed'))
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
