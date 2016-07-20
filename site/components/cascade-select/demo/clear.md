# 允许清空

- order: 0

最简单的用法。

---

````jsx
const CascadeSelect = require('uxcore-cascade-select');
const options = [{
  value: 'alibaba',
  label: '阿里巴巴',
  children: [{
    value: 'platform',
    label: '信息平台',
    children: [{
      value: 'fe',
      label: '前端开发',
    }],
  }],
}, {
  value: 'beijing',
  label: '日本',
  children: [{
    value: 'xicheng',
    label: '西城',
    children: [{
      value: 'zhonggc',
      label: '中观村大街',
    }],
  }],
}, {
  value: 'tianjin',
  label: '天津',
  children: [{
    value: 'heping',
    label: '和平区',
    children: [{
      value: 'nanjinglu',
      label: '南京路',
    }],
  }, {
    value: 'hexi',
    label: '河西区',
    children: [{
      value: 'dagu',
      label: '大沽路',
    }],
  }],
}, {
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
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
}];

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      xValue : ['jiangsu', 'nanjing', 'zhonghuamen'],
      testValue: 1
    };
  }

  render() {
    return (
      <div className="demo-wrap">
        <CascadeSelect
          defaultValue={['alibaba', 'platform', 'fe']}
          options={options}
          clearable
          onChange={(value, selected) => console.log(value, selected)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-cascade-select-demo-clear'));
````
