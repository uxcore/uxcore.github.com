import React from 'react';
import Button from 'uxcore-button';
import Dialog from 'uxcore-dialog';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dashboard-wrapper">
                <Button type="primary">一级按钮</Button>
                <Button type="outline">二级按钮</Button>
                <Button type="secondary">次要按钮</Button>
            </div>
        );
    }
}