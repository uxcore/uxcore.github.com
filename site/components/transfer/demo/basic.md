#  基本用法

- order: 0

基本用法。

---

````jsx
import Transfer from 'uxcore-transfer';

let mockData = [];
let len = Math.random() * 10 + 10;
for (let i = 0; i < len; i++) {
    mockData.push({
        name: '内容' + (i + 1),
        value: (i + 1),
        description: '内容' + (i + 1) + '的描述',
        chosen: Math.random() * 2 > 1
    });
}

class TransferDemo extends React.Component {
    constructor(props){
        super(props);
    }

    _handleChange(data) {
        console.log(data);
    }

    render() {
        var me = this;
        return (
            <Transfer data={mockData} onChange={me._handleChange.bind(me)}/>
        );
    }
}

ReactDOM.render(
	<TransferDemo />,
  	document.getElementById('components-transfer-demo-basic')
);
````
