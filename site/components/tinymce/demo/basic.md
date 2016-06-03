# 基本使用

- order: 0

基本使用。

---

````jsx
const classnames = require('classnames');

const Tinymce = require('uxcore-tinymce');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleKeyUp(e, editor) {
        console.log(editor.getContent());
    }

    handleChange(e, editor) {
        console.log(editor.getContent());
    }

    render() {
        let me = this;
        return (
            <div style={{width: 1000}}>
                <Tinymce
                    onKeyup={me.handleKeyUp.bind(me)}
                    onChange={me.handleChange.bind(me)}
                    placeholder={'placeholder'}/>
            </div>
        );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-tinymce-demo-basic'));
````
