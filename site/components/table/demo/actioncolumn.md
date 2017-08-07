# 操作列

- order: 7

 UXCore 提供了一整套的操作列配置，包括风格和折叠方式。

---

````jsx

const Table = require('uxcore-table');
const Form = require('uxcore-form');

const {
  InputFormField,
  FormRow,
  RadioGroupFormField,
} = Form;

const { Item: RadioItem } = RadioGroupFormField;
const mockData = {
  data: [
    {
      email: 'xw@abc.com',
      nameId: 'xiaowang',
      name: '小王',
      cityId: 'bj',
      city: '北京',
    },
    {
      email: 'xl@abc.com',
      nameId: 'xiaoli',
      name: '小李',
      cityId: 'hz',
      city: '杭州',
    },
  ],
  currentPage: 2,
  totalCount: 30,
};

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: mockData,
      showOtherColumn: false,
      value: {
        num: 1,
        action: 'link'
      }
    };
  }

  handleChange(value, name, pass) {
    this.setState({
      value,
    })
  }

  render() {
    const me = this;
    const columns = [
      {
        dataKey: 'jsxid',
        title: 'jsxid2',
        width: 80,
      },
      {
        dataKey: 'city',
        editKey: 'cityId',
        title: '城市',
        width: 200,
      },
      {
        dataKey: 'name',
        editKey: 'nameId',
        title: '姓名',
        width: 200,
      },
      {
        dataKey: 'email',
        title: 'Email',
        width: 200,
      },
      {
        dataKey: 'action1',
        title: '操作1',
        width: 280,
        type: 'action',
        actionType: this.state.value.action,
        collapseNum: this.state.value.num || 3, // 超过 3 个将开始折叠
        actions: [
          {
            title: '操作一',
            callback: (rowData) => {
            },
            isDisable: () => true,
          },
          {
            title: '操作二',
            callback: (rowData) => {
            },
          },
          {
            title: '操作三',
            callback: (rowData) => {
            },
          },
          {
            title: '操作四',
            callback: (rowData) => {
            },
          },
          {
            title: '操作五',
            callback: (rowData) => {
            },
          },
        ],
      },
    ];

    const renderProps = {
      jsxdata: mockData,
      jsxcolumns: columns,
      showPager: false,
      className: 'kuma-uxtable-split-line',
    };

    return (
      <div>
        <Form jsxonChange={this.handleChange.bind(this)} jsxvalues={this.state.value}>
          <FormRow totalFlex={3}>
            <InputFormField jsxname="num" jsxlabel="折叠的个数" />
            <RadioGroupFormField jsxname="action" jsxlabel="样式风格">
              <RadioItem value="button" text="按钮" />
              <RadioItem value="link" text="链接" />
            </RadioGroupFormField>
          </FormRow>
        </Form>
        <Table {...renderProps} ref="grid" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-actioncolumn'))
````