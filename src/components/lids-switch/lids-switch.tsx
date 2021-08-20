import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'lids-switch',
  styleUrl: 'lids-switch.scss',
  shadow: true
})
export class Switch {
  /**
   * Define the shape of the toggle switch.
   *
   * @type {boolean}
   * @memberof Switch
   */
  @Prop() rounded: boolean = false;

  /**
   * Specify the element should be pre-selected.
   *
   * @type {boolean}
   * @memberof Switch
   */
  @Prop({ reflect: true }) checked: boolean = false;

  /**
   * Custom event dispatching the value of the input on submission.
   *
   * @type {EventEmitter<{ checked: boolean }>}
   * @memberof Switch
   */
  @Event({
    eventName: 'onchange',
    composed: true,
    cancelable: true,
    bubbles: true
  }) change: EventEmitter<{ checked: boolean }>

  connectedCallback() {
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  private handleSwitch(event: Event) {
    event.preventDefault();
    this.checked = (event.target as HTMLInputElement).checked;
    this.change.emit({ checked: this.checked });
  }

  render() {
    return (
      <Host>
        <label class='lids-switch-form-label'>
          <input class='lids-switch-form-checkbox' type="checkbox" checked={this.checked} onInput={this.handleSwitch} />
          <span class={{ 'lids-switch-form-slider': true, 'lids-switch-form-slider--rounded': this.rounded }}></span>
        </label>
      </Host>
    );
  }
}
