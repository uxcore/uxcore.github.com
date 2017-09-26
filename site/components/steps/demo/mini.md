# 迷你版

- order: 1

迷你版的步骤条，通过设置 <Steps size="small"> 启用.

---

````jsx
import Steps, { Step } from 'uxcore-steps';

ReactDOM.render(
    <Steps current={2} showIcon={false} type="bottom-desc">
        <Step key={0} title={'步骤一'} />
        <Step key={1} title={'步骤二'} />
        <Step key={2} title={'步骤三'} />
        <Step key={3} title={'步骤四'} />
    </Steps>
, document.getElementById('components-steps-demo-mini'));
````
