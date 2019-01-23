# UserGuide

- category: Components
- chinese: 用户引导
- subtype: Presentation

---

用户引导，当产品上线了新功能，用户第一次接触时，用一种分步骤聚焦引导的交互告诉用户新的功能点或功能变化。

## Usage

一个产品或者页面中可能有多个引导，需要通过提供一个独立的 key 给工厂方法 getWithKey 来返回一个独立的实例。

```javascript
import UserGuide from 'uxcore-user-guide';

const demoUserGuide = UserGuide.getWithKey('demo');
```

然后给这个引导添加步骤，每个步骤可以有4种选择

* 使用React HOC

```javascript
const Step1 = demoUserGuide.addUserGuide({
  dom: 'button',
  step: 1,
  hint: '我是第一步提示',
  type: 'ReactComponent',
});
```

* 使用DOM

```javascript
const Step1 = demoUserGuide.addUserGuide({
  dom: document.getElementById('app'),
  step: 2,
  hint: '我是第二步提示',
  type: 'HTMLElement',
});
```

* 使用一个函数返回DOM

```javascript
const Step1 = demoUserGuide.addUserGuide({
  getDom() { return document.getElementById('app'); },
  step: 3,
  hint: '我是第三步提示',
  type: 'HTMLElementMaker',
});
```

* 使用图片

```javascript
demoUserGuide.addUserGuide({
  step: 4,
  hint: '我是第四步的提示，我也没有对应的DOM',
  type: 'Image',
  top: 1800,
  left: 1000,
  image: 'https://img.alicdn.com/tfs/TB1TRNAllfH8KJjy1XbXXbLdXXa-240-240.png',
  imageHeight: 120,
  imageWidth: 120,
});
```

* 需要开始引导时，请调用 start 方法

```javascript
demoUserGuide.start();
```