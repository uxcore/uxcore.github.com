import React from 'react';
import { ColorPicker, FontPicker } from '../picker/index';
import assign from 'object-assign';
import classNames from 'classnames';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'pattern',
            curTheme: [],
            editorFoldedStatus: {}
        };
    }
    
    static defaultProps = {
        onChangeVars: function(){}
    }
    
    componentWillMount() {
        let { themes } = this.props;
        let theme = themes[Object.keys(themes)[0]].data
        let editorFoldedStatus = {};
        theme.forEach((d) => {
            editorFoldedStatus[d.category] = true;
        });
        this.setState({
            curTheme: theme,
            editorFoldedStatus: editorFoldedStatus
        });
    }
    
    getVars() {
        let flatVars = {};
        this.state.curTheme.forEach((d) => {
            d.vars.forEach((v) => {
                flatVars[v.key] = v.value;
            });
        });
        return flatVars;
    }
    
    toggleEditMode(e) {
        e.preventDefault();
        this.setState({
            mode: this.state.mode === 'pattern' ? 'customize': 'pattern'
        });
    }
    toggleBlock(category,  e) {
        let editorFoldedStatus = this.state.editorFoldedStatus;
        editorFoldedStatus[category] = !editorFoldedStatus[category]; 
        this.setState({
            editorFoldedStatus: editorFoldedStatus
        });
    }
    
    setTheme(theme, e) {
        let editorFoldedStatus = {};
        theme.forEach((d) => {
            editorFoldedStatus[d.category] = true;
        });
        this.setState({
            mode: 'customize',
            curTheme: theme,
            editorFoldedStatus: editorFoldedStatus 
        });
    }
    
    onChangeVariable(category, colorObj) {
        let flatVars = {};
        this.state.curTheme.forEach((d) => {
            d.vars.forEach((v) => {
                if (v.key === colorObj.key) {
                    assign(v, colorObj);
                }
                flatVars[v.key] = v.value;
            });
        });
        this.props.onChangeVars(flatVars);
    }
    
    getEditorContent() {
        return this.state.curTheme.map((d, i) => {
            let editorClass = classNames({
                block: true,
                editorFolded: this.state.editorFoldedStatus[d.category] 
            });
            return (
                <dl className={editorClass} key={i}>
                    <dt onClick={this.toggleBlock.bind(this, d.category)}>{d.category}</dt>
                    <dd>
                        <ul className="editor-grid">
                            {d.vars.map((v, j) => {
                                let Picker;
                                switch (v.type) {
                                    case 'color':
                                        Picker = <ColorPicker color={v.value} name={v.key} onChange={this.onChangeVariable.bind(this, d.category)} />;
                                        break;
                                    case 'font-family':
                                        Picker = <FontPicker font={v.value} name={v.key} onChange={this.onChangeVariable.bind(this, d.category)} />;
                                        break;
                                    default:
                                        break;
                                }
                                return (
                                    <li key={`var-${i}-${j}`}>
                                        <span className="variable-title">{v.title}</span>
                                        {Picker}
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