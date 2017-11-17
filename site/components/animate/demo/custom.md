# 定制动画

- order: 1

默认提供的动画样式，只有入场动画。

---

````jsx

const Button = require('uxcore-button');
const Animate = require('uxcore-animate');
const Select = require('uxcore-select2');
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
    };
  }

  showComponent() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div>
        <div style={{ height: '60px' }}>
          <Animate showProp="visible" transitionName={'custom'} transitionAppear onEnd={(key, exists) => {
            console.log(key, exists);
          }}
          >
            <AwesomeComponent key="awesome" visible={this.state.visible} />
          </Animate>
        </div>
        <div style={{ padding: '10px 0px' }}>
          <Button type="outline" onClick={this.showComponent.bind(this)} style={{ marginLeft: '10px' }}>显示/隐藏</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-animate-demo-custom'));
````

````css
.awesome-component-wrap {
    color: white;
    line-height: 40px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
}

@keyframes flipIn {
    0% {
        opacity: 0;
        transform: perspective(1000px) rotate3d(1,0,0,45deg);
    }
    100% {
        opacity: 1;
        transform: perspective(1000px) rotate3d(1,0,0,0deg);
    }
}

@keyframes flipOut {
    0% {
        opacity: 1;
        transform: perspective(1000px) rotate3d(1,0,0,0deg);
    }
    100% {
        opacity: 0;
        transform: perspective(1000px) rotate3d(1,0,0,45deg);
    }
}

.custom-enter,
.custom-appear {
    opacity: 0;
    transform: perspective(1000px) rotate3d(1,0,0,45deg);
    transform-origin: 50% calc(100% + 10px);
    animation-duration: 1s;
    animation-fill-mode: both;
}
.custom-enter-active,
.custom-appear-active {
    animation-name: flipIn;
}

.custom-leave {
    opacity: 1;
    transform: perspective(1000px) rotate3d(1,0,0,0deg);
    animation-duration: 1s;
    animation-fill-mode: both;
}

.custom-leave-active {
    animation-name: flipOut;
}
````
