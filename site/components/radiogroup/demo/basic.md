# 基本

- order: 0

最简单的用法。

---

````jsx

const RadioGroup = require('uxcore-radiogroup');
const { Item } = RadioGroup;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'apple',
    };
  }

  handleChange(value) {
    const me = this;
    me.setState({
      value,
    });
  }

  render() {
    const me = this;
    return (
      <RadioGroup value={me.state.value} onChange={me.handleChange.bind(me)}>
        <Item value="apple" text="苹果" />
        <Item value="banana" text="香蕉" />
        <Item value="orange" text="橘子" disabeld />
      </RadioGroup>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-radiogroup-demo-basic'));

````
