/* lids custom elements bundle */

import type { Components, JSX } from "../types/components";

interface LidsCard extends Components.LidsCard, HTMLElement {}
export const LidsCard: {
  prototype: LidsCard;
  new (): LidsCard;
};

interface LidsIcon extends Components.LidsIcon, HTMLElement {}
export const LidsIcon: {
  prototype: LidsIcon;
  new (): LidsIcon;
};

interface LidsLoader extends Components.LidsLoader, HTMLElement {}
export const LidsLoader: {
  prototype: LidsLoader;
  new (): LidsLoader;
};

interface LidsMasthead extends Components.LidsMasthead, HTMLElement {}
export const LidsMasthead: {
  prototype: LidsMasthead;
  new (): LidsMasthead;
};

interface LidsOption extends Components.LidsOption, HTMLElement {}
export const LidsOption: {
  prototype: LidsOption;
  new (): LidsOption;
};

interface LidsPill extends Components.LidsPill, HTMLElement {}
export const LidsPill: {
  prototype: LidsPill;
  new (): LidsPill;
};

interface LidsSearchbar extends Components.LidsSearchbar, HTMLElement {}
export const LidsSearchbar: {
  prototype: LidsSearchbar;
  new (): LidsSearchbar;
};

interface LidsSelect extends Components.LidsSelect, HTMLElement {}
export const LidsSelect: {
  prototype: LidsSelect;
  new (): LidsSelect;
};

interface LidsSwitch extends Components.LidsSwitch, HTMLElement {}
export const LidsSwitch: {
  prototype: LidsSwitch;
  new (): LidsSwitch;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  ce?: (eventName: string, opts?: any) => CustomEvent;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;

export type { Components, JSX };

export * from '../types';
