# Filter

- order: 6
- category: CSS
- chinese:筛选

---

## 筛选

- 场景描述：多选标签，点击选中、再次点击取消选中

````html
<ul class="kuma-tag-pickable">
    <li class="kuma-tag">
        <a href="javascript:void(0)">
            <span>条件一</span>
            <span class="kuma-checkmarkbg"></span>
            <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
        </a>
    </li>
    <li class="kuma-tag picked">
        <a href="javascript:void(0)">
            <span>条件二</span>
            <span class="kuma-checkmarkbg"></span>
            <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
        </a>
    </li>
    <li class="kuma-tag">
        <a href="javascript:void(0)">
            <span>条件三</span>
            <span class="kuma-checkmarkbg"></span>
            <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
        </a>
    </li>
</ul>
<div class="kuma-filter" style="width: 350px;">
    <div class="kuma-filter-title">
        筛选级一：
    </div>
    <ul class="kuma-tag-pickable">
        <li class="kuma-tag">
            <a href="javascript:void(0)">
                <span>条件一</span>
                <span class="kuma-checkmarkbg"></span>
                <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
            </a>
        </li>
        <li class="kuma-tag picked">
            <a href="javascript:void(0)">
                <span>条件二</span>
                <span class="kuma-checkmarkbg"></span>
                <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
            </a>
        </li>
        <li class="kuma-tag">
            <a href="javascript:void(0)">
                <span>条件三</span>
                <span class="kuma-checkmarkbg"></span>
                <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
            </a>
        </li>
        <li class="kuma-tag">
            <a href="javascript:void(0)">
                <span>条件一</span>
                <span class="kuma-checkmarkbg"></span>
                <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
            </a>
        </li>
        <li class="kuma-tag">
            <a href="javascript:void(0)">
                <span>条件二</span>
                <span class="kuma-checkmarkbg"></span>
                <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
            </a>
        </li>
        <li class="kuma-tag">
            <a href="javascript:void(0)">
                <span>条件三</span>
                <span class="kuma-checkmarkbg"></span>
                <span class="kuma-checkmark kuma-icon-choose kuma-icon"></span>
            </a>
        </li>
    </ul>
</div>
````

- 场景描述：可作为印象标签的选择

````html
<span class="kuma-tag kuma-tag-selectable">默认</span>
<span class="kuma-tag kuma-tag-selectable selected">选中后</span>
<span class="kuma-tag kuma-tag-selectable kuma-tag-disabled">不可操作</span>
````

- 场景描述：标签有数字，可点击相应

````html
<table>
    <tr>
        <td>默认可操作</td>
        <td><span class="kuma-tag">标签1</span></td>
        <td>默认可操作</td>
        <td>
            <span class="kuma-tag">
                <i class="kuma-icon kuma-icon-add"></i>
            </span>
        </td>
    </tr>
    <tr>
        <td>不可操作</td>
        <td><span class="kuma-tag kuma-tag-disabled">标签1</span></td>
        <td>hover</td>
        <td>
            <span class="kuma-tag">
                <i class="kuma-icon kuma-icon-add"></i>
            </span>
        </td>
    </tr>
    <tr>
        <td>数字超过99时</td>
        <td>
            <div class="kuma-tag kuma-tag-group">
                <span class="kuma-tag-left">标签1</span>
                <a href="#" class="kuma-tag-right">99+</a>
            </div>
        </td>
        <td>新增标签</td>
        <td>
            <span class="kuma-tag">标签1</span>
            <span class="kuma-tag">
                <i class="kuma-icon kuma-icon-add"></i>
            </span>
        </td>
    </tr>
    <tr>
        <td>移上去可+1</td>
        <td>
            <div class="kuma-tag kuma-tag-group">
                <span class="kuma-tag-left">标签1</span>
                <a href="#" class="kuma-tag-right">
                    <i class="kuma-icon kuma-icon-add"></i>
                </a>
            </div>
        </td>
        <td>删除标签</td>
        <td>
            <div class="kuma-tag kuma-tag-group">
                <span class="kuma-tag-left">标签1</span>
                <a href="#" class="kuma-tag-right">
                    <i class="kuma-icon kuma-icon-close"></i>
                </a>
            </div>
        </td>
    </tr>
</table>
````
