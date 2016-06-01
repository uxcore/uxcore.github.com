#  包裹按钮

- order: 6

包裹按钮。

---

````jsx
const Uploader = require('uxcore-uploader');
const Button = require('uxcore-button');

class Demo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    handleChange(fileList) {
        this.setState({
            fileList: fileList
        })
    }
    render() {
        return <Uploader autoPending={false} 
                    multiple={false} 
                    isOnlyImg={false}
                    fileList={this.state.fileList}
                    onChange={this.handleChange.bind(this)} 
                    name='file' 
                    url='http://eternalsky.me:8122/file/upload' 
                    locale="en">
                    <Button size="large">自定义上传按钮</Button>
                </Uploader>
    }
}


ReactDOM.render(<Demo1 />, document.getElementById('components-uploader-demo-wrap1'));
````
