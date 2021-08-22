import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lids-pill',
  styleUrl: 'lids-pill.scss',
  shadow: true
})
export class Pill {
  render() {
    return (
      <Host>
        <div class="lids-pill-wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
