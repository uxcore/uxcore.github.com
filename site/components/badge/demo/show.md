# 显示/隐藏

- order: 3

---

````jsx
let Badge = require('uxcore-badge');
let Button = require('uxcore-button');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            count: 5,
        }
    }

    handleShow() {
        this.setState({
            show: !this.state.show
        });
        this.setState({
            count: this.state.count == 5 ? 0 : 5
        });
    }

    render() {
        return (
            <div>
                <Badge count={this.state.count}>
                    <a href="#" className="head-example"></a>
                </Badge>
                <div style={{
                    display: 'inline-block',
                    width: 20,
                    height: 20
                }}></div>
                <Badge dot={this.state.show}>
                    <a href="#" className="head-example"></a>
                </Badge>
                <Button style={{marginLeft: 20}} type="outline" onClick={this.handleShow.bind(this)}>显示/隐藏</Button>
            </div>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-badge-demo-show'));
/* JS END CSS START*/
````

````css
.head-example {
    width: 50px;
    height: 50px;
    border-radius: 3px;
    display: inline-block;
    background: #e8e8e8;
}
````
