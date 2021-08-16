import { r as registerInstance, h, e as Host } from './index-164d94e1.js';

const lidsCardCss = ":host{display:block;box-shadow:1px 1px var(--lids-space-xx-small) var(--lids-color-gray-lighter);border-radius:var(--lids-radius-default)}:host .lids-card-content-header,:host .lids-card-content-body,:host .lids-card-content-footer{padding:var(--lids-space-x-small);margin:0 var(--lids-space-medium)}";

const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: 'lids-card-content-wrapper' }, h("slot", null), h("div", { class: "lids-card-content-header" }, h("slot", { name: 'header' })), h("div", { class: "lids-card-content-body" }, h("slot", { name: 'body' })), h("div", { class: "lids-card-content-footer" }, h("slot", { name: 'footer' })))));
  }
};
Card.style = lidsCardCss;

export { Card as lids_card };
