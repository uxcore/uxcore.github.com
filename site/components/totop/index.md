# Totop

- category: Components
- chinese: 返回顶部
- subtype: 导航

---

## API

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|prefixCls|string|optional|"kuma-totop"|不想使用 kuma 主题时使用|
|className|string|optional|-|额外的顶级类名|
|to|number|optional|10|回到顶部时据顶端距离，单位 px|
|distance|number|optional|30|向下滑多少距离出现回到顶部|
|duration|number|optional|600|动画持续时间|
|theme|string|optional|-|默认为方形，另提供 "lcircle" 和 "mcircle" 两个选项|
|children|react element|optional||除回到顶部按钮外的其他元素，用户自由定义|
