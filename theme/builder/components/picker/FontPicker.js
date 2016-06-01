import React from 'react';

class FontPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            font: props.font,
            focus: false
        };
    }
    
    static defaultProps = {
        onChange: function(){}
    }
    
    onChangeFont(e) {
        this.setState({
            font: e.target.value
        });
    }
    
    onInputFocus() {
        this.setState({
            focus: true
        });
    }
    
    onInputBlur() {
        this.setState({
            focus: false
        });
    }
    
    render() {
        let previewPopup;
        if (this.state.focus) {
            previewPopup = <div style={{'fontFamily': this.state.font}} className={'font-preview'}><p>the quick brown fox jumps over the lazy dog</p><p>敏捷的棕毛狐狸从懒狗身上跃过</p></div>;
        }
        return (
            <div className="component-picker component-font-picker">
                <input type="text" className="field" defaultValue={this.props.font} value={this.state.font} onChange={this.onChangeFont.bind(this)} onFocus={this.onInputFocus.bind(this)} onBlur={this.onInputBlur.bind(this)} />
                {previewPopup}
            </div>
        );
    }
}

export default FontPicker;