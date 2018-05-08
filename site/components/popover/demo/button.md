# 内置按钮

- order: 2

有时你可能希望气泡内有确定取消的按钮可以关闭气泡，这个例子对应这种场景。

---

````jsx
import { Button } from 'uxcore';
import { Popover } from 'uxcore';

class HoverDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleOk() {
    console.log('ok');
  }

  handleCancel() {
    console.log('cancel');
  }

  render() {
    const me = this;
    const overlay = <div style={{ marginBottom: '20px' }}><span>目标删除后将不可恢复，如有子目标将会删除！</span></div>;
    return (
      <div>
        <Popover title="您确定要删除该目标吗？" overlay={overlay} placement="top" trigger="click" showButton>
          <Button>点击弹出</Button>
        </Popover>
      </div>
    );
  }
}

ReactDOM.render(
  <HoverDemo />,
  document.getElementById('components-popover-demo-button')
);
````

````css
````
