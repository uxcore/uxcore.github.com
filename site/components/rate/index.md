# Rate

- order: 8
- chinese: 评分
- subtype: Form Control

---

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 | 版本 |
|---|---|---|---|---|
|value|number|required|0|初始值|
|onChange|function(currentValue)|required | |回调函数，会返回选中的分数，从1开始计数|
|prefixCls|string|option|kuma-rate|类名前缀|
|className |string|option||自定义样式的class名称|
|disabled|bool|option|false|是否禁用|
|total|number|option|5|总共有多少个icon,即总分为多少|
|scoreTips|arrayOf(string)|option|[]|每个star的描述文字，不传就不会显示tip。数组元素个数必须和totalScore一致|
|tipShow|string|option|hover|描述文字的显示方式.可选值:hover/always|
|size|string|optional|medium| 星星尺寸，枚举值 large、medium|
|icons|array|optional|[]|替换默认的图标| 0.3.3 |
|activeIcons|array|optional|[]|替换激活状态的图标| 0.3.3 |
|activeAll|bool|optional|true|是否激活所有低于 value 值的图标 | 0.3.3 |