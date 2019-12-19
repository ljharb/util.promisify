'use strict';

var define = Object.defineProperties;
var util = require('util');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var makeDescriptor = function _makeDescriptor(value) {
	return {
		configurable: true,
		enumerable: false,
		value: value,
		writable: true
	};
};

/* eslint-disable no-unused-vars */
var boundPromisify = function promisify(orig) {
/* eslint-enable no-unused-vars */
	return polyfill.apply(util, arguments);
};
define(boundPromisify, {
	custom: makeDescriptor(polyfill.custom),
	customPromisifyArgs: makeDescriptor(polyfill.customPromisifyArgs),
	getPolyfill: makeDescriptor(getPolyfill),
	implementation: makeDescriptor(implementation),
	shim: makeDescriptor(shim)
});

module.exports = boundPromisify;
