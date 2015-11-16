# Table

- category: Components
- chinese: 表格
- description: uxcore table, will including checkbox, edit text field, column pick etc
- order: 6
- subtype: 表格

---


## How to run

```sh
$ git clone https://github.com/uxcore/uxcore-table
$ cd uxcore-table
$ npm install
$ gulp server
```

## Props

|Name            |Type                |Require |Default|Note |
|---             |---                 |---     |---    |---|
|jsxcolumns      |array               |required|null   |columns config|
|width           |number              |optional|1000   |table width |
|height          |number              |optional|100%   |table height |
|showColumnPicker|boolean             |optional|true   ||
|showPager       |boolean             |optional|true   ||
|showHeader      |boolean             |optional|true   ||
|headerHeight    |number              |optional|40     ||
|showMask        |boolean             |optional|true   ||
|showSearch      |boolean             |optional|false  ||
|pageSize        |number              |optional|10     ||
|queryKeys       |array               |optional|[]     |in subComp mode, it tells parent what datas need to pass to child, like a filter, the parent will pass all his data to his child if queryKey is undefined|
|jsxdata         |object              |optional|-      |table data|
|fetchUrl        |string              |optional|""     |dynamic get data from server |
|fetchParams     |object              |optional|-      |in form-table  mode, form will pass fetch params for table |
|actionBar       |object              |optional|null   |see Usage to get  |
|beforeFetch     |function(data, from)|optional|noop   |invoked before the table fetch data, two params `data` and `from`, `data` is the one which will be passed as querys in ajax, `from` means where the fetch is invoked containing 3 preset values `search`,`order` & `pagination`.return the data you really want ajax to send.|
|processData     |function(data)      |optional|noop   |sometimes the data fetched via ajax is not the one which you or table want, you can use this method to change the data and return it to table. the param is the data which table is ready to use for rendering|
|addRowClassName |function(rowData)   |optional|noop   |user can use this to add className to the Row, in order to custom the specific row.|
| renderModel | string | optional | 'tree' | render to tree model |
| levels | number | optional | 1 | tree model, default expand level number |


### Props you should not define by yourself

|props name       |  defalut Value  |  Note   |
|-----------      |  ------         |  -----    |
|passedData       |  null           |  Data passed from parent|



## Columns


|Key Name       |  Require  |  Type       | Note   |
|-----------    |  ------   |  ---------- | -----  |
|dataKey        |  required |  string     | use key |
|title          |  required |  string     | column display name |
|width          |  required |  number     |   |
|hidden         |  optional |  boolean    |   |
|order          |  optional |  boolean    | need order feature or not |
|type           |  optional |  string     | containing 'money', 'card', 'cnmobile', 'checkbox' & 'action' |
|disable        |  optional |  boolean    | disable a column, now only support type 'checkbox'|
|actions        |  required |  array      | when type =='action', we need this attr |
|[render](https://github.com/uxcore/uxcore-table/issues/30)        |  optional |  function    | for custom cell |
|[beforeRender](https://github.com/uxcore/uxcore-table/issues/30)  |  optional |  function    | for custom cell data |
|fixed         |  optional |  boolean    |  set the column fixed or not  |
|delimiter      |  optional |  string     | delimiter used in type 'money', 'card', 'cnmobile' formating|
|align         | optional   | string     | text-align, default: 'left' |



## Rules

 > return data format [here](http://gitlab.alibaba-inc.com/alinw/yosemite/issues/18)


## API

|name| parameter type|default|description|
|----|----|-------|-----------|
|fetchData |string|  | fetch url string|
|getData|	|	| get table data	|
|addEmptyRow|	 |	| add empty row for table|
|addRow(rowData)| JSON|		|add row for grid|
|delRow(rowData)| JSON|| del row for table|
|toggleSubComp(rowData)|JSON | | show/hide sub component|
