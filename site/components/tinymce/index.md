# Tinymce

- category: Components
- chinese: 富文本
- order: 2
- subtype: Form Control

---

## API

* resetValue(value)：重置 tinymce 的值。
参数：
    * value `string`：想要重置的值，支持富文本。

## props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|config|object|optional|{}|tinyMCE 的配置项，官方文档中所有 init 部分的配置在这里完成|
|content|string|optional|""|输入框中的默认值|
|placeholder|string|optional|-|占位符|
|onXXX|function|optional|-|tinyMCE 所有在 setup 中绑定的事件可以使用此属性来完成。如 onChange、onKeyup 等，会传入两个参数：e 和 editor 实例。|

### 图片上传配置
```js
uploadConfig: {
    "inputName": "imageUploadInput",//上传的file input的name属性，默认file
    "actionUrl": "http://example.com/upload.json",//数据提交后端处理接口，需要返回JSON格式数据
    "formatResult": function(response){ //数据返回结构化，optional，供老接口兼容使用，return的Object是plugin预期的结构
        return {
            content: {
                "name": response.result.name,
                "downloarUrl": response.result.url
            }
        };
    },
    "errorCallback": function(){ //自定义的错误回调，optional，不设置会直接alert错误
        console.log('errorCallback', arguments);
    },
    "progressCallback": function(){ //自定义的上传进度回调，optional，不设置不显示进度
        console.log('progressCallback', arguments);
    }
}
```

## Events 包括

```javascript
// Include all of the Native DOM and custom events from:
// https://github.com/tinymce/tinymce/blob/master/tools/docs/tinymce.Editor.js#L5-L12
const EVENTS = [
  'focusin', 'focusout', 'click', 'dblclick', 'mousedown', 'mouseup',
  'mousemove', 'mouseover', 'beforepaste', 'paste', 'cut', 'copy',
  'selectionchange', 'mouseout', 'mouseenter', 'mouseleave', 'keydown',
  'keypress', 'keyup', 'contextmenu', 'dragend', 'dragover', 'draggesture',
  'dragdrop', 'drop', 'drag', 'BeforeRenderUI', 'SetAttrib', 'PreInit',
  'PostRender', 'init', 'deactivate', 'activate', 'NodeChange',
  'BeforeExecCommand', 'ExecCommand', 'show', 'hide', 'ProgressState',
  'LoadContent', 'SaveContent', 'BeforeSetContent', 'SetContent',
  'BeforeGetContent', 'GetContent', 'VisualAid', 'remove', 'submit', 'reset',
  'BeforeAddUndo', 'AddUndo', 'change', 'undo', 'redo', 'ClearUndos',
  'ObjectSelected', 'ObjectResizeStart', 'ObjectResized', 'PreProcess',
  'PostProcess', 'focus', 'blur',
];
```
> 事件的具体含义和触发机制参考：`https://github.com/tinymce/tinymce/blob/master/tools/docs/tinymce.Editor.js#L5-L12`

## FAQ

* Q1: 如何能够准确地监听输入框的变化？
  A1: 建议同时监听 onChange 和 onKeyup 事件，更复杂的讨论见：https://github.com/uxcore/uxcore-tinymce/issues/1