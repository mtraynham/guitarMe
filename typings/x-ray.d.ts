// Type definitions for x-ray 2.3
// Project: https://github.com/lapwinglabs/x-ray#readme
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Bluebird = require('bluebird');
import XRayCrawler = require('x-ray-crawler');
import ErrnoException = NodeJS.ErrnoException;
import ReadStream = NodeJS.ReadStream;

export = XRay;

declare function XRay(options: XRay.Options): XRay.Instance;

declare namespace XRay {
    type Filter = (value: any, ...args: string[]) => any;
    interface Options {
        filters: {[key: string]: Filter};
    }
    type Callback = (err: Error, data: any) => void;
    type CallbackInvocation = (callback: Callback) => void;

    type Selector = string | {[key: string]: string | Instance} | string[] | string[][];

    interface Instance extends XRayCrawler.Instance {
        (
            url: string,
            selector: Selector
        ): InstanceInvocation;
        (
            url: string,
            scope: string,
            selector: Selector
        ): InstanceInvocation;
        (
            scope: string,
            selector: Selector
        ): InstanceInvocation;
    }

    interface InstanceInvocation {
        (callback: CallbackInvocation): void;
        abort(): this;
        paginate(n: number): this;
        limit(n: number): this;
        stream(): ReadStream;
        then<U>(fn?: (value: any) => U | PromiseLike<U>): Bluebird<U>;
        write(path?: string): (err: ErrnoException) => void;
    }
}
