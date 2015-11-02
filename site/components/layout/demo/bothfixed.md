# 左右都固定

- order: 2
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
            <Layout className="layoutDemo fixed">
                <Left width={500} className="left">左</Left>
                <Right width={500} className="right">右</Right>
            </Layout>
        </div>
        
    }
}

ReactDOM.render(<Demo />, document.getElementById('components-layout-demo-bothfixed'))
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
