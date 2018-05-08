# 支持每个单元格配置宽高

- order: 2

---

````jsx

import { Matrix } from 'uxcore';

const data = {
  data: [
    { x: 0, y: 0, row: 2, col: 2, text: '1' },
    { x: 2, y: 0, row: 2, col: 2, text: '2' },
    { x: 4, y: 0, row: 3, col: 1, text: '3' },
    { x: 0, y: 2, row: 1, col: 3, text: '4' },
    { x: 3, y: 2, row: 1, col: 1, text: '5' },
  ],
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
          cellHeight={[100, 50, 50]}
          cellWidth={[100, 200, 300, 100, 100]}
          width={400}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
    document.getElementById('components-matrix-demo-advanced')
);
````
