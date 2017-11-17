#  附带提示文字

- order: 1

附带提示文字。

---

````jsx
const Uploader = require('uxcore-uploader');

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
    const tips = <span className="tips">限制0.5M以内<em>（支持格式：.doc; .docx; .xls; .xlsx）</em></span>;
    return (<Uploader
      multiple={false}
      isOnlyImg={false}
      tips={tips}
      fileList={this.state.fileList}
      onChange={this.handleChange.bind(this)}
      name="file"
      url="http://eternalsky.me:8122/file/upload"
      locale="en"
    />);
  }
}

ReactDOM.render(
	                    <Demo1 />,
  	document.getElementById('components-uploader-demo-tips')
);
````
