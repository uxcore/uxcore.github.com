import UXCore from 'uxcore';
import to from 'to-case';
import classnames from 'classnames';
import assign from 'object-assign';
import clipboard from 'react-clipboard.js';

const pkgMap = {
  classnames,
  'object-assign': assign,
  'react-clipboard.js': clipboard,
};

window.require = (key) => {
  let component = key;
  if (key === 'uxcore') {
    component = UXCore;
  } else if (/uxcore-(.+)/.exec(key)) {
    component = UXCore[to.pascal(key.split('-').slice(1).join('-'))];
  } else if (key in pkgMap) {
    component = pkgMap[key];
  } else {
    console.error(`${key} cannot match any package`);
  }
  return component;
};

/*
 * init code highlighter
 */
$(() => {
  require('./theme/js/navigation');
  // require('./theme/js/setting');
  require('./theme/js/doc');
});
