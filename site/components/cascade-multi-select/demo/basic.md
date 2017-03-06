# 基本

- order: 0

最简单的用法。

---

````jsx
const CascadeMultiSelect = require('uxcore-cascade-multi-select');
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }, {
        value: 'bingjiang',
        label: '滨江',
      }],
    }, {
      value: 'ningbo',
      label: '宁波',
      children: [{
        value: 'zhoushan',
        label: '舟山',
      }],
    }, {
      value: 'yiwu',
      label: '义乌',
      children: [{
        value: 'jinhua',
        label: '金华',
      }],
    }, {
      value: 'changxing',
      label: '长兴',
      children: [],
    }, {
      value: 'jiaxing',
      label: '嘉兴',
      children: [],
    }, {
      value: 'wenzhou',
      label: '温州',
    }, {
      value: 'lishui',
      label: '丽水',
      children: [],
    }, {
      value: 'linan',
      label: '临安',
      children: [],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }, {
    value: 'shandong',
    label: '山东',
    children: [{
      value: 'jinan',
      label: '济南',
      children: [{
        value: 'baotuquan',
        label: '趵突泉',
      }],
    }],
  }, {
    value: 'longname-0',
    label: '名称很长的选项展示效果0',
    children: [{
      value: 'longname-0-0',
      label: '名称很长的选项展示效果0-0',
      children: [{
        value: 'longname-0-0-0',
        label: '名称很长的选项展示效果0-0-0',
      }],
    }],
  },
];

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      demo1: ['shanghai'],
    }
  }

  render() {
    return (
      <div style={{ margin: 15 }}>
        <CascadeMultiSelect
          className={'ucms-input'}
          dropdownClassName={'ucms-drop'}
          options={options}
          onSelect={(valueList, labelList, leafList) => {
            console.log(valueList, labelList, leafList);
            this.setState({ demo1: valueList });
          }}
          onOk={(valueList, labelList, leafList) => {
            console.log(valueList, labelList, leafList);
          }}
          value={this.state.demo1}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-cascade-multi-select-demo-basic'));
````
