# 选项异步

- order: 3

---

````jsx
import { CascadeMultiSelect } from 'uxcore';
import { Button } from 'uxcore';
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
      demo6: ['xihu'],
    };
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: 20 }}>
          <h3>数据异步</h3>
          <p>
            （手动异步数据）
          </p>
          <p>
            <Button
              onClick={() => {
                this.setState({
                  demo6: ['xihu'],
                  asyncOptions6: options2,
                });
              }}
            >
              async
            </Button>
            &nbsp;
            <Button
              onClick={() => {
                this.setState({
                  demo6: ['xihu'],
                  asyncOptions6: options,
                });
              }}
            >init</Button>
          </p>
          <p>点击async更新options和value</p>
          <p>点击浙江/杭州/长兴，添加长兴的子集(原没有数据)</p>
        </div>
        <div style={{ position: 'relative', margin: 15 }}>
          <CascadeMultiSelect
            options={this.state.asyncOptions6}
            value={this.state.demo6}
            onSelect={(valueList) => {
              this.setState({ demo6: valueList });
            }}
            onItemClick={(item) => {
              console.log('onItemClick', item);
              if (item.value === 'changxing') {
                this.setState({
                  asyncOptions6: options2,
                });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-cascade-multi-select-demo-async'));
````
