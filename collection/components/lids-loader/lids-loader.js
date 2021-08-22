import { Component, Host, h, Prop } from '@stencil/core';
export class Loader {
  constructor() {
    /**
     * Define if the component is visible or not.
     *
     * @type {boolean}
     * @memberof Loader
     */
    this.concealed = false;
  }
  render() {
    return (h(Host, { class: { 'lids-loader--concealed': this.concealed } },
      h("div", { class: 'lids-loader-element' }),
      h("div", { class: 'lids-loader-element' })));
  }
  static get is() { return "lids-loader"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-loader.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-loader.css"]
  }; }
  static get properties() { return {
    "concealed": {
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
            "text": "Loader",
            "name": "memberof"
          }],
        "text": "Define if the component is visible or not."
      },
      "attribute": "concealed",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
