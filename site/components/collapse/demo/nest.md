# 嵌套

- order: 2

手风琴嵌套折叠面板
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
        <Collapse onChange={this.handleChange} accordion>
          <Panel header={'This is panel header 1'} key="1">
            <Collapse defaultActiveKey="1">
              <Panel header={'This is panel nest panel'} key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
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

ReactDOM.render(<Demo />, document.getElementById('components-collapse-demo-nest'));
````