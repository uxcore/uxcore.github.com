#  图片可视化上传

- order: 3

通过 isVisual 参数控制展示方式  
通过修改 accept 可以指定可以上传的图片类型，accept 的使用方式[见此](https://github.com/uxcore/uploadcore/blob/master/README.md#options-配置)  
注意：[配置过多的 accept 会导致 chrome 下打开文件对话框缓慢](http://stackoverflow.com/questions/39187857/inputfile-accept-image-open-dialog-so-slow-with-chrome)

---

````jsx
import { Uploader } from 'uxcore';
import { Button } from 'uxcore';

class Demo3 extends React.Component {
  constructor(props) {
    super(props);
    this.fileList = [
      {
        response: {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          name: '测试用',
        },
      },
      {
        response: {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          name: '测试用',
        },
      },
    ];
    this.state = {
      fileList: this.fileList,
    };
  }
  handleChange(fileList) {
    const me = this;
    console.log(fileList);
    me.setState({
      fileList,
    });
  }

  render() {
    return (<div>
      <Uploader fileList={this.state.fileList}
        multiple
        isOnlyImg
        isVisual
        accept="jpg,jpeg,png,gif,webp,bmp"
        name="file"
        url="http://eternalsky.me:8122/file/upload"
        onCancel={function (file) { console.log(file); }}
        onChange={this.handleChange.bind(this)}
      />
    </div>);
  }
}


ReactDOM.render((
  <Demo3 />
), document.getElementById('components-uploader-demo-image-visual'));
````
