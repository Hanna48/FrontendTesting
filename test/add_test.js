import add from '../add';
import chai from 'chai';
const expect = chai.expect;
//var expect = require('chai').expect;
//const add = require('../add');

describe('Testing in add function', ()=> {
    it('Test case : 10 + 10 = 20', ()=> {
        expect(add(10, 10)).to.be.equal(20);
    });
});