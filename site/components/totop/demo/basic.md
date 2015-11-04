#  基本用法

- order: 0

基本用法。

---

````jsx
let classnames = require('classnames');

let Totop = require('uxcore-totop');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Totop>
                    <div className="block1">了解我们</div>
                    <div className="block2"><i className="kuma-icon kuma-icon-comment"></i></div>
                </Totop>
                <h1 style={{fontSize: 22}}>组件在屏幕的右下方</h1>
            </div>
        );
    }
};

ReactDOM.render(
    <Demo />,
    document.getElementById('components-totop-demo-basic')
);
````

````css
.block1 {
  height: 42px;
  background: #ccc;
  color: white;
  text-align: center;
  padding: 5px 5px;
  margin-bottom: 2px;
}
.block2 {
  height: 42px;
  background: #ccc;
  color: white;
  text-align: center;
  line-height: 42px;
  font-size: 18px;
}
.block2 > i {
  font-size: 22px;
}
````
