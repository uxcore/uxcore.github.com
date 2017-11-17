#  图片上传

- order: 2

通过修改 accept 可以指定可以上传的图片类型，accept 的使用方式[见此](https://github.com/uxcore/uploadcore/blob/master/README.md#options-配置)  
注意：[配置过多的 accept 会导致 chrome 下打开文件对话框缓慢](http://stackoverflow.com/questions/39187857/inputfile-accept-image-open-dialog-so-slow-with-chrome)

---

````jsx
const Uploader = require('uxcore-uploader');
const Button = require('uxcore-button');

class Demo3 extends React.Component {
  constructor(props) {
    super(props);
    this.fileList = [
      {
        name: 'image.jpg',
        response: {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
          canRemove: false,
        },
      },
      {
        name: 'image2.jpg',
        response: {
          url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg',
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

  reset() {
    const me = this;
    me.setState({
      fileList: me.fileList,
    });
  }

  render() {
    return (<div>
      <Uploader fileList={this.state.fileList}
        multiple
        isOnlyImg
        accept="jpg,jpeg,png,gif,webp,bmp"
        name="file"
        url="http://eternalsky.me:8122/file/upload"
        onCancel={function (file) { console.log(file); }}
        onChange={this.handleChange.bind(this)}
      />
      <Button type="outline" onClick={this.reset.bind(this)}>重置fileList</Button>
    </div>);
  }
}


ReactDOM.render((
  <Demo3 />
), document.getElementById('components-uploader-demo-image'));
````
