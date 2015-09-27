#  基本用法

- order: 0

基本用法。

---

````jsx
import Uploader from 'uxcore-uploader';

React.render(
	<Uploader autoPending={false} multiple={false} name='file' url='http://test.yanbingbing.com/upload.php' />,
  	document.getElementById('components-uploader-demo-basic')
);
````
