import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard/index';
import Editor from './components/editor/index';
import reactMixin from 'react-mixin';
import Actions from './actions';
import Store from './store';

import {THEMES} from './variables/config';

console.log(THEMES);

class Builder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            css: ''
        };
    }
    
    static defaultProps = {
    }
    
    componentDidMount() {
        document.getElementById('J_DownloadCss').onclick = function(){
            let vars = this.refs.editor.getVars(); 
            Actions.download('cssfile', vars);
            
        }.bind(this);
        document.getElementById('J_DownloadVariable').onclick = function(){
            let vars = this.refs.editor.getVars();
            Actions.download('variables', vars);
        }.bind(this);
    }
    
    onChangeVars(vars) {
        console.log(`action build with`, vars);
        Actions.build(vars);
    }
    
    render() {
        console.log('render index:', this.state)
        return (
            <div className="builder-container">
                <style>{this.state.css}</style>
                <Dashboard />
                <Editor ref="editor" themes={THEMES} onChangeVars={this.onChangeVars.bind(this)} />
            </div>
        );
    }
}

reactMixin.onClass(Builder, Reflux.connect(Store));

ReactDOM.render(
    <Builder />,
    document.getElementById('J_BuilderMain'));