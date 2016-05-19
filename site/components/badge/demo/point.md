# 小点

- order: 1

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
            <Badge dot={true}>
                <a href="#" className="head-example"></a>
            </Badge>
        );
    }
};

ReactDOM.render(
    <Demo />
, document.getElementById('components-badge-demo-basic'));
````
