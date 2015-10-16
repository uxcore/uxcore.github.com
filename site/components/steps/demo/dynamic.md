# 切换到下一步

- order: 2

随机生成 3~6 个步骤，初始随机进行到其中一个步骤。

---

````jsx
var Steps = require('uxcore-steps');
var Step = Steps.Step;

let array = Array.apply(null, Array(Math.floor(Math.random() * 3) + 3));
let steps = array.map(function(item, i) {
    return {
        title: '步骤' + (i + 1)
    };
});

class Demo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentStep: Math.floor(Math.random() * steps.length)
        };
    }

    next() {
        var s = this.state.currentStep + 1;
        if (s === steps.length) {
            s = 0;
        }
        this.setState({
            currentStep: s
        });
    }

    render() {
        return (
            <div>
                <div>当前正在执行第 {this.state.currentStep + 1} 步</div>
                <Steps current={this.state.currentStep}>
                    {steps.map((s, i) => <Step key={i} title={s.title} description={s.description} />)}
                </Steps>
                <div>
                    <button className='kuma-button kuma-button-sm' onClick={this.next.bind(this)}>下一步</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Demo />
, document.getElementById('components-steps-demo-dynamic'));
````
