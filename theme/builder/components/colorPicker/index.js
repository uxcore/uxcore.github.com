import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
            color: props.color
        };
    }
    
    static defaultProps = {
        onChange: function(){}
    }
    
    activePicker() {
        this.setState({
            displayColorPicker: true
        });
    }
    
    colorPicked(color) {
        this.setState({
            displayColorPicker: false,
            color: color.hex
        });
        let colorObj = {};
        colorObj[this.props.name] = color.hex;
        this.props.onChange(colorObj);
    }
    
    render() {
        let { color, displayColorPicker } = this.state;
        let { name } = this.props;
        return (
            <div className="component-color-picker">
                {displayColorPicker ?
                <div className="picker">
                    <SketchPicker
                        color={color}
                        onChangeComplete={this.colorPicked.bind(this)}
                    />
                </div>: null}
                <input name={name} className="field" type={'text'} value={color} onClick={this.activePicker.bind(this)} />
                <span className="color-preview" style={{backgroundColor: color}} onClick={this.activePicker.bind(this)}></span>
            </div>
        );
    }
}

export default ColorPicker;