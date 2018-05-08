# 基本

- order: 0

---

````jsx
import { Grid } from 'uxcore';
const classnames = require('classnames');
const { Row, Col } = Grid;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={24} md={16}><code>&lt;{'Col xs={24} md={16}'} /&gt;</code></Col>
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} xsOffset={12}><code>&lt;{'Col xs={12} xsOffset={12}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col md={12} mdPush={12}><code>&lt;{'Col md={12} mdPush={12}'} /&gt;</code></Col>
            <Col md={12} mdPull={12}><code>&lt;{'Col md={12} mdPull={12}'} /&gt;</code></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-grid-demo-basic'));
````

````css
.show-grid {
  margin-bottom: 15px;
}
.show-grid [class^="col-"] {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #eee;
  background-color: rgba(86, 61, 124, 0.15);
  border: 1px solid #ddd;
  border: 1px solid rgba(86, 61, 124, 0.2);
}
.show-grid code {
  display: inline-block;
  width: 100%; 
}
code {
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}
code,
kbd {
  padding: 2px 4px;
  font-size: 90%;
}
````
