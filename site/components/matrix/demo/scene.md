# 使用场景

- order: 3

---

````jsx

const Matrix = require('uxcore-matrix');

const data = {
  data: [
    { x: 0, y: 0, row: 1, col: 1, type: 'title', text: '订单编号' },
    { x: 1, y: 0, row: 1, col: 1, type: 'normal', text: '600,000.00(CNY)' },
    { x: 2, y: 0, row: 1, col: 1, type: 'title', text: '申请单号' },
    { x: 3, y: 0, row: 1, col: 1, type: 'normal', text: '123123' },
    { x: 4, y: 0, row: 1, col: 1, type: 'title', text: '报价单号' },
    { x: 5, y: 0, row: 1, col: 1, type: 'normal', text: '1234' },
    { x: 6, y: 0, row: 1, col: 1, type: 'title', text: '合同号' },
    { x: 7, y: 0, row: 1, col: 1, type: 'normal', text: '378467251864' },
    { x: 0, y: 1, row: 1, col: 1, type: 'title', text: '订单状态' },
    { x: 1, y: 1, row: 1, col: 1, type: 'normal', text: '已生效' },
    { x: 2, y: 1, row: 1, col: 1, type: 'title', text: '订单金额' },
    { x: 3, y: 1, row: 1, col: 1, type: 'normal', text: '12654300' },
    { x: 4, y: 1, row: 1, col: 1, type: 'title', text: '收款公司' },
    { x: 5, y: 1, row: 1, col: 1, type: 'normal', text: '阿里巴巴' },
    { x: 6, y: 1, row: 1, col: 1, type: 'title', text: '供应商' },
    { x: 7, y: 1, row: 1, col: 1, type: 'normal', text: '扒拉扒拉童装' },
    { x: 0, y: 2, row: 1, col: 1, type: 'title', text: '已付总金额' },
    { x: 1, y: 2, row: 1, col: 1, type: 'normal', text: '600,000.00(CNY)' },
    { x: 2, y: 2, row: 1, col: 1, type: 'title', text: '已收款总金额' },
    { x: 3, y: 2, row: 1, col: 1, type: 'normal', text: '123123' },
    { x: 4, y: 2, row: 1, col: 1, type: 'title', text: '开票信息' },
    { x: 5, y: 2, row: 1, col: 3, type: 'link', text: '开票信息可点击' },
    { x: 0, y: 3, row: 1, col: 1, type: 'title', text: '备注' },
    { x: 1, y: 3, row: 1, col: 7, type: 'normal', text: '吧啦的哈佛哈开的奶茶啊我会成为啊' },
  ],
};

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.customRender = this.customRender.bind(this);
  }

  customRender(cellData) {
    const style = {
      lineHeight: '50px',
      textAlign: 'left',
      padding: '0 20px',
      overflow: 'hidden',
    };
    if (cellData.type === 'title') {
      style.textAlign = 'right';
      style.color = 'rgba(0, 0, 0, 0.8)';
      style.fontWeight = 'bold';
      style.background = 'rgba(31,56,88,0.04)';
    }
    let content = cellData.text;
    if (cellData.type === 'link') {
      content = <a>{content}</a>;
    }
    return (
      <div style={style}>
        {content}
      </div>
    );
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
          cellWidth={120}
          render={this.customRender}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
    document.getElementById('components-matrix-demo-scene')
);
````
