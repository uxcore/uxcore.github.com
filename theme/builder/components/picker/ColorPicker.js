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
    
    hidePicker() {
        this.setState({
            displayColorPicker: false
        });
    }
    
    colorPicked(color) {
        this.setState({
            displayColorPicker: false,
            color: color.hex
        });
        this.props.onChange({
            key: this.props.name,
            value: color.hex
        });
    }
    
    render() {
        let { color, displayColorPicker } = this.state;
        let { name } = this.props;
        return (
            <div className="component-picker component-color-picker">
                {displayColorPicker ?
                <div className="picker">
                    <div className="pickerCover" onClick={this.hidePicker.bind(this)}></div>
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