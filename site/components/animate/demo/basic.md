# 基本使用

- order: 0

默认提供的动画样式，只有入场动画。

---

````jsx

import { Button } from 'uxcore';
import { Animate } from 'uxcore';
import { Select } from 'uxcore';
const { Option } = Select;

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: this.props.visible ? 'inline-block' : 'none' }} className="awesome-component-wrap bg-primary-color">
              动画展示区域
      </div>
    );
  }
}

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      effect: 'fade',
    };
  }

  showComponent() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  handleChange(value) {
    this.setState({
      effect: value,
    });
  }

  render() {
    const effects = ['fade', 'slideRight', 'slideDown', 'newspaper', 'fall', 'threeFallH', 'threeFallV', 'threeSign', 'superScale', 'threeSlit', 'threeRotateBottom', 'threeRotateLeft'];
    return (
      <div>
        <div style={{ height: '60px' }}>
          <Animate showProp="visible" transitionName={this.state.effect} transitionAppear>
            <AwesomeComponent visible={this.state.visible} />
          </Animate>
        </div>
        <div style={{ padding: '10px 0px' }}>
          <Select style={{ width: '200px' }} placeholder="切换动画效果" onChange={this.handleChange.bind(this)} value={this.state.effect}>
            {effects.map(item => <Option key={item}>{item}</Option>)}
          </Select>
          <Button type="outline" onClick={this.showComponent.bind(this)} style={{ marginLeft: '10px' }}>显示/隐藏</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-animate-demo-basic'));
````

````css
.awesome-component-wrap {
    color: white;
    line-height: 40px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
}
````
