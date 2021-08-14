import { Component, Host, h, Prop, Element } from '@stencil/core';
import * as icons from './index';
import { underscoreCapitalize } from '../../utils/utils';

@Component({
  tag: 'lids-icon',
  styleUrl: 'lids-icon.scss',
  shadow: true
})
export class Icon {
  @Element() element: HTMLLidsIconElement;

  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) width: string = '16px';
  @Prop({ reflect: true }) height: string = '16px';

  componentDidLoad() {
    const svgElement = this.element.shadowRoot.querySelector('svg');
    svgElement.innerHTML = this.svg.innerHTML;
  }

  private svg: SVGElement;

  render() {
    const icon = icons[`lidsIcon${underscoreCapitalize(this.name)}`];
    const iconHTML = new DOMParser().parseFromString(icon?.data, 'text/html');
    this.svg = iconHTML.querySelector('svg');

    return (
      <Host>
        <svg xmlns='http://www.w3.org/2000/svg' width={this.width} height={this.height} viewBox='0 0 512 512'></svg>
      </Host>
    );
  }
}
