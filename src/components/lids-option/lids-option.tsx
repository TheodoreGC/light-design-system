import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lids-option',
  styleUrl: 'lids-option.scss',
  shadow: true
})
export class Option {
  @Prop() value: string = '';
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
