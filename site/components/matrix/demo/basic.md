# 基本使用

- order: 0

Matrix 的基本使用，根据数据决定如何跨行跨列。

---

````jsx

const Matrix = require('uxcore-matrix');

const data = {
  data: [
    { x: 0, y: 0, row: 2, col: 2, text: '1' },
    { x: 2, y: 0, row: 2, col: 2, text: '2' },
    { x: 4, y: 0, row: 3, col: 1, text: '3' },
    { x: 0, y: 2, row: 1, col: 3, text: '4' },
    { x: 3, y: 2, row: 1, col: 1, text: '5' },
  ]
};

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div
        style={{
          paddingLeft: 20,
          paddingTop: 20,
        }}
      >
        <Matrix
          data={data}
        />
      </div>
    );
  }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('components-matrix-demo-basic')
);
````
