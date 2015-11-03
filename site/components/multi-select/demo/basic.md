# 基本

- order: 0

基本使用

---

````jsx

let classnames = require('classnames');

let MultiSelect = require('uxcore-multi-select');

let Item = MultiSelect.Item;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ["item2", "item15"],
            disabled: false
        }
    }

    handleChange(value){
        this.setState({
            value: value,
            disabled: false
        })
        console.log('onChange', arguments)
    }
    handleSubmit(){
        console.log('onSubmit', arguments)
    }

    render() {
      let text= ['汉皇重色思倾国','御宇多年求不得','杨家有女初长成','养在深闺人未识',
        '天生丽质难自弃','一朝选在君王侧','回眸一笑百媚生','六宫粉黛无颜色',
        '春寒赐浴华清池','温泉水滑洗凝脂','侍儿扶起娇无力','始是新承恩泽时',
        '云鬓花颜金步摇','芙蓉帐暖度春宵','春宵苦短日高起','从此君王不早朝'];

        return (
            <div>
                <MultiSelect
                    className="test-classname-select"
                    dropdownClassName="test-classname-dropdown"
                    value={this.state.value}
                    disabled={this.state.disabled}
                    placeholder="默认提示"
                    titleBreakStr="、"
                    optionLabelProp="text"
                    showSelectAll={true}
                    showClear={true}
                    onChange={this.handleChange.bind(this)}
                    onSubmit={this.handleSubmit.bind(this)}>
                  {text.map(function(item, index) {
                    return <Item value={'item' + index} text={item} key={index} />
                  })}
                </MultiSelect>
            </div>
        );
    }
};


ReactDOM.render(
  <Demo />,
 document.getElementById('components-multi-select-demo-basic'));
````
