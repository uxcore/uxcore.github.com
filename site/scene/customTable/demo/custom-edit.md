# 定制编辑

- order: 3

这个 Demo 展示了如何定制一个行内编辑 Cell，以应对各种各样的业务需求。

---

````jsx

const Table = require('uxcore-table');
const CellField = require('uxcore-cell-field');
const Select = require('uxcore-select2');

const options = {
  xw: '小王',
  xl: '小李',
};

// Table 里也可以导出 createCellField
const CustomCellField = CellField.createCellField({
  component: (
    <Select
      style={{ width: 150 }}
      dropdownClassName="kuma-select2-selected-has-icon"
      optionLabelProp="children"
    >
      {Object.keys(options).map((key) => {
        return (
          <Select.Option key={key}>{options[key]}</Select.Option>
        );
      })}
    </Select>
  ),
  // Select 默认返回的是选项的 value，但展示上我们需要展示对应的文案，所以可以通过 processText 进行一个处理
  processText: value => options[value],
});

// component 传入的是一个有 value 和 onChange prop 的 React Component 实例。（比如一个 input）
// createCellField 的 API 请参考里的 http://uxcore.coding.me/components/table/ 创建一个 CellField

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const tableProps = {
      ref: (c) => { this.table = c; },
      width: 700,
      jsxdata: {
        data: [
          {
            name: '小王',
            nameId: 'xw',
          },
          {
            name: '小李',
            nameId: 'xl',
          },

        ],
      },
      jsxcolumns: [
        {
          dataKey: 'name',
          // 对于复杂的编辑形式，通常需要两个 key，dataKey 用于展示（文本的部分），editKey 用于编辑（值的部分
          editKey: 'nameId',
          type: 'custom',
          title: '姓名',
          width: '50%',
          customField: CustomCellField,
        },
        {
          title: '操作列',
          type: 'action',
          width: 200,
          actions: [
            {
              title: '编辑',
              callback: (rowData) => {
                this.table.editRow(rowData);
              },
            },
            {
              title: '保存',
              callback: (rowData) => {
                this.table.saveRow(rowData);
              },
            },
          ],
        },
      ],
    };
    return (
      <div>
        <Table {...tableProps} />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, document.getElementById('scene-customtable-demo-custom-edit'));

/* JS END CSS START*/
````