import { r as registerInstance, h, e as Host } from './index-164d94e1.js';

const lidsPillCss = ":host{display:inline-block}:host ::slotted(a){color:inherit !important;text-decoration:none !important}:host .lids-pill-wrapper{background-color:var(--lids-color-purple);border:none;color:var(--lids-color-white);padding:var(--lids-space-small) var(--lids-space-large);text-align:center;text-decoration:none;margin:var(--lids-space-xx-small) var(--lids-space-xxx-small);cursor:pointer;border-radius:var(--lids-radius-pill)}:host .lids-pill-wrapper:hover{background-color:var(--lids-color-purple-dark)}:host .lids-pill-wrapper:focus{background-color:var(--lids-color-purple-darker)}:host .lids-pill-wrapper:active{background-color:var(--lids-color-purple-darkest)}";

const Pill = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "lids-pill-wrapper" }, h("slot", null))));
  }
};
Pill.style = lidsPillCss;

export { Pill as lids_pill };
