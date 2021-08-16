'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-723b60be.js');

const lidsCardCss = ":host{display:block;box-shadow:1px 1px var(--lids-space-xx-small) var(--lids-color-gray-lighter);border-radius:var(--lids-radius-default)}:host .lids-card-content-header,:host .lids-card-content-body,:host .lids-card-content-footer{padding:var(--lids-space-x-small);margin:0 var(--lids-space-medium)}";

const Card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: 'lids-card-content-wrapper' }, index.h("slot", null), index.h("div", { class: "lids-card-content-header" }, index.h("slot", { name: 'header' })), index.h("div", { class: "lids-card-content-body" }, index.h("slot", { name: 'body' })), index.h("div", { class: "lids-card-content-footer" }, index.h("slot", { name: 'footer' })))));
  }
};
Card.style = lidsCardCss;

exports.lids_card = Card;
