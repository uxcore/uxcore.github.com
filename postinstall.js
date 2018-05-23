const fs = require('fs');

fs.copyFileSync('./node_modules/uxcore/README_CN.md', './site/start/base/index.md');

const startMdPath = './node_modules/uxcore/README_CN.md';
let startMd = fs.readFileSync(startMdPath, 'utf-8');
startMd = startMd.replace('中文 | [English](./README.md)', '');
startMd = `
- order: 0
- category: START
- chinese: 开始使用

---
${startMd}`;

fs.writeFileSync('./site/start/base/index.md', startMd);

