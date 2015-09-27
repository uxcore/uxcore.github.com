#  图片上传

- order: 2

图片上传。

---

````jsx
import Uploader from 'uxcore-uploader';

React.render((
    <Uploader autoPending={false} multiple={false} accept="images" name='file' url='http://test.yanbingbing.com/upload.php' />
), document.getElementById('components-uploader-demo-image'));
````
