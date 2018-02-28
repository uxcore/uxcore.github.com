# 基本使用

- order: 0

可以同时展开多个面板，这个例子默认展开了第一个。
---

````jsx
import Collapse, { Panel } from 'uxcore-collapse';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Demo extends React.Component {
  handleChange(key) {
    console.log(key);
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Collapse defaultActiveKey={['1']} onChange={this.handleChange}>
          <Panel header={'This is panel header 1'} key="1">
            <p>{text}</p>
          </Panel>
          <Panel header={'This is panel header 2'} key="2">
            <p>{text}</p>
          </Panel>
          <Panel header={'This is panel header 3'} key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-collapse-demo-basic'));
````