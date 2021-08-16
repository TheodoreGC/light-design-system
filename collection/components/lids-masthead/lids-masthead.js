import { Component, Host, h } from '@stencil/core';
export class Masthead {
  render() {
    return (h(Host, null,
      h("div", { class: 'lids-masthead-container' },
        h("div", { class: 'lids-masthead-title' },
          h("slot", { name: 'title' })),
        h("div", { class: 'lids-masthead-action' },
          h("slot", { name: 'action' })))));
  }
  static get is() { return "lids-masthead"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-masthead.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-masthead.css"]
  }; }
}
