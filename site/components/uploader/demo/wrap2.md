#  包裹区域

- order: 7

包裹区域。

---

````css
.mydroparea .kuma-icon-uploading {
   font-size: 60px;
   color:#57c5f7;
   display: block;
   margin-top: 35px;
}
````

````jsx
const {Dropzoom} = require('uxcore-uploader');

ReactDOM.render((
    <Dropzoom className="mydroparea" multiple={true} queueCapcity={20} name='file' url='http://test.yanbingbing.com/upload.php'>
        <i className="kuma-icon kuma-icon-uploading" />
        <p>点击或将文件拖拽到此区域上传</p>
    </Dropzoom>
), document.getElementById('components-uploader-demo-wrap2'));
````
