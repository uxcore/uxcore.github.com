#  包裹按钮

- order: 6

包裹按钮。

---

````jsx
import Uploader from 'uxcore-uploader';
import Button from 'uxcore-button';


React.render((
    <Uploader autoPending={false} name='file' url='http://test.yanbingbing.com/upload.php'>
        <Button size="large">自定义上传按钮</Button>
    </Uploader>
), document.getElementById('components-uploader-demo-wrap1'));
````
