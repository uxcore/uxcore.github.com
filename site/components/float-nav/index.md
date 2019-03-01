# FloatNav

- category: Components
- chinese: 悬浮导航
- subtype: Navigation

---

## Props

### FloatNavWrapper

With content wrapper.

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|prefixCls|string|no|'uxcore-float-nav'|prefix classname for component|
|className|string|no|''|custom classname for component|
|showOrderNumber|boolean|no|true|prepend order index to the nav item|
|width|number|no|260|nav's width|
|height|number|no|370|nav's height|
|offset|object|no|{right: 20, bottom: 20}|nav's position offset|
|content|react element|yes|null|place the content with anchor here|
|stepLength|number|no|50|scroll length|
|hoverable|boolean|no|false|enable the haverable feature

### FloatNav

Without content wrapper.

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|prefixCls|string|no|'uxcore-float-nav'|prefix classname for component|
|className|string|no|''|custom classname for component|
|showOrderNumber|boolean|no|true|prepend order index to the nav item|
|width|number|no|260|nav's width|
|height|number|no|370|nav's height|
|offset|object|no|{right: 20, bottom: 20}|nav's position offset|
|stepLength|number|no|50|scroll length|

### NavItem

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|title|react element or string|yes|''|nav item's title|
|anchor|string|yes|''|define the anchor|
|onClick|function|no|noop|trigger when nav item is clicked with two parameter(anchor, orderNumber)|
