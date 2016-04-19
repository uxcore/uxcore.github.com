# 动态展示

- order: 3

会动的进度条才是好进度条。

---

````jsx
var {Line, Circle} = require('uxcore-progress');
var Button = require('uxcore-button');

class Demo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            percent: 0
        };
    }

    increase() {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }
    decline() {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }

    render() {
        return (
            <div>
                <div>
                    <Line percent={this.state.percent} />
                </div>
                <div style={{display: 'inline-block'}}>
                    <Circle percent={this.state.percent} />
                </div>
                <div>
                    <Button onClick={this.decline.bind(this)} type="secondary" size="small">
                        <i className="kuma-icon kuma-icon-stop"></i>
                    </Button>
                    <Button onClick={this.increase.bind(this)} type="secondary" size="small">
                        <i className="kuma-icon kuma-icon-follow"></i>
                    </Button>
                </div>
            </div>
        );
    }
};

ReactDOM.render(
	<Demo />
, document.getElementById('components-progress-demo-dynamic'));
````
