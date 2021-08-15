import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lids-card',
  styleUrl: 'lids-card.scss',
  shadow: true
})
export class Card {
  render() {
    return (
      <Host>
        <div class='lids-card-content-wrapper'>
          <slot></slot>
          <div class="lids-card-content-header">
            <slot name='header'></slot>
          </div>
          <div class="lids-card-content-body">
            <slot name='body'></slot>
          </div>
          <div class="lids-card-content-footer">
            <slot name='footer'></slot>
          </div>
        </div>
      </Host>
    );
  }
}
