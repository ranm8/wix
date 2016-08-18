/**
* Module dependencies
**/
var mocha = require('mocha'),
    sinon = require('sinon'),
    expect = require('chai').expect,
    rewire = require('rewire'),
    wix = rewire('../lib/wix-lib.js');

(function(global, undefined) {
    'use strict';

    describe('Wix', function() {
        /**
         * Wix Mock secret key
         * @type {string}
         */
        var secretMock = 'f2b8e3b2-cf26-4912-8089-5bb57d0b6079',

            /**
             * Valid instance
             */
            validInstance = '_5tMNs4pqZ5XOeTmgnrj-qZnrzwY5owLC1_XBSy8M44.eyJpbnN0YW5jZUlkIjoiMTMwZGIwMWYtODNiMS0xN2M4LTE4MDMtYzI3MjE3ODAwYjQ1Iiwic2lnbkRhdGUiOiIyMDEzLTA3LTA0VDA5OjExOjUwLjgxOC0wNTowMCIsInVpZCI6ImRlNmJkZDRjLTYwOTAtNDI3YS1hOWY3LWQxMjIyYjY1OTA4OCIsInBlcm1pc3Npb25zIjoiT1dORVIiLCJpcEFuZFBvcnQiOiIyMTIuMjkuMTkyLjE0LzM3NDc5IiwidmVuZG9yUHJvZHVjdElkIjpudWxsLCJkZW1vTW9kZSI6ZmFsc2V9',

            /**
             * Invalid instance with dot
             */
            invalidInstance = 'ArT4e2pjlD9Q3QdyrqSR-l7ml_uI8f0UvUYFdcPAYKA.eyJpbnN0YW5jZUlkIjoiMTJkOTcxZmQtNjg0NS02YmI0LTJhYjgtMDBkMDY3MjRmYmU3Iiwic2lnbkRhdGUiOiIyMDEzLTAxLTE1VDAzOjI4OjE1LjgxOS0wNjowMCIsInVpZCI6ImRlNmJkZDRjLTYwOTAtNDI3YS1hOWY3LWQxMjIyYjY1OTA4OCIsInBlcm1pc3Npb25zIjoiT1dORVIiLCJpcEFuZFBvcnQiOiIxMDkuNjUuMS43My80NDg4OSIsInZlbmRvclByb2R1Y3RJZCI6bnVsbCwiZGVtb01vZGUiOmZhbHNlfQ',

            /**
             * Invalid string (some ordinary string)
             */
            invalidWithoutDot = 'eyJpbnN0YW5jZUlkIjoiMTJkOTcxZmQtNjg0NS02YmI0LTJhYjgtMDBkMDY3MjRmYmU3Iiwic2lnbkRhdGUiOiIyMDEzLTAxLTE1VDAzOjI4OjE1LjgxOS0wNjowMCIsInVpZCI6ImRlNmJkZDRjLTYwOTAtNDI3YS1hOWY3LWQxMjIyYjY1OTA4OCIsInBlcm1pc3Npb25zIjoiT1dORVIiLCJpcEFuZFBvcnQiOiIxMDkuNjUuMS43My80NDg4OSIsInZlbmRvclByb2R1Y3RJZCI6bnVsbCwiZGVtb01vZGUiOmZhbHNlfQ';

        describe('#secret()', function() {
            it('should return undefined since nothing was set', function() {
                expect(wix.secret()).to.equal(undefined);
            });

            it('should set the value return `this`', function() {
                expect(wix.secret(secretMock)).to.have.property('secret');
            });

            it('should set the given secret and return it', function() {
                wix.secret(secretMock);

                expect(wix.secret()).to.equal(secretMock);
            });
        });

        describe('#parse()', function() {
            it('should throw an error since instance was not given', function() {
                expect(function() {
                    wix.parse();
                }).to.throw('Cannot parse without instance and secret!');
            });

            it('should return full parsed wix signed object', function() {
                expect(wix.parse(validInstance)).to.have.property('instanceId');
            });

            it('should return null, instance is invalid', function() {
                expect(wix.parse(invalidWithoutDot)).to.have.equal(null);
            });
        });
    });
}(global));
