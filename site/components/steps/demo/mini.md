# 迷你版

- order: 1

迷你版的步骤条，通过设置 <Steps size="small"> 启用.

---

````jsx
import Steps, { Step } from 'uxcore-steps';

const steps = [{
    title: '已完成',
    description: '这里是多信息的描述啊'
}, {
    title: '进行中',
    description: '这里是多信息的耶哦耶哦哦耶哦耶'
}, {
    title: '又一个待运行',
    description: '描述啊描述啊'
}, {
    title: '待运行',
    description: '这里是多信息的描述啊'
}].map(function(s, i) {
    return (
        <Step key={i} title={s.title} description={s.description} />
    );
});

ReactDOM.render(
    <Steps showIcon={false} current={1}>{steps}</Steps>
, document.getElementById('components-steps-demo-mini'));
````
