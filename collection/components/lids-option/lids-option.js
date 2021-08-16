import { Component, Host, h, Prop } from '@stencil/core';
export class Option {
  constructor() {
    this.value = '';
    this.selected = false;
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "lids-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-option.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-option.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    },
    "selected": {
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
        "tags": [],
        "text": ""
      },
      "attribute": "selected",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
