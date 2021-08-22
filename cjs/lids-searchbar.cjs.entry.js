'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-723b60be.js');

const lidsSearchbarCss = ":host{display:block}:host .lids-search-form{display:inline-flex}:host .lids-search-form-input,:host .lids-search-form-submit{padding:var(--lids-space-medium);border-radius:var(--lids-radius-default);box-shadow:0 0 4px 0 var(--lids-color-gray-lighter)}:host .lids-search-form-input{border-top-right-radius:0;border-bottom-right-radius:0;border:none;outline:none}:host .lids-search-form-submit{background-color:var(--lids-color-purple);color:var(--lids-color-white);border-top-left-radius:0;border-bottom-left-radius:0;cursor:pointer;border:1px solid var(--lids-color-purple);border-left:none}:host .lids-search-form-submit:hover{background-color:var(--lids-color-purple-dark);border-color:var(--lids-color-purple-dark)}:host .lids-search-form-submit:focus{background-color:var(--lids-color-purple-darker);border-color:var(--lids-color-purple-darker)}:host .lids-search-form-submit:active{background-color:var(--lids-color-purple-darkest);border-color:var(--lids-color-purple-darkest)}";

const Searchbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.submit = index.createEvent(this, "onsubmit", 7);
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
    return (index.h(index.Host, null, index.h("form", { class: 'lids-search-form', onSubmit: this.handleSubmit }, index.h("input", { class: 'lids-search-form-input', type: 'search', placeholder: this.placeholder, value: this.value, onInput: this.handleChange }), index.h("input", { class: 'lids-search-form-submit', type: 'submit', value: 'Search' }))));
  }
};
Searchbar.style = lidsSearchbarCss;

exports.lids_searchbar = Searchbar;