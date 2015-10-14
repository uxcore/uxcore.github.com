# Filter

- order: 6
- category: CSS
- chinese:　条件

---

## 条件

> 条件筛选和标签筛选组件

### 多维度筛选

````html
<style>
.demo-wrapper {
    margin: 20px 0;
}
</style>


<div class="demo-wrapper">

<div class="kuma-filter fn-clear">
    <div class="kuma-filter-title fn-left">
        多纬度筛选：
    </div>
    <ul class="kuma-filter-condition fn-left">
        <li>
            <a href="javascript:void(0)">
                <span>条件一</span><span class="kuma-icon-triangle-down kuma-icon"></span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)">
                <span>条件二</span><span class="kuma-icon-triangle-down kuma-icon"></span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)">
                <span>条件三</span><span class="kuma-icon-triangle-down kuma-icon"></span>
            </a>
        </li>
    </ul>
</div>

<div class="kuma-filter fn-clear">
    <ul class="kuma-tag-removeable">
        <li class="kuma-tag">
            <span>职务类型：技术类 运营类</span><a href="javascript:void(0)" class="kuma-icon-close kuma-icon"></a>
        </li>
        <li class="kuma-tag">
            <span>层级：P5 P6 P7 M2 M3</span><a href="javascript:void(0)" class="kuma-icon-close kuma-icon"></a>
        </li>
        <li class="kuma-tag">
            <span>阶段：待审批 审批不通过</span><a href="javascript:void(0)" class="kuma-icon-close kuma-icon"></a>
        </li>
        <li class="kuma-tag-clear">
            <a href="javascript:void(0)">清空条件</a>
        </li>
    </ul>
</div>

<div class="kuma-filter">
    <div class="fn-clear">
        <div class="kuma-filter-title fn-left">
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
        </ul>
    </div>
    <div class="fn-clear">
        <div class="kuma-filter-title fn-left">
            筛选级二：
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
            <li class="kuma-tag-clear">
                <a href="javascript:void(0)">清空所选</a>
            </li>
        </ul>
    </div>
</div>

</div>
````
