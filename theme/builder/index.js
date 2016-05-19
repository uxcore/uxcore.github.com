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
    }
    
    static defaultProps = {
    }
    
    componentDidMount() {
    }
    
    onChangeVars(vars) {
        console.log(`action build with`, vars);
        Actions.build(vars);
    }
    
    render() {
        console.log('render index:', this.state)
        return (
            <div className="builder-container">
                <link rel="stylesheet" href={this.state.cssurl} />
                <Dashboard />
                <Editor themes={THEMES} onChangeVars={this.onChangeVars.bind(this)} />
            </div>
        );
    }
}

reactMixin.onClass(Builder, Reflux.connect(Store));

ReactDOM.render(
    <Builder />,
    document.getElementById('J_BuilderMain'));