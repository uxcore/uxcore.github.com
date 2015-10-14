# 尺寸和样式

- order: 2

配置尺寸和样式

---

````jsx
import Tabs, {TabPane} from 'uxcore-tabs';

class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style: 'underline',
            size: 'normal'
        };
    }
    _updateState(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    render(){
        let sizes = ['mini', 'normal', 'large'];
        let styles = ['underline', 'line', 'topline', 'brick'];
        return (
            <div>
                <p>
                    <label>size: </label>
                    {sizes.map((size) => {
                        return <label><input type="radio" name="size" value={size} onClick={this._updateState.bind(this)} checked={size === this.state.size} /> {size} </label>;
                    })}
                </p>
                <p>
                    <label>style: </label>
                    {styles.map((style) => {
                        return <label><input type="radio" name="style" value={style} onClick={this._updateState.bind(this)} checked={style === this.state.style} />{style}</label>;
                    })}
                </p>
                <Tabs defaultActiveKey="2" size={this.state.size} tabStyle={this.state.style}>
                  <TabPane tab="tab 1" key="1">选项卡一</TabPane>
                  <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                  <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                </Tabs>
            </div>
        );
    }
}

ReactDOM.render(
  <Demo />
, document.getElementById('components-tabs-demo-style'));
````
