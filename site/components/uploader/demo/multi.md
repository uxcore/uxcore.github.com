#  多文件

- order: 4

多文件。

---

````jsx
const Uploader = require('uxcore-uploader');

ReactDOM.render((
    <Uploader multiple={true} name='file' url='http://test.yanbingbing.com/upload.php' />
), document.getElementById('components-uploader-demo-multi'));
````
