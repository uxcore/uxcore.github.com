# 行内编辑表格

- order: 4

行内编辑表格，除了内置的几种可编辑列之外，我们还提供了自定义可编辑列的方法，请点击相应 [场景](/scene/customTable/#code-box-scene-customtable-demo-custom-edit) 查看

---

````jsx

const classnames = require('classnames');
const Validator = require('uxcore-validator');
const Button = require('uxcore-button');
const Select = require('uxcore-select2');
const { Option } = Select;
const RadioGroup = require('uxcore-radiogroup');
const RadioItem = RadioGroup.Item;
const Table = require('uxcore-table');
const { Constants } = Table;
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
};

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: mockData,
      showOtherColumn: false,
    };
  }


  getTableValues() {
    console.log(this.table.getData());
  }

  handleTableChange(data, dataKey, pass) {
    console.log(data.data);
  }

  render() {
    const me = this;
    const columns = [
            { dataKey: 'jsxid', title: 'jsxid', width: 80 },
      { dataKey: 'city',
        editKey: 'cityId',
        title: '城市',
        width: 200,
        type: 'select',
        renderChildren: () => [{ id: 'bj', name: '北京' }, { id: 'hz', name: '杭州' }].map(item => <Option key={item.id}>{item.name}</Option>),
        config: { filterOption: false } },
      { dataKey: 'name',
        editKey: 'nameId',
        title: '姓名',
        width: 200,
        type: 'radio',
        renderChildren: () => [{ id: 'xiaoli', name: '小李' }, { id: 'xiaowang', name: '小王' }].map(item => <RadioItem key={item.id} text={item.name} value={item.id} />) },
      {
        dataKey: 'email',
        title: 'Email',
        width: 200,
        type: 'text',
        required: true,
        rules: (cellData) => {
          if (cellData.length === 0) {
            return '不能为空';
          }
          if (!Validator.isEmail(cellData)) {
            return '必须是一个合法的邮件地址';
          }
          return true;
        },
      },
      { dataKey: 'action1',
        title: '操作1',
        width: 200,
        type: 'action',
        actions: [
          {
            title: '编辑',
            callback: (rowData) => {
              me.table.editRow(rowData);
            },
            mode: Constants.MODE.VIEW,
          },
          {
            title: '保存',
            callback: (rowData) => {
              me.table.saveRow(rowData);
            },
            mode: Constants.MODE.EDIT,
          },
          {
            title: '删除',
            callback: (rowData) => {
              me.table.delRow(rowData);
            },
            mode: Constants.MODE.VIEW,
          },
          {
            title: '重置',
            callback: (rowData) => {
              me.table.resetRow(rowData);
            },
            mode: Constants.MODE.EDIT,
          },
        ],
      },
    ];


    const renderProps = {
      width: 1000,
      showPager: false,
      fetchParams: {},
      jsxdata: me.state.data,
      className: 'kuma-uxtable-split-line',
      actionBar: {
        新增行: () => {
          me.table.addEmptyRow();
        },
      },
      jsxcolumns: columns,
      processData: data => data,
      onChange: me.handleTableChange,
    };

    return (
      <div>
        <Table {...renderProps} ref={(c) => { this.table = c; }} />
        <Button onClick={me.getTableValues.bind(me)} style={{ marginTop: '12px' }}>获取 Table 的值</Button>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-edit'));
````