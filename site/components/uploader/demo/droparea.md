#  拖拽上传

- order: 5

拖拽上传。

---

````jsx
import {Droparea} from 'uxcore-uploader';

React.render((
    <Droparea autoPending={false} multiple={true} queueCapcity={20} name='file' url='http://test.yanbingbing.com/upload.php' />
), document.getElementById('components-uploader-demo-droparea'));
````
