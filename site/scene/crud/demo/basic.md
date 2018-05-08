# 增删改查

- order: 0

---

````jsx

/*
 * 讲解：
 * Uxcore 的文档站点为：http://uxco.re/
 * 这里包括了所有通用组件的使用说明。
 */
import { Table } from 'uxcore';
import { Button } from 'uxcore';
import { Form } from 'uxcore';
import { Dialog } from 'uxcore';
/*
 * 讲解：从 Form 中取出 Form 的零件用以配置生成一个完整的 Form。
 * Form 的使用文档见：http://uxco.re/components/form/
 */
const { FormRow, InputFormField, OtherFormField, Validators, ButtonGroupFormField, TableFormField } = Form;

/*
 * 讲解：object-assign 是一个非常实用的用于对象拷贝和扩展的函数
 * 详细说明见 https://www.npmjs.com/package/object-assign
 */
import assign from 'object-assign';;


/*
 * 讲解：下面是 react 的生成一个类的方式，同样是使用了 ES6 语法
 * 他改变了原有的 JS 蹩脚的声明和继承类的方法，提供一种更加面向对象的声明方式
 * 详细说明见：http://es6.ruanyifeng.com/#docs/class
 */

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchParams: {},
      editShow: false,
      newShow: false,
      editValues: null,
    };
  }

  handleSearch() {
    const me = this;
    const data = me.refs.searchForm.getValues();
    me.setState({
      fetchParams: data.values,
    }, () => {
      me.refs.table.fetchData();
    });
  }

  toggleShow(key) {
    const me = this;
    const obj = {};
    obj[key] = !me.state[key];
    me.setState(obj);
  }

  handleEditOk() {
    const me = this;
    const data = me.refs.editForm.getValues();
    if (data.pass) {
      $.ajax({
        url: 'http://eternalsky.me:8122/file/writeGrid.jsonp',
        dataType: 'jsonp',
        data: {
          data: data.values,
        },
        success(result) {
          if (result.success) {
            me.toggleShow('editShow');
            me.refs.table.fetchData();
          }
        },
      });
    }
  }

  handleEditCancel() {
    const me = this;
    me.refs.editForm.resetValues();
    me.toggleShow('editShow');
  }

  handleNewOk() {
    const me = this;
    const data = me.refs.editForm.getValues();
    if (data.pass) {
      $.ajax({
        url: 'http://eternalsky.me:8122/file/addNewData.jsonp',
        dataType: 'jsonp',
        data: {
          data: {
            dicts: {
              datas: [data.values],
            },
          },
        },
        success(result) {
          if (result.success) {
            me.toggleShow('newShow');
            me.refs.table.fetchData();
            me.refs.editForm.resetValues();
          }
        },
      });
    }
  }

  handleNewCancel() {
    const me = this;
    me.toggleShow('newShow');
    me.refs.editForm.resetValues();
  }

  showEditDialog(rowData) {
    this.setState({
      editShow: true,
      editValues: rowData,
    });
  }

  showNewDialog() {
    this.setState({
      newShow: true,
      editValues: {},
    });
  }

  render() {
    const me = this;

    const columns = [
            { dataKey: 'id', title: 'ID', width: 50, hidden: true },
            { dataKey: 'country', title: '国家', width: 200, type: 'money', delimiter: ',' },
            { dataKey: 'city', title: '城市', width: 150, ordered: true },
            { dataKey: 'firstName', title: 'FristName' },
            { dataKey: 'lastName', title: 'LastName' },
            { dataKey: 'email', title: 'Email', width: 200 },
      { dataKey: 'action1',
        title: '操作',
        width: 100,
        type: 'action',
        actions: {
          编辑(rowData, actions) {
            me.showEditDialog(rowData);
          },
        } },
    ];

    const tableProps = {
      width: 1000,
      fetchUrl: 'http://eternalsky.me:8122/file/getGridJson.jsonp',
      jsxcolumns: columns,
      fetchParams: me.state.fetchParams,
      actionBar: {
        新增() {
          me.showNewDialog();
        },
        删除() {
          console.log(me.selected);
        },
      },
      rowSelection: {
        onSelect(record, selected, selectedRows) {
          me.selected = selectedRows;
        },
        onSelectAll(selected, selectedRows) {
          me.selected = selectedRows;
        },
      },
    };

    const form = (<Form className="demoForm" jsxvalues={me.state.editValues} ref="editForm">
      <FormRow>
        <InputFormField jsxlabel="国家" jsxname="country" jsxrules={{ validator: Validators.isNotEmpty, errMsg: '非空' }} />
        <InputFormField jsxname="id" jsxshow={false} />
      </FormRow>
      <FormRow>
        <InputFormField jsxlabel="城市" jsxname="city" jsxrules={{ validator: Validators.isNotEmpty, errMsg: '非空' }} />
        <InputFormField jsxlabel="email" jsxname="email" jsxrules={
        [
                            { validator: Validators.isNotEmpty, errMsg: '非空' },
                            { validator: Validators.isEmail, errMsg: '请输入正确的 email 地址' },
        ]
                    }
        />
      </FormRow>
      <FormRow>
        <InputFormField jsxlabel="FirstName" jsxname="firstName" jsxrules={{ validator: Validators.isNotEmpty, errMsg: '非空' }} />
        <InputFormField jsxlabel="LastName" jsxname="lastName" jsxrules={{ validator: Validators.isNotEmpty, errMsg: '非空' }} />
      </FormRow>
    </Form>);

    return (
      <div className="page-demo3">
        <h2>增删改查</h2>
        <Form ref="searchForm" className="searchForm">
          <FormRow>
            <InputFormField jsxname="searchTxt" jsxshowLabel={false} jsxplaceholder="输入关键字进行查询" />
            <OtherFormField className="searchButton">
              <Button onClick={me.handleSearch.bind(me)}>查询</Button>
            </OtherFormField>
          </FormRow>
        </Form>
        <Table {...tableProps} ref="table" />
        <Dialog ref="editDialog" width={800} visible={me.state.editShow} title="数据编辑" onOk={me.handleEditOk.bind(me)} onCancel={me.handleEditCancel.bind(me)}>
          {form}
        </Dialog>
        <Dialog ref="newDialog" width={1000} visible={me.state.newShow} title="数据编辑" onOk={me.handleNewOk.bind(me)} onCancel={me.handleNewCancel.bind(me)}>
          {form}
        </Dialog>
      </div>
    );
  }

}


ReactDOM.render(
  <Demo />
, document.getElementById('scene-crud-demo-basic'));

/* JS END CSS START*/
````
````css
.page-demo3 {
    margin-top: 20px;
    margin-left: 20px;
}

.searchForm {
    width: 1000px;
}

.searchButton {
    padding: 2px 0 0 10px;
}

h2 {
    font-size: 24px;
}
````