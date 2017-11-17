#  查看态

- order: 4

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
    return (
      <div>
        <h2>附件型</h2>
        <Uploader
          fileList={this.state.fileList}
          readOnly
          name="file"
          url="http://eternalsky.me:8122/file/upload"
          onCancel={function (file) { console.log(file); }}
          onChange={this.handleChange.bind(this)}
        />
        <h2>图片型</h2>
        <Uploader
          fileList={this.state.fileList}
          isOnlyImg
          readOnly
          accept="jpg,jpeg,png,gif,webp,bmp"
          name="file"
          url="http://eternalsky.me:8122/file/upload"
          onCancel={function (file) { console.log(file); }}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo3 />,
    document.getElementById('components-uploader-demo-readonly')
);
````
