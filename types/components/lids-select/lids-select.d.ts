import { EventEmitter } from '../../stencil-public-runtime';
export declare class Select {
  select: HTMLLidsSelectElement;
  /**
   * The current value of the element.
   *
   * @type {string}
   * @memberof Select
   */
  value: string;
  /**
   * Custom event dispatching the value of the select on submission.
   *
   * @type {EventEmitter<string>}
   * @memberof Select
   */
  change: EventEmitter<string>;
  private childrens;
  connectedCallback(): void;
  componentWillLoad(): void;
  private handleSelect;
  render(): any;
}
