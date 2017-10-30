# 出错状态

- order: 6

每种风格都有对应的出错状态。

---

````jsx
import Steps, { Step } from 'uxcore-steps';

ReactDOM.render(
    <div>
        <Steps current={1} type="bottom-desc">
            <Step key={0} title={'步骤一'} />
            <Step key={1} title={'步骤二'} status="error" />
            <Step key={2} title={'步骤三'} />
        </Steps>
        <Steps current={1} showIcon={false} type="bottom-desc">
            <Step key={0} title={'步骤一'} />
            <Step key={1} title={'步骤二'} status="error" />
            <Step key={2} title={'步骤三'} />
        </Steps>
        <Steps current={1} type="arrow-bar">
            <Step key={0} title={'步骤一'} />
            <Step key={1} title={'步骤二'} status="error" />
            <Step key={2} title={'步骤三'} />
        </Steps>
    </div>
, document.getElementById('components-steps-demo-error'));
````
