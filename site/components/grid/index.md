# Grid

- category: Components
- chinese: 栅格
- description: uxcore gird, will including checkbox, edit text field, column pick etc
- order: 1
- subtype: 布局

---

## Usage

> 有关栅格的基础知识，参考 http://v3.bootcss.com/css/#grid。


## API

## Props

### Grid

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|componentClass|elementType|optional|'div'|You can use a custom element for this component|
|fluid|boolean|optional|false|Turn any fixed-width grid layout into a full-width layout by this property. Adds `container-fluid` class.|

### Row

> 通过 `Grid.Row` 取得。

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|componentClass|elementType|optional|'div'|You can use a custom element for this component|


### Col

> 通过 `Grid.Col` 取得。

| 配置项 | 类型 | 功能/备注 |
|---|---|---|
|lg|number|The number of columns you wish to span for Large devices Desktops (≥1200px) `class-prefix col-lg-`|
|lgOffset|number|Move columns to the right for Large devices Desktops `class-prefix col-lg-offset-`|
|lgPull|number|Change the order of grid columns to the left for Large devices Desktops `class-prefix col-lg-pull-`|
|lgPush|number|Change the order of grid columns to the right for Large devices Desktops `class-prefix col-lg-push-`|
|md|number|The number of columns you wish to span for Medium devices Desktops (≥992px) `class-prefix col-md-`|
|mdOffset|number|Move columns to the right for Medium devices Desktops `class-prefix col-md-offset-`|
|mdPull|number|Change the order of grid columns to the left for Medium devices Desktops `class-prefix col-md-pull-`|
|mdPush|number|Change the order of grid columns to the right for Medium devices Desktops `class-prefix col-md-push-`|
|sm|number|The number of columns you wish to span for Small devices Tablets (≥768px) `class-prefix col-sm-`|
|smOffset|number|Move columns to the right for Small devices Tablets `class-prefix col-sm-offset-`|
|smPull|number|Change the order of grid columns to the left for Small devices Tablets `class-prefix col-sm-pull-`|
|smPush|number|Change the order of grid columns to the right for Small devices Tablets `class-prefix col-sm-push-`|
|xs|number|The number of columns you wish to span for Extra small devices Phones (<768px) `class-prefix col-xs-`|
|xsOffset|number|Move columns to the right for Extra small devices Phones `class-prefix col-xs-offset-`|
|xsPull|number|Change the order of grid columns to the left for Extra small devices Phones `class-prefix col-xs-pull-`|
|xsPush|number|Change the order of grid columns to the right for Extra small devices Phones `class-prefix col-xs-push-`|
