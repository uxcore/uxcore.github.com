# 数字增减

- order: 4

---

````jsx
import { Badge } from 'uxcore';
import { Button } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count2: 1,
    };
  }

  handlePlus() {
    this.setState({
      count2: this.state.count2 + 1,
    });
  }

  handleMinus() {
    this.setState({
      count2: this.state.count2 - 1,
    });
  }

  render() {
    return (
      <div>
        <Badge count={this.state.count2}>
          <a href="#" className="head-example" />
        </Badge>
        <Button size="small" type="outline" onClick={this.handlePlus.bind(this)} style={{
          marginRight: 10,
          marginLeft: 20,
        }}
        >+</Button>
        <Button size="small" type="outline" onClick={this.handleMinus.bind(this)}>-</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-badge-demo-numberplus'));
/* JS END CSS START*/
````

````css
.head-example {
    width: 50px;
    height: 50px;
    border-radius: 3px;
    display: inline-block;
    background: #e8e8e8;
}
````
