# 智能提示

- order: 5

输入框自动完成功能，下面是一个账号注册表单的例子。  
同时这也是一个应用 combobox 模式的例子，除了提示的内容也可以将自己的输入作为选择，通常用于搜索。

---


````jsx
const Select = require('uxcore-select2');
const Option = Select.Option;

const Test = React.createClass({
  getInitialState() {
    return {
      options: [],
    };
  },
  handleChange(value) {
    let options;
    if (!value || value.indexOf('@') >= 0) {
      options = [];
    } else {
      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {
        const email = `${value}@${domain}`;
        return <Option key={email}>{email}</Option>;
      });
    }
    this.setState({
      options,
      value,
    });
  },
  render() {
    return (
      <div>
        <Select
          combobox
          dropdownClassName="kuma-select2-selected-has-icon"
          style={{ width: 200 }}
          onChange={this.handleChange}
          searchPlaceholder="请输入账户名"
        >
          {this.state.options}
        </Select>
        <span style={{ marginLeft: '8px' }}>选中的值：{this.state.value}</span>
      </div>
    );
  },
});

ReactDOM.render(<Test />, document.getElementById('components-select2-demo-combobox'));
````
