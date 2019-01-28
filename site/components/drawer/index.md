# Drawer

- category: Components
- chinese: 抽屉
- order: 16
- subtype: Presentation

---

当需要一个面板来做页面外操作，比如切换导航、应用中心等。
当需要一个面板来控制父窗体的内容，承载的信息量介于弹窗与新页面之间，比如新建、导入等。
当需要一个面板来预览内容，承载的信息量介于弹窗与新页面之间

## Props

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| title      | Title of the drawer | String/React.Element    | 无 |
| visible    | current drawer's visible status  | Boolean    | false |
| placement   | current drawer's direction  | left/right    | right |
|size         | current drawer's size | small(400px)/normal(780px),large(1160px) | noraml|
| onOk       | the callback when ok clicked | function | 无 |
| onCancel   | the callback when dialog closed  | function  | 无  |
| width      | drawer width | String or Number |            |
| footer     | footer of the drawer       | React.Element    |  |
| showFooter | show footer of the drawer       | Boolean    |  true|
| closable | whether show close button and click mask to close | Boolean | true |
| maskClosable | whether click mask to close, this prop will be ignored if set closable prop to false | Boolean | true |
| locale     | 国际化(包括 `zh-cn`, `en-us`, 和 `pl-pl`)    | String     |  `zh-cn` |
| className | additional className for drawer | string | |
| wrapClassName | additional className for drawer wrap | string | `vertical-center-dailog` for vertical align the drawer |
| style | Root style for drawer element.Such as width, height | Object | {} |
| zIndex |  | Number | |
| bodyStyle | body style for drawer body element.Such as height | Number | {} |

## Usage

1、基本信息预览，点击遮罩层可以关闭
```javascript
closeDrawer(state) {
    this.setState({
      [state]: false,
    });
  },
 
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
      </ul>
  </Drawer>
```
2、包含相应的操作，如果是包含操作行为，可像Uxcore.dialog一样自定义footer，且指定弹窗的maskClosable为false，防止误操作
```javascript
 <Drawer
      visible={visible}
      title="抽屉组件"
      size="normal"
      placement="right"
      onOk={this.handleOk}
      maskClosable={false}
      onCancel={this.closeDrawer.bind(this, 'visible')}
      footer={}
    >
    <div className="demo-mode">
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
```

3、二级抽屉
```javascript
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
```