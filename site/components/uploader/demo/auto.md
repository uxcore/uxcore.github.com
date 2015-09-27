#  自动上传

- order: 1

自动上传。

---

````jsx
import Uploader from 'uxcore-uploader';

React.render((
    <Uploader autoPending={true} multiple={false}  name='file' url='http://test.yanbingbing.com/upload.php' />
), document.getElementById('components-uploader-demo-auto'));
````
