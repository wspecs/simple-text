"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib = require("../lib/utils");
var chai_1 = require("chai");
describe('word parser', function () {
    beforeEach(function () {
        // Set up before running tests.
    });
    it('initializes', function () {
        chai_1.expect(lib.simplify('à la mode')).to.equal('a la mode');
    });
    it('simplifies all keys', function () {
        for (var _i = 0, _a = Object.keys(lib.REPLACE_MAP); _i < _a.length; _i++) {
            var key = _a[_i];
            chai_1.expect(lib.simplify(key)).to.equal(lib.REPLACE_MAP[key]);
        }
    });
});
