# 顶部操作栏

- order: 14

顶部操作栏

---

````jsx

import { Table } from 'uxcore';
import { Button } from 'uxcore';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      text: 1,
      columns: [
        {
         dataKey: 'firstName',
         title: <span>自定义列头</span>,
         // fixed: true,
         // width: '15%',
         filters: [{
           text: 'Joe',
           value: 'Joe',
         }, {
           text: 'Jimmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
           value: 'Jim',
         }, {
           text: 'Submenu',
           value: 'Submenu',
           children: [{
             text: 'Green',
             value: 'Green',
           }, {
             text: 'Black',
             value: 'Black',
           }],
         }],
         message: '这是一个提示',
         ordered: true,
        },

        {
         dataKey: 'lastName',
         title: 'LastName',
         message: 'nihao',
         isDisable: function() {
           return true
         },
         // fixed: true,
         // rightFixed: true
         // width: '55%',
        },
        {
         dataKey: 'email',
         title: 'Email',
         // width: '30%',
         ordered: true,
         message: `sadfsdf\nnsafdasdfasdf`
        },
        {
         title: '操作1',
         width: '200px',
         type: 'action',
         // fixed: false,
         actions: [{
           title: 'click',
           callback: () => {
           },
           mode: 'edit',
         }, {
           title: '删除',
           callback: () => {
           },
           mode: 'view',
         }, {
           title: 'view',
           callback: () => { },
           mode: 'edit',
         }, {
           title: 'view',
           callback: () => { },
         }],
        },
      ]
    };
  }
  render() {
    const me = this;
    const { columns } = this.state
    // 通过 rowSelection 对象表明需要行选择
    const rowSelection = {
      onSelect(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
      },
      onSelectAll(selected, selectedRows) {
        console.log(selected, selectedRows);
      },
    };
    const fetchUrl = 'http://eternalsky.me:8122/file/getGridJson.jsonp';
    const renderProps = {
      height: 400,
      pagerSizeOptions: [5, 10, 15, 20],
      useListActionBar: true,
    actionBar: {
      className: 'my-list-action-bar',
      // 是否显示全选
      showSelectAll: true,
      // 按钮配置
      buttons: [
        {
          title: 'Action Button',
          render() {
            return (
              <Button>Button1</Button>
            )
          },
          keepActiveInCustomView: false,
          callback: () => {
            console.log(me.table.getData());
          },
        },
        {
          title: '按钮',
          keepActiveInCustomView: false,
          // size: 'large',
          type: 'primary',
          // className: 'xxxxx',
          callback: () => {
            me.table.selectAll(true);
          }
        }
      ],
      // 文案提示
      actionBarTip: '已找到记录123条',
      // 自定义内容
      customBarItem: {
        render() {
          return (
            <p style={{color: 'red'}} onClick={(e) => {console.log(e)}}>自定义内容</p>
          )
        }
      },
      // 行排序
      rowOrder: {
        iconName: 'paixu-jiangxu',
        // keepActiveInCustomView: true,
        defaultValue: {
          text: '排序方式一',
          value: '123'
        },
        items: [
          {
            text: '排序方式一',
            value: '123'
          },
          {
            text: '排序方式二',
            value: '456'
          }
        ],
        onChange(data) {
          console.log(data)
        }
      },
      // 列排序
      columnsOrder: {
        iconName: 'huxiangguanzhu',
        // keepActiveInCustomView: true,
        title: '列排序',
        includeActionColumn: false,  // 优先级低于fixed和rightFixed
        onChange(dragInfo, data) {
          console.log(data)
        }
      },
      // 列选择
      columnsPicker: {
        iconName: 'zidingyilie',
        title: '自定义列',
        keepActiveInCustomView: false,
        setPickerGroups(columns) {
          return [
            {
              title: '分组1',
              columns: columns.filter((item, index) => {return index >= 1})
            },
            {
              title: '分组2',
              columns: columns.filter((item, index) => {return index <= 0})
            }
          ]
        },
        onChange(data) {
          console.log(data)
        }
      },
      // 自定义视图，支持返回promise和component
      // customView: {
      //   render(data, currentPage) {
      //     console.log(data, currentPage);
      //     // return (
      //     //   <Test name={'自定义的View'}/>
      //     // )
      //     return new Promise(function(resolve) {
      //       setTimeout(() => {
      //         resolve(<Test name={'自定义的View'}/>)
      //       })
      //     })
      //   }
      // },
      // 是否显示翻页器
      showMiniPager: true,
      search: {
        // placeholder: '请输入搜索关键字',
        onSearch() {
          console.log(234234)
        }
      },
      // 在自定义视图下移出翻页器
      removePagerInCustomView: true,
      linkBar: [
        {
          title: '修改columns',
          callback: () => {
            this.setState({
              columns: this.state.columns.filter(item => {
                return item.title === 'LastName'
                  || item.title === 'Email'
                  || item.title === '操作1'
              })
            })
          },
        }
      ],
    },
      showSearch: false,
      showColumnPicker: true,
      fetchUrl,
      rowSelector: 'checkboxSelector',
      jsxcolumns: columns,
      rowSelection,
    };
    return (
      <div>
        <Table ref={c => {this.table = c}} {...renderProps} className="kuma-uxtable-border-line" />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-actionbar'));
````
