import { Component, Host, h, Element, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'lids-select',
  styleUrl: 'lids-select.scss',
  shadow: true
})
export class Select {
  @Element() select: HTMLLidsSelectElement;

  /**
   * The current value of the element.
   *
   * @type {string}
   * @memberof Select
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Custom event dispatching the value of the select on submission.
   *
   * @type {EventEmitter<string>}
   * @memberof Select
   */
  @Event({
    eventName: 'onchange',
    composed: true,
    cancelable: true,
    bubbles: true
  }) change: EventEmitter<string>

  private childrens: HTMLLidsOptionElement[];

  connectedCallback() {
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillLoad() {
    this.childrens = Array.from(this.select.children) as unknown as HTMLLidsOptionElement[];
    this.value = this.childrens[0]?.value;
    this.select.innerHTML = '';
  }

  private handleSelect(event) {
    event.preventDefault();
    this.value = event.target.value;
    this.change.emit(this.value);
  }

  render() {
    return (
      <Host>
        <select class='lids-select' onInput={this.handleSelect}>
          {this.childrens.map(children => (
            <option class='lids-select-option' value={children.value} selected={this.value === children.value}>{children.innerText}</option>
          ))}
        </select>
      </Host>
    );
  }
}
