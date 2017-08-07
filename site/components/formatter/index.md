# Formatter

- category: Components
- subtype: Tool
- chinese:　格式化

---

## Usage
``` js
var Formatter = require("uxcore-formatter");
console.log(Formatter.date(new Date(), 'YYYY-MM-DD'));
```

## API

> 目前提供的函数包括：

### Date
```javascript
Formatter.date(new Date(), 'YYYY-MM-DD HH:mm:ss'); // 2015-10-12 14:22:16
```

### money

```javascript

Formatter.money("6566456.65466545") // "6 566 456.65466545"
Formatter.money("6566456.65466545", ",")  // "6,566,456.65466545"
Formatter.money("6566456", ",")  // "6,566,456"
Formatter.money("6566456", ",", 4) // "6,566,456.0000"
Formatter.money("6566456", ",", 2) // "6,566,456.00"
Formatter.money("6566456.65466545", ",", 4)  // "6,566,456.6547"
Formatter.money("6566456.65466545", ",", 2) // "6,566,456.65"

```

### cnmobile
```javascript
Formatter.cnmobile('+8615652988282', ' '); // +86 1565 2988 282
```

### card
```javascript
Formatter.cnmobile('1565298828212233', ' '); // 1565 2988 2821 2233
```

