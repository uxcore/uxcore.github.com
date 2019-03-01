# Image

- category: Components
- subtype: Presentation
- chinese: 图片

---

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| src | string | Yes | - | 图片 src |
| className | string | No | - | 额外类名 |
| prefixCls | string | No | - | 类名前缀 |
| style | object | No | {} | 图片样式 |
| height | number/string | No | 图片高度 |
| width | number/string | No | 图片宽度 |
| enableUrlAdapter | bool | No | 开启针对 oss, django, tfs 等的图片链接优化 |
| adapterType | string | No | 可以指定针对那种类型的图片 CDN 进行优化，不指定的情况下会根据 url 去一次适配内置的链接优化器 |
| lazyload | bool | No | true | 是否懒加载，在 document load 之后再加载真实图片 |
| defaultPic | string | No | 内置图片 | 预置图片 |
| showDefaultPicDelay | number | No | 200 | 显示预置图片的延迟，如果 load 的时间小于该时间，则不加载预置图片 |
