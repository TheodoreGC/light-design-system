import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lids-masthead',
  styleUrl: 'lids-masthead.scss',
  shadow: true
})
export class Masthead {
  render() {
    return (
      <Host>
        <div class='lids-masthead-container'>
          <div class='lids-masthead-title'>
            <slot name='title'></slot>
          </div>
          <div class='lids-masthead-action'>
            <slot name='action'></slot>
          </div>
        </div>
      </Host>
    );
  }
}
