'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-723b60be.js');

const lidsPillCss = ":host{display:inline-block}:host ::slotted(a){color:inherit !important;text-decoration:none !important}:host .lids-pill-wrapper{background-color:var(--lids-color-purple);border:none;color:var(--lids-color-white);padding:var(--lids-space-small) var(--lids-space-large);text-align:center;text-decoration:none;margin:var(--lids-space-xx-small) var(--lids-space-xxx-small);cursor:pointer;border-radius:var(--lids-radius-pill)}:host .lids-pill-wrapper:hover{background-color:var(--lids-color-purple-dark)}:host .lids-pill-wrapper:focus{background-color:var(--lids-color-purple-darker)}:host .lids-pill-wrapper:active{background-color:var(--lids-color-purple-darkest)}";

const Pill = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "lids-pill-wrapper" }, index.h("slot", null))));
  }
};
Pill.style = lidsPillCss;

exports.lids_pill = Pill;
