#  图片上传

- order: 2

图片上传。

---

````jsx
const Uploader = require('uxcore-uploader');

ReactDOM.render((
    <Uploader multiple={false} accept="images" name='file' url='http://test.yanbingbing.com/upload.php' />
), document.getElementById('components-uploader-demo-image'));
````
