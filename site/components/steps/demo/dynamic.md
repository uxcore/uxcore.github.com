# 切换到下一步

- order: 2

随机生成 3~6 个步骤，初始随机进行到其中一个步骤。

---

````jsx
const Steps = require('uxcore-steps');
const Step = Steps.Step;
const Button = require('uxcore-button');

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
            currentStep: Math.floor(Math.random() * steps.length),
            showIcon: true
        };
    }

    toggleNumberShow(){
        this.setState({
            showIcon: !this.state.showIcon
        });
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
                <Steps current={this.state.currentStep} showIcon={this.state.showIcon}>
                    {steps.map((s, i) => <Step key={i} title={s.title} description={s.description} />)}
                </Steps>
                <div>
                    <Button size="small" type="secondary" onClick={this.next.bind(this)}>下一步</Button> &nbsp;
                    <Button size="small" type="secondary" onClick={this.toggleNumberShow.bind(this)}>显示数字</Button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Demo />
, document.getElementById('components-steps-demo-dynamic'));
````
