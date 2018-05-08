# 小尺寸

- order: 2

小尺寸的提示。

---

````jsx

import { Message } from 'uxcore';
import { Button } from 'uxcore';

const handleClick = (type) => {
  Message[type]({
    content: `这是一个 ${type}`,
    className: 'kuma-message-small',
  });
};

class Demo extends React.Component {
  render() {
    return (
      <div className="demo1">
        <Button onClick={() => { handleClick('success'); }}>显示成功提示</Button>
        <Button onClick={() => { handleClick('info'); }}>显示普通提示</Button>
        <Button onClick={() => { handleClick('error'); }}>显示错误提示</Button>
        <Button onClick={() => { handleClick('loading'); }}>显示加载提示</Button>
      </div>
    );
  }
}
ReactDOM.render(
  <Demo />
, document.getElementById('components-message-demo-small'));

/* JS END CSS START*/

````

````css
.demo1 .kuma-button + .kuma-button {
    margin-left: 20px
}
````