# 列表页

- order: 0

---

````jsx
var classnames = require("classnames");
var Form = require('uxcore-form');
var Button = require('uxcore-button');
var Table = require('uxcore-table');
var {
    InputFormField,
    FormRow,
    OtherFormField,
    DateFormField,
    CascadeSelectFormField,
    SelectFormField,
    CheckboxGroupFormField
} = Form;

var Item = CheckboxGroupFormField.Item;


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
            showAdSearch: false
        }
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
        var me = this;
        var columns = [
            { dataKey: 'title', title: '标题', width: 200},
            { dataKey: 'money', title: '金额', width: 200, type: 'money', delimiter: ","},
            { dataKey: 'agent', title: "金融机构", width: 200, render: function(cellData, rowData) {
                return <div><a href="javascript:;">{rowData.agent}</a></div>
            }},  
            { dataKey: 'person', title: "申请人", width: 100},
            { dataKey: 'date',title: "日期", width: 150}
        ];
        var renderProps = {
            height:300,
            pageSize: 5,
            fetchUrl:"http://eternalsky.me:8122/file/getDemo.jsonp",
            jsxcolumns: columns,
        };
        return (
            <div className="pageDemo">
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
                        <CascadeSelectFormField className="select1" jsxlabel="名称" jsxname="select1" jsxdata={casData} />
                    </FormRow>
                    <FormRow className={classnames({
                        "f-dn": !me.state.showAdSearch
                    })}>
                        <SelectFormField className="select2" 
                                         jsxfetchUrl="http://suggest.taobao.com/sug"
                                         dataType="jsonp"
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
                        <SelectFormField className="select3"
                                         jsxshowSearch={false}
                                         jsxdata={{
                                            "tm": "天猫",
                                            "tb": "淘宝",
                                            "xx": "信息平台"
                                         }}
                                         jsxlabel="OU"
                                         jsxname="select3"/>
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
                <Table {...renderProps}/>
            </div>
        )
    }
}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-list-demo-basic'));

/* JS END CSS START*/
````

````css
.f-dn {
  display: none;
}
.pageDemo {
  width: 1000px;
  margin: 0 auto;
  background: white;
  min-height: 600px;
}
.pageDemo .demo-updown {
  margin: 12px 0 0 15px;
}
.pageDemo .select1 .kuma-select2 {
  width: 120px;
}
.pageDemo .button1 {
  padding-left: 44px;
}
.pageDemo .button1 .kuma-button {
  margin-right: 10px;
}
.pageDemo .kuma-uxform-row .kuma-uxform-field.kuma-cascade-date-uxform-field .kuma-calendar-picker {
  width: 120px;
}

.pageDemo .kuma-label {
    width: 60px;
}

.pageDemo .input1 .kuma-label,
.pageDemo .select2 .kuma-label {
    width: 46px;
}
````
