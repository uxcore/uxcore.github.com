# Table

- order: 4
- category: CSS
- chinese:　表格

---

## 表格

> 为任意 `<table>` 标签添加 `.kuma-table` 类可以为其赋予基本的样式 — 少量的内补（padding）和水平方向的分隔线。  以下罗列出常用的几种table样式
  - .kuma-table-condensed<br/>
  - .kuma-table-hover<br/>
  - .kuma-table-striped<br/>
  - .kuma-table-bordered<br/>

### 紧凑的表格

> 通过添加 .kuma-table-condensed 类可以让表格更加紧凑，单元格中的内补（padding）均会减半。

````html
<table class="kuma-table kuma-table-condensed">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
    </tbody>
</table>
````

### 有 Hover 样式

> 通过添加 `.kuma-table-hover` 类可以让 <tbody> 中的每一行对鼠标悬停状态作出响应。

````html
<table class="kuma-table kuma-table-hover">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
    </tbody>
</table>
````

### 斑马格的表格

> 通过 `.kuma-table-striped` 类可以给 <tbody> 之内的每一行增加斑马条纹样式。

````html
<table class="kuma-table kuma-table-striped">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
    </tbody>
</table>
````

### 有边框的表格

> 添加 `.kuma-table-bordered` 类为表格和其中的每个单元格增加边框。

````html
<table class="kuma-table kuma-table-bordered">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr>
            <td><a href="#">标题内容</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
    </tbody>
</table>
````

### 带附加项的表格 `New`

> 外面包的结构是为了交互功能的,可以不管

````html
<div class="J_TableWrapper">
<div class="kuma-table-action J_TableFoldWrapper"><a href="javascript:;" class="kuma-table-fold active J_TableFoldToggleTrigger" data-type="fold"></a><a href="javascript:;" class="kuma-table-unfold J_TableFoldToggleTrigger" data-type="unfold"></a></div>
<table class="kuma-table kuma-table-bordered J_Table">
    <thead>
        <tr>
            <th width="100">标题</th>
            <th>标题一</th>
            <th>标题二</th>
            <th>标题三</th>
            <th>发起人</th>
            <th>时间</th>
            <th>系统</th>
            <th>时长</th>
            <th>操作</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr class="kuma-table-additional-tr J_TableAdditionalTr">
            <td colspan="100%">
                <div class="tr-detail">
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr class="kuma-table-additional-tr J_TableAdditionalTr">
            <td colspan="100%">
                <div class="tr-detail">
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                </div>
            </td>
        </tr>
        <tr>
            <td><a href="#">标题</a></td>
            <td>标题一</td>
            <td>标题二</td>
            <td>标题三</td>
            <td>发起人</td>
            <td>2012-12-14</td>
            <td>招聘系统</td>
            <td>14小时 </td>
            <td><a href="#">主操作</a></td>
        </tr>
        <tr class="kuma-table-additional-tr J_TableAdditionalTr">
            <td colspan="100%">
                <div class="tr-detail">
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                    <p>我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息,我是子信息</p>
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
````
