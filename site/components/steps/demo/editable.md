# 可返回编辑

- order: 7

对可返回编辑的 Step 做强调显示。

---

````jsx
import Steps, { Step } from 'uxcore-steps';

ReactDOM.render(
    <div>
        <Steps current={1} type="bottom-desc">
            <Step key={0} title={'步骤一'} editable />
            <Step key={1} title={'步骤二'} />
            <Step key={2} title={'步骤二'} />
        </Steps>
        <Steps current={1} showIcon={false} type="bottom-desc">
            <Step key={0} title={'步骤一'} editable />
            <Step key={1} title={'步骤二'} />
            <Step key={2} title={'步骤二'} />
        </Steps>
        <Steps current={1} type="arrow-bar">
            <Step key={0} title={'步骤一'} editable />
            <Step key={1} title={'步骤二'} />
            <Step key={2} title={'步骤二'} />
        </Steps>
    </div>
, document.getElementById('components-steps-demo-editable'));
````
