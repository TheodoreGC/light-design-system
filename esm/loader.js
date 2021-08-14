import { B as BUILD, C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-943f092a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (BUILD.cssVarShim && !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-003e9264.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  globalScripts();
  return bootstrapLazy([["lids-icon",[[1,"lids-icon",{"name":[513],"width":[513],"height":[513]}]]]], options);
  });
};

export { defineCustomElements };
