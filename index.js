// window.UXCORE = {
//   'uxcore-calendar': require('uxcore-calendar'),
//   'uxcore-button': require('uxcore-button'),
//   'uxcore-dialog': require('uxcore-dialog'),
//   'uxcore-select2': require('uxcore-select2'),
//   'uxcore-pagination': require('uxcore-pagination'),
//   'uxcore-tooltip': require('uxcore-tooltip'),
//   'uxcore-tabs': require('uxcore-tabs'),
//   'uxcore-form': require('uxcore-form'),
//   'uxcore-form-field': require('uxcore-form-field'),
//   'uxcore-grid': require('uxcore-grid'),
//   'uxcore-table': require('uxcore-table'),
//   'uxcore-dropdown': require('uxcore-dropdown'),
//   'uxcore-mention': require('uxcore-mention'),
//   'uxcore-tree': require('uxcore-tree'),
//   'uxcore-transfer': require('uxcore-transfer'),
//   'uxcore-popover': require('uxcore-popover'),
//   'uxcore-collapse': require('uxcore-collapse'),
//   'uxcore-progress': require('uxcore-progress'),
//   'uxcore-steps': require('uxcore-steps'),
//   'uxcore-uploader': require('uxcore-uploader'),
//   'uxcore-menu': require('uxcore-menu'),
//   'uxcore-matrix': require('uxcore-matrix'),
//   'uxcore-layout': require('uxcore-layout'),
//   'uxcore-crumb': require('uxcore-crumb'),
//   'uxcore-totop': require('uxcore-totop'),
//   'uxcore-checkbox-group': require('uxcore-checkbox-group'),
//   'uxcore-radiogroup': require('uxcore-radiogroup'),
//   'uxcore-alert': require('uxcore-alert'),
//   'uxcore-message': require('uxcore-message'),
//   'uxcore-validator': require('uxcore-validator'),
//   'uxcore-pickable': require('uxcore-pickable'),
//   'uxcore-rate': require('uxcore-rate'),
//   'uxcore-switch': require('uxcore-switch'),
//   'uxcore-badge': require('uxcore-badge'),
//   'uxcore-carousel': require('uxcore-carousel'),
//   'uxcore-tree-select': require('uxcore-tree-select'),
//   'uxcore-load-more': require('uxcore-load-more'),
//   'uxcore-multi-select': require('uxcore-multi-select'),
//   'uxcore-tinymce': require('uxcore-tinymce'),
//   'uxcore-album': require('uxcore-album'),
//   'uxcore-cascade-select': require('uxcore-cascade-select'),
//   'uxcore-animate': require('uxcore-animate'),
//   'uxcore-tag': require('uxcore-tag'),
//   'uxcore-empty-data': require('uxcore-empty-data'),
//   'uxcore-timeline': require('uxcore-timeline'),
//   'uxcore-float-nav': require('uxcore-float-nav'),
//   'uxcore-cascade-multi-select': require('uxcore-cascade-multi-select'),
//   'uxcore-icon': require('uxcore-icon'),
//   'uxcore-pickable-form-field': require('uxcore-pickable-form-field'),
//   'uxcore-title': require('uxcore-title'),
//   'uxcore-button-group': require('uxcore-button-group'),
//   'uxcore-cell-field': require('uxcore-cell-field'),
//   'uxcore-formatter': require('uxcore-formatter'),
//   'uxcore-time-picker': require('uxcore-time-picker'),
//   classnames: require('classnames'),
//   'object-assign': require('object-assign'),
//   'react-clipboard.js': require('react-clipboard.js').default,
// };

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

// window.Uxcore = uxcore;

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
