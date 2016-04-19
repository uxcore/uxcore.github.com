# 进度条

- order: 1

圆形进度条。

---

````jsx
var {Circle} = require('uxcore-progress');

ReactDOM.render(
    <div>
		<div style={{display: 'inline-block'}}>
            <Circle percent={70} status="exception" />
        </div>
        <div style={{display: 'inline-block'}}>
            <Circle percent={100} status="success" />
        </div>
        <div style={{display: 'inline-block'}}>
            <Circle percent={50} showInfo={true} />
        </div>
    </div>
, document.getElementById('components-progress-demo-circle'));
````
