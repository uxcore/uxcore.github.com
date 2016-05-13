#  图片上传

- order: 2

图片上传。

---

````jsx
const Uploader = require('uxcore-uploader');
const Button = require('uxcore-button');

class Demo3 extends React.Component {
    constructor(props) {
        super(props);
        this.fileList = [
            {
                response: {
                    url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg', 
                    name: '测试用',
                    canRemove: false
                }
            },
            {
                response: {
                    url: 'http://gtms02.alicdn.com/tps/i2/TB1Xe3SMpXXXXX6XpXXTCU0QpXX-300-300.jpg', 
                    name: '测试用'
                }
            }
        ]
        this.state = {
            fileList: this.fileList
        }
    }
    handleChange(fileList) {
        let me = this;
        console.log(fileList);
        me.setState({
            fileList: fileList
        });
    }

    reset() {
        let me = this;
        me.setState({
            fileList: me.fileList
        })
    }

    render() {
        return <div>
            <Uploader fileList={this.state.fileList} 
                    autoPending={false} 
                    multiple={true} 
                    isOnlyImg={true} 
                    accept="images" 
                    name='file' 
                    url='http://eternalsky.me:8122/file/upload'
                    onCancel={ function(file) { console.log(file) }} 
                    onChange={this.handleChange.bind(this)} />
            <Button type="outline" onClick={this.reset.bind(this)}>重置fileList</Button>
        </div>
    }
}


ReactDOM.render((
    <Demo3 />
), document.getElementById('components-uploader-demo-image'));
````
