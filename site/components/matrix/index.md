# Matrix

- category: Components
- chinese: 数据矩阵
- order: 6
- subtype: Matrix

---

![demo](https://gw.alicdn.com/tps/TB1Mi1ULXXXXXXQXVXXXXXXXXXX-430-173.png)

## 何时使用

出现大量跨行跨列的非常规表格的情况下

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|prefixCls |string              |no | 'kuma-matrix'      | 类名前缀，不想使用 kuma 主题时使用 |
|className |string              |no | -                  | 额外类名 |
|width     |number/string       |no | -                  | 矩阵宽度，不指定时根据单元格宽度计算得出|
|height    |number/string       |no | -                  | 矩阵高度，不指定时根据单元格高度计算得出|
|cellHeight|number/string/array |no | 40                 | 单元格高度，也可以是一个数组，指定每行单元格的高度，如果数组长度不够，将取第一个行的高度|
|cellWidth |number/string/array |no | 100                | 单元格宽度，也可以是一个数组，指定每列单元格的宽度，如果数组长度不够，将取第一个列的宽度 |
|render    |func(cellData)      |no | (cell) => cell.text| 指定每个单元格的渲染方式|
|data      |object              |yes| {}                 | 数据源，格式见下方 |

## Data structure

```js
{
  data: [
    // x,y 表示单元格相对左上角的偏移量，单位为1个单元格
    // row, col 代表跨行跨列的数量，分别代表纵向跨行，和横向跨列
    // text 是默认用来显示的字段
    { x: 0, y: 0, row: 2, col: 2, text: '1' },
    { x: 2, y: 0, row: 2, col: 2, text: '2' },
    { x: 4, y: 0, row: 3, col: 1, text: '3' },
    { x: 0, y: 2, row: 1, col: 3, text: '4' },
    { x: 3, y: 2, row: 1, col: 1, text: '5' },
  ],
}
```