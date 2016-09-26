# 基本使用

- order: 0

基本使用。

---

````jsx
const Tag = require('uxcore-tag');
const { Item } = Tag;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let me = this;
        return (
            <Tag addTags={false}>
                <Item>用户体验</Item>
                <Item>精品打造</Item>
                <Item>精益求精</Item>
            </Tag>
        );
    }
};

ReactDOM.render(
  <Demo />
, document.getElementById('components-tag-demo-basic'));
````
