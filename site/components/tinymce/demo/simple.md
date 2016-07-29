# 精简版

- order: 1

精简的 tinymce。

---

````jsx
import classnames from 'classnames';
import Tinymce from 'uxcore-tinymce';

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
            <Tinymce
                onKeyup={me.handleKeyUp.bind(me)}
                onChange={me.handleChange.bind(me)} 
                config={config} />
        );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-tinymce-demo-simple'));
````
