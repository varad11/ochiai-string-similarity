'use strict';
var expect = require('chai').expect;
var index = require('../dist/index');
describe('OchiaiCoefficient test', () => {
    it('should return 1.0', () => {
        var result = index.getCoefficient('fdH&tr', 'fdH&tr');
        expect(result).to.equal(1.0);
    });

    it('should return 0.0', () => {
        var result = index.getCoefficient('fdH&tr', 'geI*us');
        expect(result).to.equal(0.0);
    });
});