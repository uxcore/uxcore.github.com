#  基本用法

- order: 0

基本使用和常见操作

---

````jsx
import Button from 'uxcore-button';
import Transfer from 'uxcore-transfer';

const mockData = [];
const len = (Math.random() * 10) + 40;
for (let i = 0; i < len; i += 1) {
  mockData.push({
    name: `内容${i + 1}`,
    value: (i + 1),
    description: `内容${i + 1}的描述`,
    chosen: Math.random() * 2 > 1,
    keywords: [`neirong${i + 1}`], // used in search & location
    disabled: i > 15,
  });
}

class TransferDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false,
      data: mockData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }

  handleChange(data) {
    console.log(data);
  }

  handleClick() {
    this.ref.selectItems([2, 3]);
  }

  handleClick2() {
    this.setState({
      disable: !this.state.disable,
    });
  }
  handleClick3() {
    console.log('work');
    const mockData2 = [];
    const length = (Math.random() * 10) + 40;
    for (let i = 0; i < length; i += 1) {
      mockData2.push({
        name: `内容${i + 1}`,
        value: (i + 1),
        description: `内容${i + 1}的描述`,
        chosen: Math.random() * 2 > 1,
        keywords: [`neirong${i + 1}`], // used in search & location
      });
    }
    this.setState({
      data: mockData2,
    });
  }

  handleClick4() {
    this.ref.reset();
  }

  render() {
    const me = this;
    return (
      <div>
        <Transfer
          showSearch
          disabled={me.state.disable}
          ref={(c) => { this.ref = c; }}
          data={this.state.data}
          onChange={me.handleChange}
        />
        <div style={{ marginTop: '20px' }}>
          <Button onClick={me.handleClick}>手动更改被选中的项</Button>
          <Button type="secondary" style={{ marginLeft: 12 }} onClick={me.handleClick2}>更改 mode</Button>
          <Button type="secondary" style={{ marginLeft: 12 }} onClick={me.handleClick3}>更改 props</Button>
          <Button type="secondary" style={{ marginLeft: 12 }} onClick={me.handleClick4}>重置</Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TransferDemo />,
  document.getElementById('components-transfer-demo-basic')
);
````
