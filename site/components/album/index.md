# Album

- category: Components
- subtype: Presentation
- chinese:　相册

---

### Album.Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| width | number or string | no | '' | the default image cover's width |
| height | number or string | no | '' | the default image cover's height |
| enableKeyBoardControl | boolean | no | true | whether the album can be controlled by the keyboard navigation |
| enableThumbs | boolean | no | false | whether the show thumbnail list|
| thumbPlacement | string | no | right | the placement of thumbnail, you can set 'top'/'right'/'bottom'/'left'/ |
| thumbBackground | string | no | #000 | if the image couldn't cover the gird, give it a background|

### Photo.Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| src | string | yes | '' | same as img's src |
| thumb-src | string | no | '' | set thumbnail image source if 'enableThumbs' is true |

## Method

### Album.show(config)

 With this method, the component can be used by calling `Album.show({src: 'foo/url'})` or `Album.show({photos: [<Photo src="#url1" />, <Photo src="#url2" />]})` directly.

#### config

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| src | string | false | null | the image src |
| photos | array of `Photo` | false | [] | array of Photo element |
| getContainer | function | false | the function will append a new div to document body. | define the container which album rendered into |
