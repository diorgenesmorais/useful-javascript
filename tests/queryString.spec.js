const expect = require('chai').expect;
const queryString = require('../src/queryString');

describe('QueryString tests', () => {
    const useful = new queryString();

    it('Should exists', () => {
        expect(queryString()).to.exist;
        expect(queryString()).to.have.any.keys('convertPayloadToQueryString');
    });
    
    const payload = {
        nome: 'Diorgenes Morais',
        instalacao: '00124578',
        cidade: 'São Lourenço da Mata',
        estado: 'PE'
    }
    it('Should get a query string of the json', () => {
        expect(queryString().convertPayloadToQueryString(payload))
            .to.equals('nome=Diorgenes%20Morais&instalacao=00124578&cidade=S%C3%A3o%20Louren%C3%A7o%20da%20Mata&estado=PE');
    });

    const query = queryString().convertPayloadToQueryString(payload);

    it('Should get an array of the query string', () => {
        const array = useful.convertQueryStringToArray(query);
        expect(array.nome).to.equal('Diorgenes Morais');
        expect(array.instalacao).to.equal('00124578');
        expect(array.cidade).to.equal('São Lourenço da Mata');
        expect(array.estado).to.equal('PE');
    })
});