import { EventEmitter } from '../../stencil-public-runtime';
export declare class Searchbar {
  value: string;
  /**
   * The placeholder to use for the input field.
   *
   * @type {string}
   * @memberof Searchbar
   */
  placeholder: string;
  /**
   * Custom event dispatching the value of the input on submission.
   *
   * @type {EventEmitter<string>}
   * @memberof Searchbar
   */
  submit: EventEmitter<string>;
  connectedCallback(): void;
  private handleSubmit;
  private handleChange;
  render(): any;
}
