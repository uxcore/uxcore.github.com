# 箭头型

- order: 2

---

````jsx
import Steps, { Step } from 'uxcore-steps';

ReactDOM.render(
  <div style={{ width: '800px' }}>
    <Steps current={1} type="arrow-bar">
      <Step key={0} title={'步骤一'} />
      <Step key={1} title={'步骤二'} description="描述文案" />
      <Step key={2} title={'步骤三'} />
    </Steps>
  </div>
, document.getElementById('components-steps-demo-arrow'));
````
