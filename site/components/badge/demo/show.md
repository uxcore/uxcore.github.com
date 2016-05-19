# 显示/隐藏

- order: 3

---

````jsx
let Badge = require('uxcore-badge');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count2: 1
        }
    }

    handlePlus() {
        this.setState({
            count2: this.state.count2 + 1
        });
    }

    handleMinus() {
        this.setState({
            count2: this.state.count2 - 1
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
                <div>
                    <Button type="outline" onClick={this.handleShow.bind(this)}>显示/隐藏</Button>
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-badge-demo-basic'));
````
