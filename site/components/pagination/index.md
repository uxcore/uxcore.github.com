# Pagination

- category: Components
- chinese: 分页
- order: 3
- subtype: Navigation

---

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## API

### Pagination

|参数|说明|类型|默认值|
|---|----|---|------|
|locale|语言(zh-cn/en-us)|string|zh-cn|
|current|当前页数|number|1|
|total|数据总数|number/jsx|0|
|pageSize|每页条数|number|10|
|onChange|页码改变的回调，参数是改变后的页码|function|noop|
|showTotal|是否显示共多少条|boolean|false|
|showQuickJumper|是否可以快速跳转至某页|bool|false|
|showSizeChanger|是否可以改变 pageSize|bool|false|
|sizeOptions|sizeChanger 显示的可选 pageSize|array|[10, 20, 30, 40]|
|onShowSizeChange|pageSize 变化的回调|function|noop|
|className|当为「mini」时，是小尺寸分页|string||
|simple|当添加该属性时，显示为简单分页|object|无|
|getSelectPopupContainer|指定下拉选择框渲染的容器|function():HTML Element|插在 body 下的一个 div|
