/**
* Module dependencies
**/
var crypto = require('crypto');

var Wix = (function() {
    'use strict';

    /**
     * Wix's secret key
     * @type {string}
     */
    var secret;

    /**
     * Validates that the given instance is valid
     * @param {string} hash
     * @param {string} payload
     * @returns {boolean}
     */
    function validateInstance(hash, payload) {
        if (!hash) {
            return false;
        }

        hash = base64Decode(hash);

        var signedHash = crypto
            .createHmac('sha256', secret)
            .update(payload)
            .digest('base64');

        return hash === signedHash;
    }

    /**
     * Parses URL encoded base64 string
     * @param {string} input
     * @param {string} encoding
     * @returns {string}
     */
    function base64Decode(input, encoding) {
        encoding = encoding || 'base64';

        return new Buffer(input.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString(encoding);
    }

    return {
        /**
         * Getter/setter method for Wix's key
         * @param key
         * @returns {Wix|string}
         */
        secret: function(key) {
            if (!key) {
                return secret;
            }

            secret = key;

            return this;
        },

        /**
         * Parses given instance and returns full object, null if instance is invalid
         * @param {string} instance
         * @throws {Error}
         * @returns {string|null}
         */
        parse: function(instance) {
            if (!instance || !secret) {
                throw new Error('Cannot parse without instance and secret!');
            }

            var parts = instance.split('.'),
                hash = parts[0],
                payload = parts[1];

            if (!payload) {
                return null;
            }

            if (!validateInstance(hash, payload)) {
                console.log('Provided instance is invalid: ' + instance);
                return null;
            }

            return JSON.parse(base64Decode(payload, 'utf8'));
        }
    };
}());

module.exports = Wix;