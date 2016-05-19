import React from 'react';
import ColorPicker from '../colorPicker/index';
import assign from 'object-assign';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'pattern',
            curTheme: []
        };
    }
    
    static defaultProps = {
        onChangeVars: function(){}
    }
    
    componentWillMount() {
        let {themes} = this.props;
        this.setState({
            curTheme: themes[Object.keys(themes)[0]].data
        });
    }
    
    toggleEditMode(e) {
        e.preventDefault();
        this.setState({
            mode: this.state.mode === 'pattern' ? 'customize': 'pattern'
        });
    }
    toggleBlock(e) {
        
    }
    
    setTheme(theme, e) {
        this.setState({
            mode: 'customize',
            curTheme: theme
        });
    }
    
    onChangeVariable(colorObj) {
        let flatVars = {};
        this.state.curTheme.forEach((d) => {
            var o = {};
            d.vars.forEach((v) => {
                o[v.key] = v.value;
            });
            flatVars = assign(flatVars, o);
        });
        assign(flatVars, colorObj);
        console.log('onChangeVariable', flatVars, colorObj);
        this.props.onChangeVars(flatVars);
    }
    
    getEditorContent() {
        return this.state.curTheme.map((d, i) => {
            return (
                <dl className="block" key={i}>
                    <dt onClick={this.toggleBlock.bind(this)}>{d.category}</dt>
                    <dd>
                        <ul className="editor-grid">
                            {d.vars.map((v, j) => {
                                return (
                                    <li key={`var-${i}-${j}`}>
                                        <span className="variable-title">{v.title}</span>
                                        <ColorPicker color={v.value} name={v.key} onChange={this.onChangeVariable.bind(this)} />
                                    </li>
                                )
                            })}
                        </ul>
                    </dd>
                </dl>
            )
        })
    }
    
    render() {
        let editorTitle, displayContent;
        let { themes } = this.props;
        let { mode } = this.state;
        console.log(themes, this.state.curTheme);
        if (mode === 'pattern') {
            editorTitle = '自定义主题';
            displayContent = (
                <dl>
                    <dt>默认主题色</dt>
                    <dd>
                        <ul className="theme-chooser">
                            {
                                Object.keys(themes).map((key, i) => {
                                    return <li key={i} onClick={this.setTheme.bind(this, themes[key].data)}>{themes[key].name}</li>;
                                })
                            }
                        </ul>
                    </dd>
                </dl>
            );
        } else {
            editorTitle = '返回';
            displayContent = this.getEditorContent();
        }
        return (
            <div className="editor-board">
                <div className="editor-head">
                    <a href="#" className={`editor-title mode-${mode}`} onClick={this.toggleEditMode.bind(this)}>{editorTitle}</a>
                </div>
                {displayContent}
            </div>
        );
    }
}