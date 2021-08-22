import { r as registerInstance, f as createEvent, h, e as Host } from './index-164d94e1.js';

const lidsSwitchCss = ":root{--lids-switch-width:60px;--lids-switch-height:34px}:host{display:block}:host .lids-switch-form-label{position:relative;display:inline-block;width:var(--lids-switch-width, 60px);height:var(--lids-switch-height, 34px)}:host .lids-switch-form-checkbox{opacity:0;width:0;height:0}:host .lids-switch-form-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--lids-color-gray-lighter);-webkit-transition:all var(--lids-transition-quickly);transition:all var(--lids-transition-quickly)}:host .lids-switch-form-slider::before{position:absolute;content:\"\";width:calc(var(--lids-switch-height, 34px) - var(--lids-space-x-small));height:calc(var(--lids-switch-height, 34px) - var(--lids-space-x-small));left:var(--lids-space-xx-small);bottom:var(--lids-space-xx-small);background-color:var(--lids-color-white);-webkit-transition:all var(--lids-transition-quickly);transition:all var(--lids-transition-quickly)}:host .lids-switch-form-slider--rounded{border-radius:var(--lids-switch-height, 34px)}:host .lids-switch-form-slider--rounded::before{border-radius:var(--lids-radius-circle)}:host .lids-switch-form-checkbox:checked+.lids-switch-form-slider{background-color:var(--lids-color-purple)}:host .lids-switch-form-checkbox:focus+.lids-switch-form-slider{box-shadow:0 0 1px var(--lids-color-purple)}:host .lids-switch-form-checkbox:checked+.lids-switch-form-slider::before{-webkit-transform:translateX(calc(var(--lids-switch-height, 34px) - var(--lids-space-x-small)));-ms-transform:translateX(calc(var(--lids-switch-height, 34px) - var(--lids-space-x-small)));transform:translateX(calc(var(--lids-switch-height, 34px) - var(--lids-space-x-small)))}";

const Switch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "onchange", 7);
    /**
     * Define the shape of the toggle switch.
     *
     * @type {boolean}
     * @memberof Switch
     */
    this.rounded = false;
    /**
     * Specify the element should be pre-selected.
     *
     * @type {boolean}
     * @memberof Switch
     */
    this.checked = false;
  }
  connectedCallback() {
    this.handleSwitch = this.handleSwitch.bind(this);
  }
  handleSwitch(event) {
    event.preventDefault();
    this.checked = event.target.checked;
    this.change.emit({ checked: this.checked });
  }
  render() {
    return (h(Host, null, h("label", { class: 'lids-switch-form-label' }, h("input", { class: 'lids-switch-form-checkbox', type: "checkbox", checked: this.checked, onInput: this.handleSwitch }), h("span", { class: { 'lids-switch-form-slider': true, 'lids-switch-form-slider--rounded': this.rounded } }))));
  }
};
Switch.style = lidsSwitchCss;

export { Switch as lids_switch };
