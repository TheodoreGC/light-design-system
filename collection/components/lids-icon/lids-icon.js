import { Component, Host, h, Prop, Element } from '@stencil/core';
import * as icons from './index';
import { underscoreCapitalize } from '../../utils/utils';
export class Icon {
  constructor() {
    this.width = '16px';
    this.height = '16px';
  }
  componentDidLoad() {
    const svgElement = this.element.shadowRoot.querySelector('svg');
    svgElement.innerHTML = this.svg.innerHTML;
  }
  render() {
    const icon = icons[`lidsIcon${underscoreCapitalize(this.name)}`];
    const iconHTML = new DOMParser().parseFromString(icon === null || icon === void 0 ? void 0 : icon.data, 'text/html');
    this.svg = iconHTML.querySelector('svg');
    return (h(Host, null,
      h("svg", { xmlns: 'http://www.w3.org/2000/svg', width: this.width, height: this.height, viewBox: '0 0 512 512' })));
  }
  static get is() { return "lids-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-icon.css"]
  }; }
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": true
    },
    "width": {
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
      "attribute": "width",
      "reflect": true,
      "defaultValue": "'16px'"
    },
    "height": {
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
      "attribute": "height",
      "reflect": true,
      "defaultValue": "'16px'"
    }
  }; }
  static get elementRef() { return "element"; }
}
