# 信息提示

- order: 3

信息提示。

---

````jsx
import Dialog from 'uxcore-dialog';
import Button from 'uxcore-button';

function info() {
  Dialog.info({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息',
    onOk() { },
  });
}

function success() {
  Dialog.success({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息',
  });
}

function error() {
  Dialog.error({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息',
  });
}

class InfoDemo extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={info}>信息提示</Button>&nbsp;
        <Button onClick={success}>成功提示</Button>&nbsp;
        <Button onClick={error}>失败提示</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <InfoDemo />, document.getElementById('components-dialog-demo-info'));
````
