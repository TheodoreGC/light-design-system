'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-723b60be.js');

const lidsLoaderCss = ":root{--lids-loader-thickness:4px;--lids-loader-size-ratio:1}:host(.lids-loader--concealed){display:none}:host{display:inline-block;position:relative}:host .lids-loader-element{position:absolute;border:var(--lids-loader-thickness, var(--lids-space-xx-small)) solid var(--lids-color-gray-lighter);opacity:1;border-radius:var(--lids-radius-circle);animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite}:host .lids-loader-element:nth-child(2){animation-delay:-0.5s}@keyframes lds-ripple{0%{top:calc(28px * var(--lids-loader-size-ratio, 1));left:calc(28px * var(--lids-loader-size-ratio, 1));width:0;height:0;opacity:1}100%{top:-1px;left:-1px;width:calc(58px * var(--lids-loader-size-ratio, 1));height:calc(58px * var(--lids-loader-size-ratio, 1));opacity:0}}";

const Loader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Define if the component is visible or not.
     *
     * @type {boolean}
     * @memberof Loader
     */
    this.concealed = false;
  }
  render() {
    return (index.h(index.Host, { class: { 'lids-loader--concealed': this.concealed } }, index.h("div", { class: 'lids-loader-element' }), index.h("div", { class: 'lids-loader-element' })));
  }
};
Loader.style = lidsLoaderCss;

exports.lids_loader = Loader;
