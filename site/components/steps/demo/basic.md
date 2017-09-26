# 基本用法

- order: 0

简单的步骤条。

---

````jsx
import Steps, { Step } from 'uxcore-steps';

ReactDOM.render(
    <Steps current={2} type="bottom-desc">
        <Step key={0} title={'步骤一'} description="描述文案" />
        <Step key={1} title={'步骤二'} description="描述文案" />
        <Step key={2} title={'步骤三'} description="描述文案" />
        <Step key={3} title={'步骤四'} description="描述文案" />
    </Steps>
, document.getElementById('components-steps-demo-basic'));
````
