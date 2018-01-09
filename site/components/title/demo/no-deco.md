# 仅渲染文字

- order: 4

没有额外的间距和修饰物，不能开箱即用，但具有更加灵活的组合能力

---

````jsx
import Title from 'uxcore-title';
import Tooltip from 'uxcore-tooltip';
import Icon from 'uxcore-icon';

class Demo extends React.Component {
  render() {
    const tip = (
      <Tooltip overlay="提示文字" placement="top" trigger={['hover']}>
        <Icon name="tishi-full" className="demo-title-tip" />
      </Tooltip>
    );
    return (
      <div>
        <h2>一级标题</h2>
        <Icon name="baocun" className="demo-tilte-icon large" />
        <Title noDecoration type="primary">新增面试标准</Title>
        {tip}
        <h2>二级标题</h2>
        <Icon name="baocun" className="demo-tilte-icon middle" />
        <Title noDecoration type="secondary">能力项设置</Title>
        {tip}
        <h2>三级标题</h2>
        <Icon name="baocun" className="demo-tilte-icon small" />
        <Title noDecoration type="thirdary">专业能力</Title>
        {tip}
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, document.getElementById('components-title-demo-no-deco'));
````

````css
h2 {
  margin: 12px 0;
}
.demo-tilte-icon {
  color: rgba(31, 56, 88, 0.4);
  margin-right: 12px;
  vertical-align: middle;
}

.demo-tilte-icon.large {
  font-size: 28px;
}
.demo-tilte-icon.middle {
  font-size: 24px;
}
.demo-tilte-icon.small {
  font-size: 20px;
}

.demo-title-tip {
  margin-left: 12px;
  color: #3C99D8;
  vertical-align: middle;
}
````
