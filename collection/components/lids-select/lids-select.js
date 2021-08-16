import { Component, Host, h, Element, Prop, Event } from '@stencil/core';
export class Select {
  constructor() {
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
    return (h(Host, null,
      h("select", { class: 'lids-select', onInput: this.handleSelect }, this.childrens.map(children => (h("option", { class: 'lids-select-option', value: children.value, selected: this.value === children.value }, children.innerText))))));
  }
  static get is() { return "lids-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-select.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "{string}",
            "name": "type"
          }, {
            "text": "Select",
            "name": "memberof"
          }],
        "text": "The current value of the element."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get events() { return [{
      "method": "change",
      "name": "onchange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "text": "{EventEmitter<string>}",
            "name": "type"
          }, {
            "text": "Select",
            "name": "memberof"
          }],
        "text": "Custom event dispatching the value of the select on submission."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "select"; }
}
