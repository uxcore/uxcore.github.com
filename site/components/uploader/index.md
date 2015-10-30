# Uploader

- category: Components
- chinese: 文件上传
- order: 14
- subtype: 表单及相关

---

上传组件, 封装[UploadCore](https://github.com/uxcore/uxcore-uploadcore/)核心组件, 作为UI层.

## Props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className |                |          |              |
|core      | 唯一标识或者UploadCore对象, 防止重复创建, 当传入UploadCore对象时,下列参数和事件设置均无效 | string, `UploadCore` | null |
|name      | 上传文件字段名称 | string | 'file' |
|url       | 响应上传服务器地址 | string | '' |
|params    | 上传文件额外参数 | object, array | null |
|headers   | 上传文件额外头 | array | null |
|withCredentials | 上传文件是否自动附带cookie等信息 | bool | false |
|timeout | 上传超时限制 0表示不限制 | int | 0 |
|chunkEnable | 是否允许分片上传 | bool | false |
|chunkSize | 文件分片大小, 默认单位b，0不分片 | size | 0 |
|chunkRetries | 文件分片上传重试次数 | int | 0 |
|chunkProcessThreads | 分片上传并发数 | int | 2 |
|processThreads | 文件上传并发数 | int | 2 |
|queueCapcity | 队列容量，0无限 | int | 0 |
|autoPending | 是否选择后自动等待上传 | bool | true |
|multiple | 是否多选 | bool | true |
|accept | 允许文件类型 | string,array | null |
|sizeLimit | 文件大小限制, 0表示不限制 | size | 0 |
|preventDuplicate | 是否防止文件重复 | bool | false |

## Events

| name     | arguments    | description      |
|----------|--------------|------------------|
|onqueueuploadstart | | 队列上传开始 |
|onqueueuploadend | | 队列上传结束 |
|onqueuefileadded | `File` | 队列添加了一个文件 |
|onqueuefilefiltered | `File`, `Error` | 队列过滤了一个文件 |
|onqueueerror | `Error` | 队列错误 |
|onstatchange | `Stat` | 文件统计发生变化 |
|onfileuploadstart | `File` | 文件上传开始 |
|onfileuploadpreparing | `FileRequest` | 文件上传准备时 |
|onfileuploadprepared | `File`, `FileRequest` | 文件上传准备好了 |
|onchunkuploadpreparing | `ChunkRequest` |  分块上传准备时 |
|onchunkuploadcompleting | `ChunkResponse` |  分块上传结束时 |
|onfileuploadprogress | `File`, `Progress` | 文件上传进度中 |
|onfileuploadend | `File` | 文件上传结束 |
|onfileuploadcompleting | `FileResponse` |  文件上传结束时 |
|onfileuploadsuccess | `File`, `FileResponse` | 文件上传成功 |
|onfileuploaderror | `File`, `Error` | 文件上传失败 |
|onfileuploadcompleted | `File`, `Status`| 文件上传完成了 |
|onfilecancel | `File` | 文件退出 |
|onfilestatuschange | `File`, `Status` | 文件状态发生变化 |


具体配置信息见<https://github.com/uxcore/uxcore-uploadcore/blob/master/README.md>.
