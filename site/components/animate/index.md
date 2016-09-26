# Animate

- category: Components
- subtype: Presentation
- chinese: 动画

---

## Props

配置项           | 类型                   | 默认值  |  功能/备注 
----------------|------------------------|--------|---------------- 
component       | React.Element/String   | 'span' | 使用什么元素或者组件来包裹 children，和 ReactCSSTransitionGroup 类似，如果不想有元素包裹，传 ''
showProp        | String                 |        | 指定用于控制显示/隐藏的 prop
transitionName  | String                 |        | 和 ReactCSSTransitionGroup 类似，指定对应的 css 名
transitionAppear| Boolean                | false  | 是否支持 Appear 动画
transitionEnter | Boolean                | true   | 是否支持 Enter 动画
transitionLeave | Boolean                | true   | 是否支持 Leave 动画
onEnd           | function(key, exists)  | true   | 动画结束时的回调
