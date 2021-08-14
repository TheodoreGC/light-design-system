/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface LidsIcon {
        "height": string;
        "name": string;
        "width": string;
    }
}
declare global {
    interface HTMLLidsIconElement extends Components.LidsIcon, HTMLStencilElement {
    }
    var HTMLLidsIconElement: {
        prototype: HTMLLidsIconElement;
        new (): HTMLLidsIconElement;
    };
    interface HTMLElementTagNameMap {
        "lids-icon": HTMLLidsIconElement;
    }
}
declare namespace LocalJSX {
    interface LidsIcon {
        "height"?: string;
        "name"?: string;
        "width"?: string;
    }
    interface IntrinsicElements {
        "lids-icon": LidsIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "lids-icon": LocalJSX.LidsIcon & JSXBase.HTMLAttributes<HTMLLidsIconElement>;
        }
    }
}
