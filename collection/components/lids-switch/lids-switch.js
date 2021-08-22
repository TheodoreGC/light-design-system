import { Component, Host, h, Prop, Event } from '@stencil/core';
export class Switch {
  constructor() {
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
    return (h(Host, null,
      h("label", { class: 'lids-switch-form-label' },
        h("input", { class: 'lids-switch-form-checkbox', type: "checkbox", checked: this.checked, onInput: this.handleSwitch }),
        h("span", { class: { 'lids-switch-form-slider': true, 'lids-switch-form-slider--rounded': this.rounded } }))));
  }
  static get is() { return "lids-switch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-switch.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-switch.css"]
  }; }
  static get properties() { return {
    "rounded": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "{boolean}",
            "name": "type"
          }, {
            "text": "Switch",
            "name": "memberof"
          }],
        "text": "Define the shape of the toggle switch."
      },
      "attribute": "rounded",
      "reflect": false,
      "defaultValue": "false"
    },
    "checked": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "{boolean}",
            "name": "type"
          }, {
            "text": "Switch",
            "name": "memberof"
          }],
        "text": "Specify the element should be pre-selected."
      },
      "attribute": "checked",
      "reflect": true,
      "defaultValue": "false"
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
            "text": "{EventEmitter<{ checked: boolean }>}",
            "name": "type"
          }, {
            "text": "Switch",
            "name": "memberof"
          }],
        "text": "Custom event dispatching the value of the input on submission."
      },
      "complexType": {
        "original": "{ checked: boolean }",
        "resolved": "{ checked: boolean; }",
        "references": {}
      }
    }]; }
}
