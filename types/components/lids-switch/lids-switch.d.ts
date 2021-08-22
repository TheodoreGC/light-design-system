import { EventEmitter } from '../../stencil-public-runtime';
export declare class Switch {
  /**
   * Define the shape of the toggle switch.
   *
   * @type {boolean}
   * @memberof Switch
   */
  rounded: boolean;
  /**
   * Specify the element should be pre-selected.
   *
   * @type {boolean}
   * @memberof Switch
   */
  checked: boolean;
  /**
   * Custom event dispatching the value of the input on submission.
   *
   * @type {EventEmitter<{ checked: boolean }>}
   * @memberof Switch
   */
  change: EventEmitter<{
    checked: boolean;
  }>;
  connectedCallback(): void;
  private handleSwitch;
  render(): any;
}
