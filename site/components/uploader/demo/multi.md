#  多文件

- order: 4

多文件。

---

````jsx
import Uploader from 'uxcore-uploader';

React.render((
    <Uploader autoPending={false} multiple={true} name='file' url='http://test.yanbingbing.com/upload.php' />
), document.getElementById('components-uploader-demo-multi'));
````
