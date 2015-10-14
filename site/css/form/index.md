# Form

- order: 5
- category: CSS
- chinese:　表单

---

## 表单

> 通用表单样式。可基于此表单样式构建各类功能表单。

````html
<style>
.kuma-form-text {
    width: 80px;
}
.kuma-form {
    margin: 40px 0;
}
.kuma-form .kuma-input,
.kuma-form .kuma-textarea {
    width: 277px;
}
.kuma-form-item select {
    width: 145px;
}
</style>

<form class="kuma-form">
    <fieldset>
        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>姓名:
            </label>
            <input name="username" class="kuma-input" type="text" placeholder="张三">
            <span class="kuma-form-other">请填写真实姓名</span>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>密码:
            </label>
            <input name="password" class="kuma-input" type="password">
            <span class="kuma-form-other">密码不能少于6位，且不能大于15位</span>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>性别:
            </label>
            <label class="kuma-form-text">
                <input name="gender" class="kuma-checkbox" type="radio" value="m"> <s></s>
                男
            </label>
            <label class="kuma-form-text">
                <input name="gender" class="kuma-checkbox" type="radio" value="f"> <s></s>
                女
            </label>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                订阅内容:
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="1"> <s></s>
                数码
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="2"> <s></s>
                家电
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="3"> <s></s>
                居家
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="4"> <s></s>
                食品
            </label>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                所在城市:
            </label>
            <select name="province">
                <option value="110000">北京</option>
                <option value="120000">天津</option>
                <option value="130000">河北省</option>
                <option value="140000">山西省</option>
                <option value="150000">内蒙古自治区</option>
                <option value="210000">辽宁省</option>
                <option value="220000">吉林省</option>
                <option value="230000">黑龙江省</option>
                <option value="310000">上海</option>
                <option value="320000">江苏省</option>
                <option value="330000">浙江省</option>
                <option value="340000">安徽省</option>
                <option value="350000">福建省</option>
                <option value="360000">江西省</option>
                <option value="370000">山东省</option>
                <option value="410000">河南省</option>
                <option value="420000">湖北省</option>
                <option value="430000">湖南省</option>
                <option value="440000">广东省</option>
                <option value="450000">广西壮族自治区</option>
                <option value="460000">海南省</option>
                <option value="500000">重庆</option>
                <option value="510000">四川省</option>
                <option value="520000">贵州省</option>
                <option value="530000">云南省</option>
                <option value="540000">西藏自治区</option>
                <option value="610000">陕西省</option>
                <option value="620000">甘肃省</option>
                <option value="630000">青海省</option>
                <option value="640000">宁夏回族自治区</option>
                <option value="650000">新疆维吾尔自治区</option>
                <option value="710000">台湾省</option>
                <option value="810000">香港特别行政区</option>
                <option value="820000">澳门特别行政区</option>
                <option value="990000">海外</option>
            </select>
            &nbsp;
            <select name="city">
                <option value="110101">东城区</option>
                <option value="110102">西城区</option>
                <option value="110103">崇文区</option>
                <option value="110104">宣武区</option>
                <option value="110105">朝阳区</option>
                <option value="110106">丰台区</option>
                <option value="110107">石景山区</option>
                <option value="110108">海淀区</option>
                <option value="110109">门头沟区</option>
                <option value="110111">房山区</option>
                <option value="110112">通州区</option>
                <option value="110113">顺义区</option>
                <option value="110114">昌平区</option>
                <option value="110115">大兴区</option>
                <option value="110116">怀柔区</option>
                <option value="110117">平谷区</option>
                <option value="110228">密云县</option>
                <option value="110229">延庆县</option>
            </select>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                家庭住址:
            </label>
            <input name="address" class="kuma-input" type="text" placeholder="前门东大街3号">
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                联系电话:
            </label>
            <input name="mobile" class="kuma-input" type="text" placeholder="01058159988">
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                留言:
            </label>
            <textarea name="note" class="kuma-textarea"></textarea>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                激活码:
            </label>
            <input name="actcode" class="kuma-input" disabled>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                从哪里得知:
            </label>
            <label class="kuma-form-text">
                <input name="fromwhere" class="kuma-checkbox" type="radio" value="1" disabled> <s></s>
                朋友
            </label>
            <label class="kuma-form-text">
                <input name="fromwhere" class="kuma-checkbox" type="radio" value="2" disabled> <s></s>
                电视
            </label>
            <label class="kuma-form-text">
                <input name="fromwhere" class="kuma-checkbox" type="radio" value="3" disabled> <s></s>
                网络
            </label>
            <label class="kuma-form-text">
                <input name="fromwhere" class="kuma-checkbox" type="radio" value="4" disabled checked> <s></s>
                其他
            </label>
        </div>

        <div class="kuma-form-item">
            <input type="submit" class="kuma-button" value="确 定">
            <input type="button" class="kuma-button kuma-button-secondary" value="取 消">
        </div>
    </fieldset>
</form>
````

### 表单多列展示

> 可在 `.kuma-form` 中增加样式 `.kuma-form-column` 来实现多列表单，具体宽度需要自定义覆盖

````html
<style>
.kuma-form-column .kuma-form-item{
    width:250px;
}
.kuma-form-column .kuma-input{
    width: 200px;
}
</style>
<form class="kuma-form kuma-form-column">
    <fieldset>
        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>姓名:
            </label>
            <input name="username" class="kuma-input" type="text" width="200" placeholder="张三">
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>密码:
            </label>
            <input name="password" class="kuma-input" width="200" type="password">
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                <span class="kuma-form-required">*</span>性别:
            </label>
            <label class="kuma-form-text">
                <input name="gender" class="kuma-checkbox" type="radio" value="m"><s></s> 男
            </label>
            <label class="kuma-form-text">
                <input name="gender" class="kuma-checkbox" type="radio" value="f"><s></s> 女
            </label>
        </div>

        <div class="kuma-form-item">
            <label class="kuma-label">
                订阅内容:
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="1"><s></s> 数码
            </label>
            <label class="kuma-form-text">
                <input name="adtype" class="kuma-checkbox" type="checkbox" value="2"><s></s>                家电
            </label>
        </div>

        <div class="kuma-form-item" style="padding-left:300px;">
            <input type="submit" class="kuma-button" value="确 定">
            <input type="button" class="kuma-button kuma-button-secondary" value="取 消">
        </div>
    </fieldset>
</form>
````
