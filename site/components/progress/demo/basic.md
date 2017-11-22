# 进度条

- order: 0

标准的进度条。

---

````jsx
const { Line } = require('uxcore-progress');

ReactDOM.render(
  <div>
    <Line percent={30} />
    <Line percent={50} status="active" />
    <Line percent={70} status="exception" />
    <Line percent={100} />
    <Line percent={50} showInfo={false} />
  </div>
  , document.getElementById('components-progress-demo-basic'));
````
