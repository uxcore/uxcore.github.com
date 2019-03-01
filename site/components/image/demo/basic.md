# 点击图标复制代码

- order: 0

---

````jsx
import { Image } from 'uxcore'

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delayRender: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        delayRender: true,
      });
    }, 3000);
  }

  render() {
    const { delayRender } = this.state;
    const tfsImage = 'https://img.alicdn.com/tfs/TB1ltSkD1GSBuNjSspbXXciipXa-300-300.jpg#a=1';
    const djangoImage = 'https://dl.django.t.taobao.com/rest/1.0/image?fileIds=IRj9SMzrT-mcifkVw_rEswAAACAAAQED&acl=43496dac05a29fe5043e2fa8283c455d&token=B1lIu_0jZUaOn3rFgnoq4wABUYAAAAFkrNL2pwAAACAAAQED&timestamp=1531982807064';
    const ossImage = 'https://alinw-oss.alicdn.com/alinw-node-admin-public-oss/2018-7-12/1531372852377/（阿里味儿首页）脱贫banner（280x180）.jpg?x-oss-process=image/resize,m_fixed,h_360,w_560';

    const options = {
      width: 70,
      height: 80,
      multiple: 2,
    };

    const ossOptions = {
      width: 70,
      height: 80,
      multiple: 2,
      adapterType: 'oss',
    };

    return (
      <div>
        <h2>
          tfs adapter
        </h2>
        <img alt="" src={Image.adapter.tfs(tfsImage, options)} />
        <h2>
          django Adapter
        </h2>
        <img alt="" src={Image.adapter.django(djangoImage, options)} />
        <h2>
          oss Adapter
        </h2>
        <img alt="" src={Image.adapter.oss(ossImage, ossOptions)} />
        <h2>
          use Image Component
        </h2>
        <Image
          className=""
          src="https://img.alicdn.com/tfs/TB1ltSkD1GSBuNjSspbXXciipXa-300-300.jpg"
          alt=""
          title=""
          lazyload
          enableUrlAdapter
          adapterType="tfs"
          height="100px"
        />
        <span>
          测试左侧图片是否可以占位
        </span>
        <h2>
          render Image after document is loaded after 3s
        </h2>
        {
          delayRender ? (
            <Image
              className=""
              src="https://img.alicdn.com/tfs/TB1ltSkD1GSBuNjSspbXXciipXa-300-300.jpg"
              alt=""
              title=""
              lazyload
              enableUrlAdapter
              adapterType="tfs"
              width="100px"
              height="100px"
            />
          ) : null
        }
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-image-demo-basic'));
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
