'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-723b60be.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (index.BUILD.cssVarShim && !(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-e3f30f9a.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["lids-card.cjs",[[1,"lids-card"]]],["lids-icon.cjs",[[1,"lids-icon",{"name":[513],"width":[513],"height":[513]}]]],["lids-masthead.cjs",[[1,"lids-masthead"]]],["lids-option.cjs",[[1,"lids-option",{"value":[1],"selected":[4]}]]],["lids-searchbar.cjs",[[1,"lids-searchbar",{"placeholder":[1],"value":[32]}]]],["lids-select.cjs",[[1,"lids-select",{"value":[1025]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
