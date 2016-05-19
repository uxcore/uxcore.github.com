# 数字增减

- order: 4

---

````jsx
let Badge = require('uxcore-badge');

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
                <Badge count={this.state.count2}>
                    <a href="#" className="head-example"></a>
                </Badge>
                <div>
                    <Button size="small" type="outline" onClick={this.handlePlus.bind(this)} style={{
                        marginRight: 10
                    }}>+</Button>
                    <Button size="small" type="outline" onClick={this.handleMinus.bind(this)}>-</Button>
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-badge-demo-basic'));
````
