#  点击弹出

- order: 1

点击弹出。

---

````jsx
let Button = require('uxcore-button');
let Popover = require('uxcore-popover');

class HoverDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let overlay = <span>这是一个气泡弹窗</span>;
        return (
            <div>
                <Popover title="这是标题，可以隐藏" overlay={overlay} placement="top" trigger='click'>
                    <Button>点击弹出</Button>
                </Popover>
            </div>
        );
    }
};

ReactDOM.render(
	<HoverDemo />,
  	document.getElementById('components-popover-demo-click')
);
````
