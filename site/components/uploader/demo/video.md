#  视频上传

- order: 3

视频上传。

---

````jsx
import Uploader from 'uxcore-uploader';

React.render((
    <Uploader autoPending={false} multiple={false} accept="videos" name='file' url='http://test.yanbingbing.com/upload.php' />
), document.getElementById('components-uploader-demo-video'));
````
