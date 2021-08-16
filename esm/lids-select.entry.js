import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-164d94e1.js';

const lidsSelectCss = ":host{display:block;position:relative}:host::after{position:absolute;margin-top:-4px;top:50%;right:8px;content:\"\";width:0.8rem;height:0.5rem;background-color:var(--lids-color-gray-darkest);clip-path:polygon(100% 0%, 0 0%, 50% 100%)}:host .lids-select{width:100%;margin:0;padding:var(--lids-space-medium);border-radius:var(--lids-radius-default);box-shadow:0 0 4px 0 var(--lids-color-gray-lighter);border:none;outline:none;appearance:none;cursor:pointer}:host .lids-select::-ms-expand{display:none}";

const Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.change = createEvent(this, "onchange", 7);
    /**
     * The current value of the element.
     *
     * @type {string}
     * @memberof Select
     */
    this.value = '';
  }
  connectedCallback() {
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentWillLoad() {
    var _a;
    this.childrens = Array.from(this.select.children);
    this.value = (_a = this.childrens[0]) === null || _a === void 0 ? void 0 : _a.value;
    this.select.innerHTML = '';
  }
  handleSelect(event) {
    event.preventDefault();
    this.value = event.target.value;
    this.change.emit(this.value);
  }
  render() {
    return (h(Host, null, h("select", { class: 'lids-select', onInput: this.handleSelect }, this.childrens.map(children => (h("option", { class: 'lids-select-option', value: children.value, selected: this.value === children.value }, children.innerText))))));
  }
  get select() { return getElement(this); }
};
Select.style = lidsSelectCss;

export { Select as lids_select };
