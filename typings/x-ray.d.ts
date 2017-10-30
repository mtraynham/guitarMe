// https://github.com/matthewmueller/x-ray

import ReadStream = NodeJS.ReadStream;

export = XRay;

declare function XRay (options: xRay.XRayOptions): xRay.XRayInstance;

declare namespace xRay {

    interface XRayOptions {
        filters: {};
    }
    type XRayCallback = (err: Error, data: any) => void;
    type XRayCallbackInvocation = (callback: XRayCallback) => void;

    interface XRayDriver { }

    class XRayCrawler {
        constructor (driver: XRayDriver);
        driver (driver: XRayDriver): void;
    }

    interface XRayInstance extends XRayCrawler {
        (
            urlOrHtml: string,
            scoreOrSelector: string,
            selector?: string
        ): XRayInvocation;
    }

    interface XRayInvocation {
        (callback: XRayCallbackInvocation): void;
        stream(): ReadStream;
        write(path?: string): (err: NodeJS.ErrnoException) => void;
    }
}
