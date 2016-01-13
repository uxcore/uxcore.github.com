# 填写页

- order: 0

---

````jsx
var classnames = require("classnames");
var Form = require('uxcore-form');
var Button = require('uxcore-button');
var Table = require('uxcore-table');
var Tabs = require('uxcore-tabs');
var Crumb = require('uxcore-crumb');

var {
    FormRow,
    FormRowTitle,
    InputFormField,
    DateFormField,
    OtherFormField,
    NumberInputFormField,
    SelectFormField,
    EditorFormField,
    TextAreaFormField,
    RadioGroupFormField,
    Constants,
    Validators,
    UploadFormField
} = Form;
var TabPane = Tabs.TabPane;
var RadioItem = RadioGroupFormField.Item;

var defaultValues = {
    input1: "内容内容"
}

var columns = [
    { dataKey: 'title', title: '标题', width: 200},
    { dataKey: 'money', title: '金额', width: 200, type: 'money', delimiter: ","},
    { dataKey: 'agent', title: "金融机构", width: 200, render: function(cellData,rowData) {
        return <div><a href="javascript:;">{rowData.agent}</a></div>
    }},  
    { dataKey: 'person', title: "申请人", width: 200},
    { dataKey: 'date',title: "日期", width: 200}
];
var renderProps = {
    height:300,
    width: 920,
    pageSize: 5,
    fetchUrl:"http://eternalsky.me:8122/file/getDemo.jsonp",
    jsxcolumns: columns,
};

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick() {
        var me = this;
        console.log(me.refs.form.getValues());
    }

    render() {
        var me = this;
        var tips = <span className="tips">
                        <em>下载报价清单模版，填写完成后上传 下载模版</em></span>;
        return (
            <div className="page-demo2">
                <Crumb className="crumb">
                  <Crumb.Item href="#" className="crumb-item-style">面包屑</Crumb.Item>
                  <Crumb.Item>面包屑</Crumb.Item>
                </Crumb>
                <div className="content">
                    <Tabs size="large" className="tab1">
                        <TabPane tab="标题标题" key="1">
                            <div className="tab-content-1">
                                <Form ref="form" jsxvalues={defaultValues}>
                                    <FormRowTitle>大标题</FormRowTitle>
                                    <InputFormField jsxlabel="文本" jsxname="input1" jsxmode={Constants.MODE.VIEW} required={true}/>
                                    <InputFormField jsxlabel="文本2" jsxname="input2" jsxplaceholder="请输入" jsxrules={{
                                        validator: Validators.isNotEmpty,
                                        errMsg: "错误或警告类反馈"
                                    }}/>
                                    <DateFormField jsxlabel="日期" jsxname="date1"/>
                                    <DateFormField jsxlabel="日期区间" jsxname="date2" jsxtype="cascade"/>
                                    <FormRow>
                                        <NumberInputFormField jsxlabel="数字" jsxname="number1"/>
                                        <OtherFormField className="other1">CNY</OtherFormField>
                                    </FormRow>
                                    <InputFormField jsxlabel="email" jsxname="input3" jsxrules={{
                                        validator: Validators.isEmail,
                                        errMsg: "请输入正确的 Email 地址"
                                    }}/>
                                    <NumberInputFormField jsxlabel="电话" jsxname="number2" jsxtype="cnmobile" jsxrules={{
                                        validator: Validators.isCNMobile,
                                        errMsg: "请输入正确的手机号码"
                                    }}/>
                                    <NumberInputFormField jsxlabel="银行卡号" jsxname="number3" jsxtype="card"/>
                                    <NumberInputFormField jsxlabel="身份证号" jsxname="number4"/>
                                    <SelectFormField className="select1"
                                             jsxshowSearch={false}
                                             jsxdata={{
                                                "tm": "天猫",
                                                "tb": "淘宝",
                                                "xx": "信息平台"
                                             }}
                                             jsxlabel="OU"
                                             jsxname="select1"/>
                                    <EditorFormField jsxlabel="股东信息" jsxname="editor1"/>
                                    <TextAreaFormField jsxlabel="备注" jsxname="text1" jsxplaceholder="提示文字"/>
                                    <RadioGroupFormField jsxlabel="选择" jsxname="radio1">
                                        <RadioItem value="a" text="是"/>
                                        <RadioItem value="b" text="否"/>
                                    </RadioGroupFormField>
                                    <SelectFormField className="select2"
                                                     jsxshowSearch={false}
                                                     jsxdata={{
                                                        "tm": "天猫",
                                                        "tb": "淘宝",
                                                        "xx": "信息平台"
                                                     }}
                                                     jsxlabel="选择"
                                                     jsxname="select2"/>
                                    <SelectFormField className="select2" 
                                                     jsxfetchUrl="http://suggest.taobao.com/sug"
                                                     jsxmultiple={true}
                                                     jsxname="select3"
                                                     jsxlabel="行业"
                                                     afterFetch={(obj) => {
                                                        let data = {};
                                                        obj.result.forEach((item, index) => {
                                                            data[item[1]] = item[0];
                                                        });
                                                        console.log(data);
                                                        return data;
                                                     }}/>
                                    <UploadFormField jsxname="upload1" jsxlabel="附件" tips={tips}/>
                                    <FormRowTitle>大标题</FormRowTitle>
                                    <OtherFormField className="other2">
                                        <Table {...renderProps}/>
                                    </OtherFormField>
                                    <OtherFormField className="button1">
                                        <Button type="primary" onClick={me.handleClick.bind(me)}>提交</Button>
                                        <Button type="secondary">取消</Button>
                                    </OtherFormField>
                                </Form>
                            </div>
                        </TabPane>
                        <TabPane tab="标题" key="2"></TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }

}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-fillin-demo-basic'));

/* JS END CSS START*/
````
````css

.page-demo2 {
    background: #f5f5f5;
    padding: 0 20px;
}
.page-demo2 .crumb {
    padding: 20px 0;
}
.page-demo2 .content {
    background: white;
}
.page-demo2 .tab-content-1 * {
  box-sizing: border-box;
}
.page-demo2 .other1 {
  margin-top: 13px;
}
.page-demo2 .other2 {
  padding-left: 35px;
  overflow: hidden;
}
.page-demo2 .kuma-select {
  width: 100%;
}
.page-demo2 .kuma-label {
  width: 80px;
}
.page-demo2 .button1 {
  padding-left: 90px;
}
.page-demo2 .button1 .kuma-button {
  margin-right: 10px;
}
````