# 自定义状态

- order: 8

可以使用 status 定义每个步骤的状态。

---

````jsx
import Steps, { Step } from 'uxcore-steps';

const steps = [{
  status: 'finish',
  title: '已完成',
  description: '这里是多信息的描述啊',
}, {
  status: 'process',
  title: '进行中',
  description: '这里是多信息的耶哦耶哦哦耶哦耶',
}, {
  status: 'wait',
  title: '又一个待运行',
  description: '描述啊描述啊',
}, {
  status: 'wait',
  title: '待运行',
  description: '这里是多信息的描述啊',
}].map((s, i) => (
  <Step key={i} title={s.title} status={s.status} description={s.description} />
    ));
ReactDOM.render(
  <Steps type="bottom-desc">{steps}</Steps>
, document.getElementById('components-steps-demo-custom'));
````
