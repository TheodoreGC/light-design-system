'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-723b60be.js');

const lidsOptionCss = ":host{display:block}";

const Option = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.value = '';
    this.selected = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
Option.style = lidsOptionCss;

exports.lids_option = Option;
