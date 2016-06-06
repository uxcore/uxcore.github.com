import React from 'react';
import Button from 'uxcore-button';
import Dialog from 'uxcore-dialog';
import Alert from 'uxcore-alert';
import Steps from 'uxcore-steps';
import Calendar from 'uxcore-calendar';
import Select, { Option } from 'uxcore-select2';
import Pagination from 'uxcore-pagination';
import Tabs, { TabPane } from 'uxcore-tabs';
import Badge from 'uxcore-badge';
import Message from 'uxcore-message';
import { Line, Circle } from 'uxcore-progress';
import Switch from 'uxcore-switch';
import Crumb from 'uxcore-crumb';
import RateDemo from './demos/Rate';
import TableDemo from './demos/Table';
import FormDemo from './demos/Form';


let steps = [{
    title: '已完成',
    description: '信息的描述'
}, {
    title: '进行中',
    description: '信息的描述'
}, {
    title: '待运行',
    description: '信息的描述'
}].map(function(s, i) {
    return (
        <Steps.Step key={i} title={s.title} description={s.description} />
    );
});

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false
        };
    }
    toggleDialog() {
        this.setState({
            dialogVisible: !this.state.dialogVisible
        });
    }
    
    handleMessageClick() {
        Message['success']('Message提示！')
    }
    
    render() {
        return (
            <div className="dashboard-wrapper">
                
                <div className="demo-wrap">
                    <div className="wrap-title">表单</div>
                    <Crumb className="crumb-style crumb-root">
                        <Crumb.Item href="#" className="crumb-item-style">首页</Crumb.Item>
                        <Crumb.Item href="#">一级页面</Crumb.Item>
                        <Crumb.Item href="#">二级页面</Crumb.Item>
                        <Crumb.Item className="crumb-item-style">三级页面</Crumb.Item>
                    </Crumb>
                    <div style={{marginTop: 20}}>
                        <FormDemo></FormDemo>
                        <div style={{marginLeft: 100}}>
                            <Calendar.CalendarPanel prefixCls="kuma-calendar" />
                        </div>
                    </div>
                </div>
                <div className="demo-wrap">
                    <TableDemo></TableDemo>
                </div>
                <div className="demo-wrap">
                    <div style={{display: 'inline-block'}}>
                        <Badge count={5}>
                            <a style={{
                                width: 50,
                                height: 50,
                                borderRadius: 3,
                                display: 'inline-block',
                                background: '#e8e8e8'
                            }}></a>
                        </Badge>
                    </div>
                    <div style={{display: 'inline-block', marginLeft: 20}}>
                        <Badge dot={true}>
                            <a style={{
                                width: 50,
                                height: 50,
                                borderRadius: 3,
                                display: 'inline-block',
                                background: '#e8e8e8'
                            }}></a>
                        </Badge>
                    </div>
                </div>
                <div className="demo-wrap">
                    <RateDemo />
                    <Switch checkedChildren="显示" unCheckedChildren="隐藏" disabled={false} checked={true} />
                    <Button type="primary" onClick={this.toggleDialog.bind(this)} style={{marginLeft: 20}}>对话框</Button>
                    <Button type="primary" onClick={this.handleMessageClick.bind(this)} style={{marginLeft: 20}}>Message提示</Button>
                    <Dialog
                        title="UXCORE" visible={this.state.dialogVisible}
                        onOk={this.toggleDialog.bind(this)}
                        onCancel={this.toggleDialog.bind(this)}
                    />
                </div>
                <div className="demo-wrap">
                    <div style={{marginBottom: 20}}>
                        <Line percent={30} />
                    </div>
                    <div style={{display: 'inline-block', marginRight: 20}}>
                        <Circle percent={70} status="exception" />
                    </div>
                    <div style={{display: 'inline-block'}}>
                        <Circle percent={100} status="success" />
                    </div>
                </div>
                <div className="demo-wrap">
                    <div>
                        <Alert className="alert1" message={' 这是一个 message'} type="message" hasContainer={true}/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Alert message={' 这是一个 error'} type="error" hasContainer={true}/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Alert message={' 这是一个 warning'} type="warning" hasContainer={true}/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Alert message={' 这是一个 success'} type="success" hasContainer={true}/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Alert message={' 这是一个 question'} type="question" hasContainer={true}/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Alert message={' 这是一个 stop'} type="stop" hasContainer={true}/>
                    </div>
                    <div style={{marginTop: 10}}>
                        <Alert message={' 这是一个 wait'} type="wait" hasContainer={true}/>
                    </div>
                </div>
                <div className="demo-wrap">
                    <Steps type="title-on-top" current={1}>{steps}</Steps>
                </div>
                <div className="demo-wrap">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="tab 1" key="1">
                            <Tabs defaultActiveKey="1-2" type="brick">
                                <TabPane tab="tab 1" key="1-1">选项卡一</TabPane>
                                <TabPane tab="tab 2" key="1-2">选项卡二</TabPane>
                                <TabPane tab="tab 3" key="1-3">选项卡三</TabPane>
                            </Tabs>
                        </TabPane>
                        <TabPane tab="tab 2" key="2">选项卡二</TabPane>
                        <TabPane tab="tab 3" key="3">选项卡三</TabPane>
                    </Tabs>
                </div>
                <div className="demo-wrap">
                    <Select defaultValue="lucy" style={{width:400}}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>Disabled</Option>
                        <Option value="yiminghe">yiminghe</Option>
                    </Select>
                    <Select multiple
                        style={{marginTop: 20, width:400}}
                        defaultValue={['a1', 'b2']}>
                        <Option key={'a1'}>{'a1'}</Option>
                        <Option key={'b2'}>{'b2'}</Option>
                        <Option key={'c3'}>{'c3'}</Option>
                        <Option key={'d4'}>{'d4'}</Option>
                        <Option key={'e5'}>{'e5'}</Option>
                        <Option key={'f6'}>{'f6'}</Option>
                        <Option key={'g7'}>{'g7'}</Option>
                        <Option key={'h8'}>{'h8'}</Option>
                    </Select>
                </div>
                <div className="demo-wrap">
                     <Pagination showSizeChanger={true} total={500} />
                </div>
            </div>
        );
    }
}