# 精简版

- order: 1

精简的 tinymce。

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
        const config = {
            menubar: false,
            toolbar1: 'fontselect fontsizeselect | bold italic underline strikethrough removeformat | forecolor backcolor',
            toolbar2: false,
            statusbar: false
        };
        return (
            <div style={{width: 1000}}>
                <Tinymce
                    onKeyup={me.handleKeyUp.bind(me)}
                    onChange={me.handleChange.bind(me)} 
                    config={config} />
            </div>
        );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-tinymce-demo-simple'));
````
