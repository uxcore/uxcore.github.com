# 简单的用法

- order: 0

最简单的用法。

---

````jsx
var Dialog = require('uxcore-dialog');

function close(){
    console.log('close');
}
function show(){
    console.log('show');
}

React.render(
    <div>
        <p>does not support render visible on server!</p>
        <Dialog
          title="第一个弹框"
          width="500"
          zIndex={100}
          visible={true}
          onClose={close}
          onShow={show}
        >
            <p>第一个dialog</p>
        </Dialog>
    </div>, document.getElementById('components-dialog-demo-simple'));

````
