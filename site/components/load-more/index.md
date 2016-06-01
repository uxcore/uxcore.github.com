# LoadMore

- category: Components
- chinese:  加载更多
- subtype: Presentation

---

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|status|string|optional|'loaded'|表示加载状态。'loaded'表示加载完成，待下次加载；'loading'表示加载中；'noMore'表示没有更多|
|className|string|optional|''|额外的className|
|trigger|array|optional|['view', 'click']|触发加载回调的途径。view表示看到即触发；click表示点击触发|
|onLoadMore|function|required|-|加载回调, 需要在该方法中手动控制status改变|
|viewLoadDelay|number|optional|150|如果trigger包含'view'，那么滚动停止后触发onLoadMore的延迟，单位毫秒|
|locale|string|optional|'zh-cn'|语言，另可选'en-us'|
|loadText|string|optional|-|加载更多文案，可手动设置覆盖默认文案|
|loadingText|string|optional|-|加载中文案，可手动设置覆盖默认文案|
|noMoreText|string|optional|-|没有数据文案，可手动设置覆盖默认文案|
