# 点击图标复制代码

- order: 0

---

````jsx
const Clipboard = require('react-clipboard.js');
const Message = require('uxcore-message');
const Icon = require('uxcore-icon');

console.log(Icon);

const icons = [
  'xiala',
  'liucheng',
  'bingtu',
  'lianjie',
  'dayin',
  'fujian',
  'ren',
  'paixu-jiangxu',
  'paixu-shengxu',
  'renyuansousuo',
  'renyuanzengjia',
  'shanjian',
  'richeng',
  'shangchuan',
  'shouji',
  'shoucang',
  'shezhi',
  'shouye',
  'shuaxin',
  'tuandui',
  'shu',
  'weizhi',
  'xiazai',
  'xinwen',
  'xinwen1',
  'yinpin',
  'xiangji',
  'yingyong',
  'youxiang',
  'zengjia',
  'zhexiantu',
  'number',
  'number1',
  'number2',
  'number3',
  'number4',
  'number5',
  'number6',
  'number7',
  'number8',
  'number9',
  'PC',
  'number10',
  'tupian',
  'shipin',
  'yibiaopan',
  'wendang1',
  'zhuzhuangtu1',
  'sousuo',
  'shanchu',
  'shexiangtou',
  'number-xianxing',
  'number-xianxing1',
  'number-xianxing2',
  'number-xianxing3',
  'number-xianxing4',
  'number-xianxing5',
  'number-xianxing6',
  'number-xianxing7',
  'number-xianxing8',
  'number-xianxing9',
  'number-xianxing10',
  'riqi',
  'riqiqujian',
  'biaoge1',
  'biaoqian',
  'tuichu',
  'zhanghaobianji',
  'zhanghaoguanli',
  'pinglun',
  'renyuanmingpian',
  'renyuan',
  'top',
  'right',
  'left',
  'bottom',
  'left_double',
  'right_double',
  'xiaolian-line',
  'kulian-full',
  'caozuo-xingji-line',
  'caozuo-xingji-full',
  'kulian-line',
  'xiaolian-full',
  'xianshi',
  'chuangjiansiyoumoban',
  'jinggao',
  'biaodanlei-tongyongqingchu',
  'suo',
  'biaoqian-qingchu',
  'biaoqianxuanze-duoxuan-gou',
  'jinggao-full',
  'yiwen-full',
  'chenggong-full',
  'tishi-full',
  'wangwang',
  'dianhua',
  'dingding',
  'youxiang-full',
  'loading-icon-round',
  'caozuo-shoucang-full',
  'aite',
  'huxiangguanzhu',
  'zengjia1',
  'duigou',
  'zidingyilie',
  'suoxiao',
  'fangda',
  'fanyi',
  'fanyi-full',
];

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {icons.map((name, index) => (
          <Clipboard
            className="demo-item-clipboard"
            component="div"
            key={index}
            data-clipboard-text={`<Icon name="${name}" />`}
            onSuccess={() => {
              Message.success('代码已复制到粘贴板');
            }}
          >
            <div className="demo-item" key={name}>
              <Icon name={name} className="demo-class" />
              <div>{name}</div>
            </div>
          </Clipboard>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-icon-demo-basic'))
````

````css
.demo-item {
  display: inline-block;
  width: 70px;
  height: 70px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  background: #fafafa;
  border-radius: 3px;
  
}

.demo-item icon {
  font-size: 28px;
}

.demo-item-clipboard {
  cursor: pointer;
  display: inline-block;
  margin: 10px;
}
````