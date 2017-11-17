# 情感化评价

- order: 3

---

````jsx
const classnames = require('classnames');

const Rate = require('uxcore-rate');
const Icon = require('uxcore-icon');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 5,
      value: 3,
    };
    this.scoreTips = [
      '哇，超出期望啊',
      '不给力啊',
    ];
  }

  onChange(val) {
    console.log(val);
    this.setState({
      value: val,
    });
  }

  render() {
    return (
      <div className="rate-demo-wrp">
        <Rate
          className="rate-demo"
          total={2}
          size="large"
          value={this.state.value}
          scoreTips={this.scoreTips}
          onChange={this.onChange.bind(this)}
          activeAll={false}
          icons={[
            <Icon name="xiaolian-line" />,
            <Icon name="kulian-line" />,
          ]}
          activeIcons={[
            <Icon name="xiaolian-full" />,
            <Icon name="kulian-full" />,
          ]}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-rate-demo-emotion'));
````
