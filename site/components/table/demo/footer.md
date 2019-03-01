# 页底

- order: 13

提供一个空白行供自定义渲染，适用于 合计 等场景，同时支持行分组 Footer，可选择性关闭。

---

````jsx

import { Table } from 'uxcore';
import { Formatter } from 'uxcore';

const commonData = {
  title: '一级标题',
  entity: '蚂蚁金服（中国）',
  institution: '招商银行丨杭州分行',
  money: '60000',
};

const companyData = [
  { company: '阿里巴巴网络技术有限公司' },
  { company: '蚂蚁金服有限公司' },
  {},
];

const personData = [
  { person: 'Vernon Norman' },
  { person: 'David Hammond' },
];

const mixArray = (arr1, arr2) => {
  const twoArray = arr1.map(item => arr2.map(i => ({ ...item, ...i })));
  const result = [];
  twoArray.forEach((item) => {
    item.forEach((i) => {
      result.push(i);
    });
  });
  return result;
};

class Demo extends React.Component {
  render() {
    const tableProps = {
      jsxcolumns: [
        { dataKey: 'company', title: '公司', width: '20%' },
        { dataKey: 'title', title: '标题', width: '20%', fixed: true },
        { dataKey: 'money', title: '金额', width: '20%', type: 'money' },
        { dataKey: 'entity', title: '支付实体', width: '50%' },
        { dataKey: 'institution', title: '金融机构', width: '20%' },
        { dataKey: 'person', title: '申请人', width: '20%' },
      ],
      jsxdata: {
        data: mixArray(personData, companyData).map(item => ({ ...item, ...commonData })),
      },
      className: 'kuma-uxtable-split-line',
      rowGroupKey: 'company',
      footer: ({ data, column, from, rowGroupData = {} }) => {
        if (column.dataKey === 'title') {
          return '合计';
        }
        if (column.dataKey === 'money') {
          let total = 0;
          if (from === 'rowGroup') {
            rowGroupData.items && rowGroupData.items.length && rowGroupData.items.forEach((rowData) => {
              total += parseInt(rowData.money, 10);
            });
          } else {
            data.forEach((rowData) => {
              total += parseInt(rowData.money, 10);
            });
          }

          return Formatter.money(total.toString(), ',');
        }
        return null;
      },
      // width: 600,
      size: 'small',
      showRowGroupFooter: true,
      // height: 300,
    };
    return (
      <Table {...tableProps} />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-footer'));
````

````css
````
