# 信息提示

- order: 3

信息提示。

---

````jsx
import Dialog from 'uxcore-dialog';

function info() {
  Dialog.info({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息',
    onOk: function() {}
  });
}

function success() {
  Dialog.success({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息'
  });
}

function error() {
  Dialog.error({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息'
  });
}

class InfoDemo extends React.Component {
	render(){
		return (<div>
		  <button className="kuma-button kuma-button-swhite" onClick={info}>信息提示</button>&nbsp;
		  <button className="kuma-button kuma-button-swhite" onClick={success}>成功提示</button>&nbsp;
		  <button className="kuma-button kuma-button-swhite" onClick={error}>失败提示</button>
		</div>);
	}
}

ReactDOM.render(
    <InfoDemo />, document.getElementById('components-dialog-demo-info'));

````
