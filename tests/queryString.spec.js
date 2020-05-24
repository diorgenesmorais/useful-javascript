const expect = require('chai').expect;
const queryString = require('../src/queryString');

describe('QueryString tests', () => {
    it('Should exists', () => {
        expect(queryString()).to.exist;
        expect(queryString()).to.have.any.keys('convertPayloadToQueryString');
    });

    it('Should get a query string of the json', () => {
        const payload = {
            nome: 'Diorgenes Morais',
            instalacao: '00124578',
            cidade: 'São Lourenço da Mata',
            estado: 'PE'
        }
        expect(queryString().convertPayloadToQueryString(payload))
            .to.equals('nome=Diorgenes%20Morais&instalacao=00124578&cidade=S%C3%A3o%20Louren%C3%A7o%20da%20Mata&estado=PE');
    });
});