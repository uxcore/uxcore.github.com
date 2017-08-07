# 风格

- order: 0

有三种风格可控选择：分割线、线框和斑马纹。  
有两种尺寸可以选择：small & middle

---

````jsx

const Table = require('uxcore-table');
const Form = require('uxcore-form');
const { RadioGroupFormField } = Form;
const { Item } = RadioGroupFormField;

class Demo extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          value: {
            style: 'split',
            size: 'middle',
          }
        }
      }

      render () {
        const me = this;
        // 通过 rowSelection 对象表明需要行选择
        const rowSelection = {
          onSelect: function(record, selected, selectedRows) {
            console.log(record, selected, selectedRows);
          },
          onSelectAll: function(selected, selectedRows) {
            console.log(selected, selectedRows);
          }
        };

        const classNameMap = {
          split: 'kuma-uxtable-split-line',
          border: 'kuma-uxtable-border-line',
        }

        const columns = [
            { dataKey: 'country', title:'国家', width: 200, ordered: true},
            { dataKey: 'city',title:'城市', width: 150, ordered: true },
            { dataKey: 'firstName',title: 'FristName' },  
            { dataKey: 'lastName' ,title: 'LastName'},
            { dataKey: 'email',title: 'Email', width: 200, ordered: true },
            { dataKey: 'action1', title: '操作1', width:100, type: 'action', actions: {
                '编辑': function(rowData, actions) {
                    console.log(actions.addEmptyRow);
                    me.refs.grid.toggleSubComp(rowData);
                },
                '删除': function(rowData) {
                    me.refs.grid.delRow(rowData);
                }
              }
            },
            { dataKey: 'action', title:'链接', width:100, render: function(rowData){
               return <div><a href="#">111</a></div>
              }
            }
        ];

        const fetchUrl = '/components/table/demo/data.json';
        
        const renderProps={
            height: 400,
            size: this.state.value.size,
            className: classNameMap[this.state.value.style],
            showColumnPicker: false,
            fetchUrl: fetchUrl,
            jsxcolumns:columns,
        };
        return (
          <div>
            <Form jsxvalues={this.state.value} jsxonChange={(value) => {this.setState({ value })}}>
              <RadioGroupFormField jsxlabel="风格" jsxname="style">
                <Item value="split" text="分割线" />
                <Item value="border" text="线框" />
                <Item value="zebra" text="线斑马纹框" />
              </RadioGroupFormField>
              <RadioGroupFormField jsxlabel="尺寸" jsxname="size">
                <Item value="small" text="小型" />
                <Item value="middle" text="普通" />
              </RadioGroupFormField>
            </Form>
            <Table {...renderProps}  ref="grid"/>
          </div>
        );
      }
};

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-style'))
````