#  包裹按钮

- order: 6

包裹按钮。

---

````jsx
const Uploader = require('uxcore-uploader');
const Button = require('uxcore-button');


ReactDOM.render((
    <Uploader name='file' url='http://test.yanbingbing.com/upload.php'>
        <Button size="large">自定义上传按钮</Button>
    </Uploader>
), document.getElementById('components-uploader-demo-wrap1'));
````
