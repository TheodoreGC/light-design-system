import { r as registerInstance, h, e as Host } from './index-164d94e1.js';

const lidsMastheadCss = ":host{display:block;box-shadow:0 8px 6px -8px var(--lids-color-gray-lighter);padding:0 var(--lids-space-xxxx-large)}:host .lids-masthead-container{height:56px;display:flex;align-items:center}:host .lids-masthead-title{display:flex;flex:0 1 auto}:host .lids-masthead-action{display:flex;justify-content:flex-end;flex:1 0 auto}:host .lids-masthead-action [name=action]::slotted(*){display:flex;padding:0;align-items:center;justify-content:flex-end}";

const Masthead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: 'lids-masthead-container' }, h("div", { class: 'lids-masthead-title' }, h("slot", { name: 'title' })), h("div", { class: 'lids-masthead-action' }, h("slot", { name: 'action' })))));
  }
};
Masthead.style = lidsMastheadCss;

export { Masthead as lids_masthead };
