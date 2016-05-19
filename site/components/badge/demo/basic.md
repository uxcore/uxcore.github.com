# 基本使用

- order: 0

---

````jsx
let Badge = require('uxcore-badge');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Badge count={5}>
                <a href="#" className="head-example"></a>
            </Badge>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-badge-demo-basic'));
````
