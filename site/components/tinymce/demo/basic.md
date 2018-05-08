# 基本使用

- order: 0

基本使用。

---

````jsx
import classnames from 'classnames';
import { Tinymce } from 'uxcore';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleKeyUp(e, editor) {
    console.log(editor.getContent());
  }

  handleChange(e, editor) {
    console.log(editor.getContent());
  }

  render() {
    const me = this;
    return (
      <Tinymce
        onKeyup={me.handleKeyUp.bind(me)}
        onChange={me.handleChange.bind(me)}
        placeholder={'placeholder'}
      />
    );
  }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-tinymce-demo-basic'));
````
