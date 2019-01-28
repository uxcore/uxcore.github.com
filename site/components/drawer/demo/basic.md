# 基本使用

- order: 0

可以同时展开多个面板，这个例子默认展开了第一个。
---

````jsx
import Button from 'uxcore-button';
import Form from 'uxcore-form';
import Drawer from 'uxcore-drawer';

const {
  Constants,
  InputFormField: Input,
  DateFormField: Date,
  TextAreaFormField: TextArea,
  Validators,
} = Form;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicVisible: false,
      menuVisible: false,
      visible: false,
      mode: Constants.MODE.EDIT,
      zoneVisible: false,
    };
    this.handleChangeMode = this.handleChangeMode.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.showDrawer = this.showDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  handleChangeMode() {
    const { mode } = this.state;
    this.setState({
      mode: mode === Constants.MODE.EDIT ? Constants.MODE.VIEW : Constants.MODE.EDIT,
    });
  }

  handleOk() {
    this.closeDrawer();
  }

  showDrawer(state) {
    this.setState({
      [state]: true,
    });
  }

  closeDrawer(state) {
    this.setState({
      [state]: false,
    });
  }

  render() {
    const {
      visible, mode, basicVisible, menuVisible, zoneVisible,
    } = this.state;
    return (
      <div>
        <div className="basic-demo">
          <h2>左侧导航，无操作按钮，点击遮罩层可以关闭</h2>
          <Button onClick={this.showDrawer.bind(this, 'menuVisible')}> 基本信息 </Button>
        </div>
        <div className="basic-demo">
          <h2>展示基本信息，无操作按钮，点击遮罩层可以关闭</h2>
          <p>遮罩层分为 small(400px) normal(780px)，large(1160px)三种size,也可自定义width</p>
          <Button onClick={this.showDrawer.bind(this, 'basicVisible')}> 基本信息 </Button>
        </div>
        <div className="basic-demo">
          <h2>可以放入操作，如表单的填写</h2>
          <p>如果是包含操作行为，可像Uxcore.dialog一样自定义footer，且指定弹窗的maskClosable为false，防止误操作</p>
          <Button onClick={this.showDrawer.bind(this, 'visible')}>操作</Button>
        </div>
        <Drawer
          visible={menuVisible}
          title="菜单导航"
          size="small"
          placement="left"
          showFooter={false}
          closable={false}
          onCancel={this.closeDrawer.bind(this, 'menuVisible')}
        >
          <ul className="demo-menu">
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
            <li>菜单六</li>
          </ul>
        </Drawer>

        <Drawer
          visible={basicVisible}
          title="基本信息展示"
          width={600}
          placement="right"
          showFooter={false}
          closable={false}
          onCancel={this.closeDrawer.bind(this, 'basicVisible')}
        >
          <p>text text text texttext</p>
          <p>text text text texttext</p>
          <p>text text text texttext</p>
          <p>text text text texttext</p>
          <Button
            onClick={this.showDrawer.bind(this, 'zoneVisible')}
            style={{ marginTop: '20px' }}
            key="show"
          >
            二级抽屉
          </Button>
          <Drawer
            visible={zoneVisible}
            title="二级组件"
            size="normal"
            placement="right"
            onOk={this.handleOk}
            closable={false}
            showFooter={false}
            onCancel={this.closeDrawer.bind(this, 'zoneVisible')}
          >
            <div>这是第二层的抽屉组件</div>
          </Drawer>
        </Drawer>
        <Drawer
          visible={visible}
          title="抽屉组件"
          size="small"
          placement="right"
          onOk={this.handleOk}
          maskClosable={false}
          onCancel={this.closeDrawer.bind(this, 'visible')}
          footer={[
            <p className="showNum">已选：33333</p>,
            <Button type="secondary" onClick={this.handleChangeMode} key="changeMode">转换模式</Button>,
            <Button onClick={this.handleOk.bind(this, 'visible')} key="submit">提交</Button>,
          ]}
        >
          <div className="demo-mode" style={{ height: '1000px' }}>
            <Form
              ref={(c) => { this.form = c; }}
              className="demo-basic-form"
              jsxvalues={{
                theme: 'Form 展示',
                location: 'Uxcore 站点',
                date: ['2015-10-15', '2015-11-15'],
                content: '这是一个 Form 的模式转换页面。',
              }}
              jsxmode={mode}
            >
              <Input jsxname="theme" jsxlabel="主题" required jsxplaceholder="请输入主题" />
              <Input
                jsxname="location"
                jsxlabel="地点"
                required
                jsxplaceholder="请输入地点"
                jsxrules={[
                  { validator: Validators.isNotEmpty, errMsg: '不能为空' },
                ]}
              />
              <Date jsxname="date" jsxlabel="时间" jsxtype="cascade" autoMatchWidth />
              <TextArea
                jsxname="content"
                jsxlabel="内容"
                required
                jsxrules={[
                  { validator: Validators.isNotEmpty, errMsg: '不能为空' },
                ]}
              />
            </Form>
          </div>

        </Drawer>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-drawer-demo-basic'));
````