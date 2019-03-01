倒计时按钮
=====

- order: 4

倒计时

---

````jsx
import { Button } from 'uxcore';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agreeDisabled: true
    };
  }

  render() {
    return (
      <Button
        size="middle"
        disabled={this.state.agreeDisabled}
        countDown={10}
        onCountDownEnd={() => {
          this.setState({
            agreeDisabled: false,
          });
        }}
      >同意</Button>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-button-demo-countdown'));
````
