# COA段信息展示(dialog)

- order: 0

---

````jsx
var classnames = require("classnames");
var Form = require('uxcore-form');
var Button = require('uxcore-button');
var Dialog = require('uxcore-dialog');
var Validator = require('uxcore-validator');
var Message = require('uxcore-message');
var Tabs = require('uxcore-tabs');
var {TabPane} = Tabs;

var {
    InputFormField: Input,
    FormRow,
    FormRowTitle,
    Validators,
    OtherFormField,
    DateFormField,
    CascadeSelectFormField,
    SelectFormField
} = Form;




const makeState = () => {
    return {
        formValues: {},
        list: [],
    }
}




class Segment extends React.Component {
    constructor(props) {
        super(props);
        this.state = makeState();
    }

    setData(res) {
        const me = this;
        const formValues = {};
        const values = this.props.values || [];
        const map = {};
        values.forEach((item) => {
            map[item.segmentType] = item;
        });

        res.content.forEach((item) => {
            if (map[item.segmentType]) {
                item.value = map[item.segmentType].value;
                item.desc = map[item.segmentType].desc;
            }

            const value = 'value' in item ? item.value || '' : item.defaultValue || '';
            const desc = 'desc' in item ? item.desc || '' : item.defaultDesc || '';

            formValues[item.segmentType] = value && desc ? value + ',' + desc : value || desc;
            item.defaultKey = formValues[item.segmentType];
        });

        me.state.formValues = formValues;
        me.state.list = res.content;
        me.setState(me.state);
    }

    getAccountDetail() {
        const me = this;
        const url = me.props.accountDetailUrl || '/tp/entryTempRpc/queryEntryAccountDetailTemp.jsonp';
        const data = me.props.accountDetailData || {}
        data.coaId = me.props.coaId;
        $.ajax({
            url: url,
            dataType: /\.jsonp$/.test(url) ? 'jsonp' : 'json',
            data: data
        }).done((res) => {
            if (res.hasError) {
                Message.error(res.errors ? res.errors[0].msg : JSON.stringify(res));
            } else {
                me.setData(res);
            }
        }).fail((res) => {
            console.error(res);
        });
    }

    componentDidMount() {
        const me = this;
        me.getAccountDetail();
    }

    componentWillUnmount() {
    }

    clear() {
        this.state = makeState();
        this.getAccountDetail();
    }

    afterFetch(item, data) {
        const me = this;
        const list = {};

        data.forEach((item) => {
            list[item.flexValue] = item.flexValue + ',' + item.flexValueDesc;
        });
        item.data = list;
        me.setState(me.state);
    }

    onSearch(item, value) {
        const me = this;
        const url = me.props.flexInfoUrl || '/tp/entryTempRpc/getSegmentFlexInfoBySegmentType.jsonp';
        const data = me.props.flexInfoData || {};

        data.coaId = me.props.coaId;
        data.segmentType = item.segmentType;
        data.key = value;

        $.ajax({
            url: url,
            dataType:  /\.jsonp$/.test(url) ? 'jsonp' : 'json',
            data: data
        }).done((res) => {
            if (res.hasError) {
                console.error(res);
            } else {
                me.afterFetch(item, res.content)
            }
        }).fail((res) => {
            console.error(res);
        });
    }

    getItem(item) {
        const me = this;
        const values = me.state.formValues;

        const ret = item.allowModify ? <SelectFormField 
                    jsxname={item.segmentType}
                    jsxlabel= {item.segmentDescName}
                    filterOption={false}
                    ref={item.segmentType}
                    jsxdata={item.data}
                    required={item.required}
                    jsxrules={item.required ? {validator: Validator.isNotEmpty, errMsg: ''} : null}
                    onSearch={me.onSearch.bind(me, item)}
                />  :  <OtherFormField>
                <label className="kuma-label" style={{paddingRight: 10}}>{item.segmentDescName}</label>
                <span style={{display: 'inline-block', height: 44, paddingTop: 9, paddingLeft: 10}}>{values[item.segmentType] || '--'}</span>
            </OtherFormField>;

        return ret;
    }

    getFormItems() {
        const me = this;
        const row = [];
        const data = me.state.list;

        for (let i = 0; i < data.length; i += 2) {
            const item = <FormRow>
                {me.getItem(data[i])}
                {me.getItem(data[i+1])}
            </FormRow>

            row.push(item);
        }

        return row;
    }

    getValue() {
        const me = this;
        const values = me.refs.form.getValues();

        if (values.pass) {
            const ret = [];
            const list = JSON.parse(JSON.stringify(this.state.list));
            const map = {};

            list.forEach((item) => {
                map[item.segmentType] = item;
            });

            Object.keys(values.values).forEach((key) => {
                const item = values.values[key];
                const data = map[key];

                if (item.key === data.defaultKey) {
                    data.value = data.value || data.defaultValue || '';
                    data.desc = data.desc || data.defaultDesc || '';
                } else {
                    data.value = item.key;
                    data.desc = item.label ? item.label.split(',')[1] || '' : '';
                }
                ret.push(data);
            });
            return ret;
        }
    }

    render() {
        const me = this;
        return (
            <div>
                <Form key="segment-form" ref="form" jsxvalues={me.state.formValues}>
                    {me.getFormItems()}
                </Form>
            </div>
        )
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            formValue: {},
            values: []
        };
    }

    handleOk() {
        const me = this;

        const values = me.refs.segment.getValue();
        console.log(values);
        if (values) {
            me.state.visible = false;
            me.state.values = values;
            me.state.formValue.segment = values.map((item) => {return item.value}).join('.');
            me.setState(me.state);
        }
    }

    handleCancel() {
        const me = this;
        me.state.visible = false;
        me.setState(me.state);
    }

    showModal() {
        const me = this;
        me.state.visible = true;
        me.setState(me.state);
    }

    render() {
        const me = this;
        return  <div className="pageDemo">
                    

                    <Form ref="form" jsxvalues={me.state.formValue}>
                        <OtherFormField className="other">
                            <Button onClick={me.showModal.bind(me)}>显示对话框</Button>
                        </OtherFormField>
                        <Input jsxlabel="文本" jsxname="segment" />
                    </Form>
                    
                    
                    <Dialog title="COA信息"
                        width={700}
                        visible={me.state.visible}
                        onOk={me.handleOk.bind(me)}
                        onCancel={me.handleCancel.bind(me)}>
                        <Segment values={me.state.values} ref="segment" coaId={50288} accountDetailUrl={'http://corptax.alibaba.net/tp/entryTempRpc/queryEntryAccountDetailTemp.jsonp'} accountDetailData={{journalEntryType: 'TP_ITEM'}} flexInfoUrl={'http://corptax.alibaba.net/tp/entryTempRpc/getSegmentFlexInfoBySegmentType.jsonp'} />
                    </Dialog> 
                </div>              
    }
}

ReactDOM.render(
  <Demo />
, document.getElementById('scene-segment-demo-dialog'));

/* JS END CSS START*/
````

````css
.pageDemo {
  width: 1000px;
  margin: 0 auto;
  background: white;
  min-height: 300px;
}

.other {
    padding-left: 100px;
}

````
