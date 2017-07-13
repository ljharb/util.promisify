// Type definitions for util.promisify 1.0.0
// Project: https://github.com/ljharb/util.promisify

/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('util.promisify');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */
export = promifify;

declare function promifify(f: Function): Function

declare namespace promifify {
    interface implementation {
        (fn: Function): Function;
        custom: symbol
        customPromisifyArgs: symbol | undefined
    }

    export const custom: symbol
	export const customPromisifyArgs: symbol
	export function getPolyfill(): Function
    export const implementation: implementation
	export function shim(): implementation
}

declare module "util" {
    export var promisify: {
        (fn: Function): Function;
        custom: symbol
    }
}