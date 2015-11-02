# 常见场景

- order: 3
---

````jsx
let Layout = require('uxcore-layout');
let Menu = require('uxcore-menu');
let Form = require('uxcore-form');
let Button = require('uxcore-button');
let Table = require('uxcore-table');
let {Left, Right} = Layout;
let SubMenu = Menu.SubMenu;
let {
    InputFormField,
    FormRow,
    OtherFormField,
    DateFormField,
    CascadeSelectFormField,
    SelectFormField,
    CheckboxGroupFormField
} = Form;
let MenuItem = Menu.Item;
let Item = CheckboxGroupFormField.Item;
let classnames = require('classnames');

var casData = {
    length: 2,
    contents: [
        {
            value: "a",
            text: "A",
            contents: [
                {
                    value: "ab",
                    text: "AB"
                },
                {
                    value: "ac",
                    text: "AC"
                }
            ]
        },
        {
            value: "b",
            text: "B",
            contents: [
                {
                    value: "ba",
                    text: "BA"
                },
                {
                    value: "bc",
                    text: "BC"
                }
            ]
        }
    ]
};

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1'
        };
    }

    componentDidMount() {
        var me = this;
        $(".J_enter").on("keydown", function(e) {
            if (e.which == 13) {
                console.log(me.refs.form.getValues());
            }
        })
    }

    componentWillUnmount() {
        $(".J_enter").off("keydown");
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    handleSearchClick() {
        var me = this;
        me.setState({
            showAdSearch: !me.state.showAdSearch
        });
    }

    handleSubmitClick() {
        var me = this;
        console.log(me.refs.form.getValues());
    }

    handleResetClick() {
        var me = this;
        me.refs.form.resetValues();
    }

    render() {
        let me = this;
        let columns = [
            { dataKey: 'country', title:'国家', width: 200,ordered:true},
            { dataKey: 'city',title:'城市', width: 150,ordered:true },
            { dataKey: 'firstName',title:"FristName" },  
            { dataKey: 'lastName' ,title:"LastName"},
            { dataKey: 'action1', title:'操作', width:100, type:"action",actions:{
                "编辑": function(rowData, actions) {
                    console.log(actions.addEmptyRow);
                    me.refs.grid.toggleSubComp(rowData);
                },
                "删除": function(rowData) {
                    me.refs.grid.delRow(rowData);
                }
              }
            },
            { dataKey: 'action', title:'链接', width:100,render: function(rowData){
               return <div><a href="#">111</a></div>
              }
            }
        ];
        let renderProps={
            actionColumn: {
               'edit': function() {},
               'del': function() {}
            },
            fetchParams: {},
            showColumnPicker:false,
            fetchUrl: './demo/data.json',
            jsxcolumns:columns,
        };
        return (
            <Layout className="demo4">
                <Left width={190}>
                     <Menu onClick={this.handleClick.bind(this)}
                      style={{width:190}}
                      defaultOpenKeys={['sub1']}
                      selectedKeys={[this.state.current]}
                      mode="inline">
                      <SubMenu key="sub1" title={<span><i className="kuma-icon kuma-icon-email"></i><span>导航一</span></span>}>
                          <Menu.Item key="1">选项1</Menu.Item>
                          <Menu.Item key="2">选项2</Menu.Item>
                          <Menu.Item key="3">选项3</Menu.Item>
                          <Menu.Item key="4">选项4</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" title={<span><i className="kuma-icon kuma-icon-wangwang"></i><span>导航二</span></span>}>
                          <Menu.Item key="5">选项5</Menu.Item>
                          <Menu.Item key="6">选项6</Menu.Item>
                          <SubMenu key="sub3" title="三级导航">
                              <Menu.Item key="7">选项7</Menu.Item>
                              <Menu.Item key="8">选项8</Menu.Item>
                          </SubMenu>
                      </SubMenu>
                      <SubMenu key="sub4" title={<span><i className="kuma-icon kuma-icon-boss"></i><span>导航三</span></span>}>
                          <Menu.Item key="9">选项9</Menu.Item>
                          <Menu.Item key="10">选项10</Menu.Item>
                          <Menu.Item key="11">选项11</Menu.Item>
                          <Menu.Item key="12">选项12</Menu.Item>
                      </SubMenu>
                  </Menu>
                </Left>
                <Right adaptive={true} className="demo4-right">
                    <div className="demo4-right">
                    <Form ref="form">
                        <FormRow>
                            <InputFormField className="J_enter" jsxplaceholder="输入 xxxx 进行查询" jsxshowLabel={false} jsxname="search" />
                            <OtherFormField jsxflex={2}>
                                <div className="demo-updown" onClick={me.handleSearchClick.bind(me)}>
                                    <a href="javascript:;">高级查询</a><i className={classnames({
                                        "kuma-icon": true,
                                        "kuma-icon-title-up": me.state.showAdSearch,
                                        "kuma-icon-title-down": !me.state.showAdSearch
                                    })}></i>
                                </div>                            
                            </OtherFormField>
                        </FormRow>
                        <FormRow className={classnames({
                            "f-dn": !me.state.showAdSearch
                        })}>
                            <InputFormField jsxlabel="名称" jsxname="input1" className="input1"/>
                            <DateFormField jsxlabel="名称" jsxname="date1" jsxtype="cascade" style={{
                                width: 100
                            }}/>
                        </FormRow>
                        <FormRow className={classnames({
                            "f-dn": !me.state.showAdSearch
                        })}>
                            <SelectFormField className="select2" 
                                             jsxfetchUrl="http://suggest.taobao.com/sug"
                                             jsxmultiple={true}
                                             jsxname="select2"
                                             jsxlabel="名称"
                                             afterFetch={(obj) => {
                                                let data = {};
                                                obj.result.forEach((item, index) => {
                                                    data[item[1]] = item[0];
                                                });
                                                console.log(data);
                                                return data;
                                             }}/>
                            <CheckboxGroupFormField jsxlabel="名称" jsxname="check1">
                                <Item value="1" text="名称"/>
                                <Item value="2" text="名称"/>
                                <Item value="3" text="名称"/>
                            </CheckboxGroupFormField>
                        </FormRow>
                        <FormRow className={classnames({
                            "f-dn": !me.state.showAdSearch
                        })}>
                            <OtherFormField className="button1">
                                <Button type="primary" onClick={me.handleSubmitClick.bind(me)}>提交</Button>
                                <Button type="secondary" onClick={me.handleResetClick.bind(me)}>重置</Button>
                            </OtherFormField>
                        </FormRow>
                    </Form>
                    <Table {...renderProps} />
                    </div>
                </Right>
            </Layout>
        )
            
    }
}

ReactDOM.render(<Demo />, document.getElementById('components-layout-demo-real'))
````

````css
.demo4 {
  min-height: 600px;
}
.demo4 .f-dn {
  display: none;
}
.demo4 .demo-updown {
  line-height: 36px;
  display: inline-block;
}
.demo4 .kuma-button {
  margin-right: 20px;
}
.demo4 .kuma-label {
  width: 70px;
}
.demo4 .kuma-calendar-picker {
    width: 150px;
}
.demo4 .demo4-right {
    padding-left: 20px;
}
.demo4 .input1 .kuma-label, .demo4 .select2 .kuma-label {
    width: 48px;
}
````
