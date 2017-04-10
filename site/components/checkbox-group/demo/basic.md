# 基本

- order: 0

最简单的用法。

---

````jsx

const CheckboxGroup = require('uxcore-checkbox-group');

const Item = CheckboxGroup.Item;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ['air'],
      disabled: false,
    };
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <CheckboxGroup
          disabled={this.state.disabled}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        >
          <Item text="天空天空天空" value="air" />
          <Item text="<b>大海大海大海</b>" value="sea" />
          <Item text="陆地陆地陆地" disabled value="land" />
          <Item text="飞机飞机飞机" value="plane" />
          <Item text="火车飞机飞机" value="train" />

        </CheckboxGroup>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-checkbox-group-demo-basic'));

````
