#  附带提示文字

- order: 1

附带提示文字。

---

<style>
.tips {
   color:#666;
   margin-left:20px;
}
.tips em {
   color:#999;
   font-style:normal;
   font-weight:normal;
}
</style>

```css
.tips {
   color:#666;
   margin-left:20px;
}
.tips em {
   color:#999;
   font-style:normal;
   font-weight:normal;
}
```

````jsx
const Uploader = require('uxcore-uploader');

const tips = <span className="tips">限制0.5M以内<em>（支持格式：.doc; .docx; .xls; .xlsx）</em></span>;

ReactDOM.render(
	<Uploader tips={tips} name='file' url='http://test.yanbingbing.com/upload.php' />,
  	document.getElementById('components-uploader-demo-tips')
);
````
