import { Component, Host, EventEmitter, h, Prop, State, Event } from '@stencil/core';

@Component({
  tag: 'lids-searchbar',
  styleUrl: 'lids-searchbar.scss',
  shadow: true
})
export class Searchbar {
  @State() value: string;

  /**
   * The placeholder to use for the input field.
   *
   * @type {string}
   * @memberof Searchbar
   */
  @Prop() placeholder: string = '';

  /**
   * Custom event dispatching the value of the input on submission.
   *
   * @type {EventEmitter<string>}
   * @memberof Searchbar
   */
  @Event({
    eventName: 'onsubmit',
    composed: true,
    cancelable: true,
    bubbles: true
  }) submit: EventEmitter<string>

  connectedCallback() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleSubmit(event: Event) {
    event.preventDefault();
    this.submit.emit(this.value);
  }

  private handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <Host>
        <form class='lids-search-form' onSubmit={this.handleSubmit}>
          <input class='lids-search-form-input' type='search' placeholder={this.placeholder} value={this.value} onInput={this.handleChange} />
          <input class='lids-search-form-submit' type='submit' value='Search' />
        </form>
      </Host>
    );
  }
}
