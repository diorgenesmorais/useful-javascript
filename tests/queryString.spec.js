const expect = require('chai').expect;
const queryString = require('../src/queryString');

describe('QueryString tests', () => {
    it('Should exists', () => {
        expect(queryString()).to.exist;
        expect(queryString()).to.have.any.keys('convertPayloadToQueryString');
    });
});