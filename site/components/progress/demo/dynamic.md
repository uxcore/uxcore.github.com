# 动态展示

- order: 2

会动的进度条才是好进度条。

---

````jsx
var Progress = require('uxcore-progress');

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
                <Progress percent={this.state.percent} />
                <button className="kuma-button kuma-button-secondary kuma-button-sm" onClick={this.decline.bind(this)}>
                    <i className="kuma-icon kuma-icon-stop"></i>
                </button>
                <button className="kuma-button-secondary kuma-button-sm" onClick={this.increase.bind(this)}>
                    <i className="kuma-icon kuma-icon-follow"></i>
                </button>
            </div>
        );
    }
};

ReactDOM.render(
	<Demo />
, document.getElementById('components-progress-demo-dynamic'));
````
