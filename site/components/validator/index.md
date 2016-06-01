# Validator

- category: Components
- subtype: Tool
- chinese:　基础校验

---

> 供了一些通用的 validator  
> 所有的 validator 返回 true，表示通过。  

* isNotEmpty: 空对象、空数组、空字符串都被理解为空。
* isNum: 判断是否为数字，注意这里的数字包括字符串和数值两种数据类型。
* isInt: 是否是整数
* isDecimal: 是否是小数
* isArray
* isRegExp
* isObject
* isFunc
* isEmail
* isUrl: 只做 host 部分的检测，这只是一个非常基础的检测，通过你需要搭配非法字符一同进行。
* isHex
* isIdCard: 是否是中国身份证。
* isCNMobile: 是否是中国手机号。


## Usage

```
var validator = require("uxcore-validator");
console.log(validator.isNum(1));
// return true
console.log(validator.isNum("1"));
// return true
console.log(validator.isNum("a"));
// return false
```