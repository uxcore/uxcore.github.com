# 竖直方向的步骤条

- order: 3

简单的竖直方向的步骤条。

---

````jsx
import Steps, { Step } from 'uxcore-steps';

const steps = [{
  title: '已完成',
  description: '这里是多信息的描述啊',
}, {
  title: '进行中',
  description: '这里是多信息的耶哦耶哦哦耶哦耶',
}, {
  title: '又一个待运行',
  description: '描述啊描述啊',
}, {
  title: '待运行',
  description: '这里是多信息的描述啊',
}].map((s, i) => (
  <Step key={i} title={s.title} description={s.description} />
    ));

ReactDOM.render(
  <Steps direction="vertical" current={1}>{steps}</Steps>
, document.getElementById('components-steps-demo-vertical'));
````
