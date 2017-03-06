# 直接使用面板

- order: 4

---

````jsx
const CascadeMultiSelect = require('uxcore-cascade-multi-select');
const { CascadeMultiPanel } = CascadeMultiSelect;
const options2 = [
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
      }, {
        value: 'shangcheng',
        label: '上城',
      }, {
        value: 'yuhang',
        label: '余杭',
      }, {
        value: 'linping',
        label: '临平',
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
      children: [{
        value: 'changxingnan',
        label: '长兴南',
      }, {
        value: 'changxingbei',
        label: '长兴北',
      }],
    }, {
      value: 'jiaxing',
      label: '嘉兴',
      children: [],
    }, {
      value: 'wenzhou',
      label: '温州',
      children: [],
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
    value: 'anhui',
    label: '安徽',
    children: [{
      value: 'hefei',
      label: '合肥',
      children: [{
        value: 'dashushan',
        label: '大蜀山',
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
      demo9: ['bingjiang', 'ningbo', 'anhui', 'shandong', 'jiangsu', 'longname-0'],
    }
  }

  render() {
    return (
      <div style={{ margin: 15 }}>
        <div style={{ position: 'relative', margin: 15 }}>
          <CascadeMultiPanel
            options={options2}
            value={this.state.demo9}
            onSelect={(valueList, labelList, leafList) => {
              console.log(leafList);
              this.setState({
                demo9: valueList,
              });
            }}
            className={'ucms-panel'}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-cascade-multi-select-demo-panel'));
````
