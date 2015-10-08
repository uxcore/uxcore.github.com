#  包裹区域

- order: 7

包裹区域。

---

<style>
.mydroparea .icon-upload {
   font-size: 60px;
   color:#57c5f7;
   display: block;
   margin-top: 35px;
}
</style>

```css
.mydroparea .icon-upload {
   font-size: 60px;
   color:#57c5f7;
   display: block;
   margin-top: 35px;
}
```

````jsx
import {Droparea} from 'uxcore-uploader';

React.render((
    <Droparea autoPending={false} className="mydroparea" multiple={true} queueCapcity={20} name='file' url='http://test.yanbingbing.com/upload.php'>
        <i className="kuma-upload-icon icon-upload" />
        <p>点击或将文件拖拽到此区域上传</p>
    </Droparea>
), document.getElementById('components-uploader-demo-wrap2'));
````
