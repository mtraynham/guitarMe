// Type definitions for x-ray-parse 1.0
// Project: https://github.com/lapwinglabs/x-ray-parse
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = xRayParse;

declare function xRayParse (str: string): undefined;

declare namespace xRayParse {
    interface XRayParse {
        selector: string;
        attribute: string;
        filters?: {name: string, args: string[]}[];
    }
}
