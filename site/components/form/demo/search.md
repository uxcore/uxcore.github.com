# 搜索框

- order: 4

提供复杂和精简的两种搜索模式。

---



````css
.demo-search {
  max-width: 652px;
}
````

````jsx
const classnames = require('classnames');
const assign = require('object-assign');

const Form = require('uxcore-form');

const {
    Constants,
    FormRowTitle,
    FormRow,
    SearchFormField,
} = Form;


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const me = this;

    const searchOptions = {
      jsxname: 'search',
      dataType: 'jsonp',
      placeholder: '搜索商品',
      jsxfetchUrl: 'http://suggest.taobao.com/sug',
      classOptions: [
        {
          value: '1',
          text: '类别一',
        },
        {
          value: '2',
          text: '类别二',
        },
      ],
      classConfig: {
        placeholder: '类别',
      },
      afterFetch: (obj) => {
        const data = {};
        obj.result.forEach((item, index) => {
          data[item[1]] = item[0];
        });
        return data;
      },
      onIconClick: (e) => {
        console.log(me.refs.form.getValues());
      },
    };

    const tidyVer = assign({}, searchOptions, {
      jsxname: 'tidy',
      tidy: true,
      advancedOptions: [],
      classOptions: [],
    });


    return (
      <div className="demo-search">
        <Form ref="form">
          <FormRowTitle jsxtitle="标准搜索" />
          <SearchFormField {...searchOptions} />
          <FormRowTitle jsxtitle="精简搜索" />
          <SearchFormField {...tidyVer} />
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-form-demo-search'));
````
