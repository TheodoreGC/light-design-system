import { r as registerInstance, h, e as Host } from './index-164d94e1.js';

const lidsOptionCss = ":host{display:block}";

const Option = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = '';
    this.selected = false;
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
Option.style = lidsOptionCss;

export { Option as lids_option };
