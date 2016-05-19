# 文字

- order: 2

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
            <Badge text={"NEW"}>
                <a href="#" className="head-example"></a>
            </Badge>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-badge-demo-basic'));
````
