import { Component, Host, h, Prop, State, Event } from '@stencil/core';
export class Searchbar {
  constructor() {
    /**
     * The placeholder to use for the input field.
     *
     * @type {string}
     * @memberof Searchbar
     */
    this.placeholder = '';
  }
  connectedCallback() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.submit.emit(this.value);
  }
  handleChange(event) {
    this.value = event.target.value;
  }
  render() {
    return (h(Host, null,
      h("form", { class: 'lids-search-form', onSubmit: this.handleSubmit },
        h("input", { class: 'lids-search-form-input', type: 'search', placeholder: this.placeholder, value: this.value, onInput: this.handleChange }),
        h("input", { class: 'lids-search-form-submit', type: 'submit', value: 'Search' }))));
  }
  static get is() { return "lids-searchbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-searchbar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-searchbar.css"]
  }; }
  static get properties() { return {
    "placeholder": {
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
        "tags": [{
            "text": "{string}",
            "name": "type"
          }, {
            "text": "Searchbar",
            "name": "memberof"
          }],
        "text": "The placeholder to use for the input field."
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "value": {}
  }; }
  static get events() { return [{
      "method": "submit",
      "name": "onsubmit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "text": "{EventEmitter<string>}",
            "name": "type"
          }, {
            "text": "Searchbar",
            "name": "memberof"
          }],
        "text": "Custom event dispatching the value of the input on submission."
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
