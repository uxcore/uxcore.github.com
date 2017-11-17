#  自定义上传区域

- order: 6

自定义上传区域。

---

````jsx
const Uploader = require('uxcore-uploader');
const Button = require('uxcore-button');

class Demo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
    };
  }

  handleChange(fileList) {
    this.setState({
      fileList,
    });
  }
  render() {
    return (<Uploader
      multiple={false}
      isOnlyImg={false}
      fileList={this.state.fileList}
      onChange={this.handleChange.bind(this)}
      name="file"
      url="http://eternalsky.me:8122/file/upload"
      locale="en"
    >
      <a>自定义文字上传</a>
    </Uploader>);
  }
}


ReactDOM.render(<Demo1 />, document.getElementById('components-uploader-demo-wrap1'));
````
