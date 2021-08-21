import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lids-loader',
  styleUrl: 'lids-loader.scss',
  shadow: true
})
export class Loader {
  /**
   * Define if the component is visible or not.
   *
   * @type {boolean}
   * @memberof Loader
   */
  @Prop() concealed: boolean = false;

  render() {
    return (
      <Host class={{ 'lids-loader--concealed': this.concealed }}>
        <div class='lids-loader-element'></div>
        <div class='lids-loader-element'></div>
      </Host>
    );
  }
}
