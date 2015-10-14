#  视频上传

- order: 3

视频上传。

---

````jsx
const Uploader = require('uxcore-uploader');

ReactDOM.render((
    <Uploader multiple={false} accept="videos" name='file' url='http://test.yanbingbing.com/upload.php' />
), document.getElementById('components-uploader-demo-video'));
````
