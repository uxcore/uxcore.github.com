# 基本

- order: 0

基本使用

---

````jsx

import classnames from 'classnames';;

import { NoticeIcon } from 'uxcore';


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hahah',
    };
  }
  onBottomClick= () => {
    console.log('Bottom action bar is clicked');
  }
  onTopClick = () => {
    console.log('Top action is activated');
  }
  onVisibleChange = (isDisplay) => {
    console.log(isDisplay);
  }
  onIconClick = (text) => {
    console.log(text);
  }
  render() {
    const topAction = <span onClick={this.onTopClick}>操作</span>;
    const bottomAction = [
        { "text":"操作一", "action": function(){ console.log("Left Clicked") } },
        { "text":"操作二", "action": function(){ console.log("Middle Clicked") } },
        { "text":"操作三", "action": function(){ console.log("Right Clicked") } }
      ]
    // const bottomAction = { text: '查看通知', action() { console.log('Clicked'); } };
    // const bottomAction = _ => <Button/>
    return (
      <div>
        <NoticeIcon
          overlayClassName="test-popover"
          emptyIcon="active_empty"
          topAction={topAction}
          bottomAction={bottomAction}
          className="test"
          dot
          enablePopover
          trigger="click"
        >
          <div style={{ width:'100%',height:'100px', lineHeight: '100px', textAlign: 'center' }}>这里可以自定义内容</div>
        </NoticeIcon>
      </div>
    );
  }
}


ReactDOM.render(
  <Demo />,
 document.getElementById('components-notice-icon-demo-basic'));
````
