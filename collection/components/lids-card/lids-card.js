import { Component, Host, h } from '@stencil/core';
export class Card {
  render() {
    return (h(Host, null,
      h("div", { class: 'lids-card-content-wrapper' },
        h("slot", null),
        h("div", { class: "lids-card-content-header" },
          h("slot", { name: 'header' })),
        h("div", { class: "lids-card-content-body" },
          h("slot", { name: 'body' })),
        h("div", { class: "lids-card-content-footer" },
          h("slot", { name: 'footer' })))));
  }
  static get is() { return "lids-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-card.css"]
  }; }
}
