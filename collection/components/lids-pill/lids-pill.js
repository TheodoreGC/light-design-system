import { Component, Host, h } from '@stencil/core';
export class Pill {
  render() {
    return (h(Host, null,
      h("div", { class: "lids-pill-wrapper" },
        h("slot", null))));
  }
  static get is() { return "lids-pill"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["lids-pill.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["lids-pill.css"]
  }; }
}
