'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-723b60be.js');

const lidsMastheadCss = ":host{display:block;box-shadow:0 8px 6px -8px var(--lids-color-gray-lighter);padding:0 var(--lids-space-xxxx-large)}:host .lids-masthead-container{height:56px;display:flex;align-items:center}:host .lids-masthead-title{display:flex;flex:0 1 auto}:host .lids-masthead-action{display:flex;justify-content:flex-end;flex:1 0 auto}:host .lids-masthead-action [name=action]::slotted(*){display:flex;padding:0;align-items:center;justify-content:flex-end}";

const Masthead = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: 'lids-masthead-container' }, index.h("div", { class: 'lids-masthead-title' }, index.h("slot", { name: 'title' })), index.h("div", { class: 'lids-masthead-action' }, index.h("slot", { name: 'action' })))));
  }
};
Masthead.style = lidsMastheadCss;

exports.lids_masthead = Masthead;
