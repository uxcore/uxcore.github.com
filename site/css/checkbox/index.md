# Checkbox

- order: 3
- category: CSS
- chinese:　单/复选框

---

## 单、复选框

> 单选框、复选框基础样式。默认为主题色，但是可以分别通过添加 `radio-primary`和`checkbox-primary`来将单、复选框切换到灰色主体。

````html
<label>
    <input class="kuma-checkbox" type="radio" checked> <s></s>
    单选项
</label>
<label>
    <input class="kuma-checkbox radio-primary" type="radio" checked> <s></s>
    单选项
</label>
<label>
    <input class="kuma-checkbox" type="checkbox" checked> <s></s>
    多选项
</label>
<label>
    <input class="kuma-checkbox checkbox-primary" type="checkbox" checked> <s></s>
    多选项
</label>
````

### 默认为蓝色主题

````html
<style>
label {display: inline-block;line-height: 2em;font-size: 12px;vertical-align: middle;}
</style>
<table width="100%">
    <tr>
        <td>
            <label>
                <input class="kuma-checkbox" type="radio"> <s></s>
                未选中
            </label>
            <label>
                <input class="kuma-checkbox" type="radio" checked> <s></s>
                已选中
            </label>
            <label>
                <input class="kuma-checkbox" type="radio" disabled> <s></s>
                未选中禁用
            </label>
            <label>
                <input class="kuma-checkbox" type="radio" disabled checked> <s></s>
                已选中禁用
            </label>
        </td>
        <td>
            <label>
                <input class="kuma-checkbox" type="checkbox"> <s></s>
                未选中
            </label>
            <label>
                <input class="kuma-checkbox" type="checkbox" checked> <s></s>
                已选中
            </label>
            <label>
                <input class="kuma-checkbox" type="checkbox" disabled> <s></s>
                未选中禁用
            </label>
            <label>
                <input class="kuma-checkbox" type="checkbox" disabled checked> <s></s>
                已选中禁用
            </label>
        </td>
    </tr>
</table>
````
