# 搜索框

- order: 4

提供复杂和精简的两种搜索模式。

---



````jsx
let classnames = require('classnames');
let assign = require('object-assign');

let Form = require('uxcore-form');

let {
    Constants,
    FormRowTitle,
    FormRow,
    SearchFormField   
} = Form;


class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        let me = this;

        let searchOptions = {
            jsxname: "search", 
            dataType: "jsonp",
            placeholder: "搜索商品", 
            jsxfetchUrl: "http://suggest.taobao.com/sug",
            advancedOptions: [
               {
                   value: '1',
                   text: '选项一'
               },
               {
                   value: '2',
                   text: '选项二'
               }
            ], 
            advancedConfig: {
               placeholder: '高级选项'
            },
            classOptions: [
               {
                   value: '1',
                   text: '类别一'
               },
               {
                   value: '2',
                   text: '类别二'
               }
            ],
            classConfig: {
               placeholder: '类别'
            },
            afterFetch: (obj) => {
               let data = {};
               obj.result.forEach((item, index) => {
                   data[item[1]] = item[0];
               });
               return data;
            },
            onIconClick: (e) => {
              console.log(me.refs.form.getValues());
            }
        };

        let tidyVer = assign({}, searchOptions, {
          jsxname: 'tidy',
          tidy: true,
          advancedOptions: [],
          classOptions: []
        });


        return (
            <div className="demo">
                <Form ref="form">
                    <FormRowTitle jsxtitle="标准搜索" />
                    <SearchFormField {...searchOptions} />
                    <FormRowTitle jsxtitle="精简搜索" />
                    <SearchFormField {...tidyVer} />
                </Form>
            </div>
        );
    }
};

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-search'))
````
