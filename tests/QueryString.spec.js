const expect = require('chai').expect;
const createQueryString = require('../src/QueryString');

describe('QueryString tests', () => {
    const useful = createQueryString();

    it('Should exists', () => {
        expect(useful).to.exist;
        expect(useful).to.have.any.keys('convertPayloadToQueryString');
    });
    
    const payload = {
        nome: 'Diorgenes Morais',
        instalacao: '00124578',
        cidade: 'São Lourenço da Mata',
        estado: 'PE'
    }
    it('Should get a query string of the json', () => {
        expect(useful.convertPayloadToQueryString(payload))
            .to.equals('nome=Diorgenes%20Morais&instalacao=00124578&cidade=S%C3%A3o%20Louren%C3%A7o%20da%20Mata&estado=PE');
    });

    const query = useful.convertPayloadToQueryString(payload);
    const json = useful.convertQueryStringToObject(query);

    it('Should get a json of the query string', () => {
        expect(json.nome).to.equal('Diorgenes Morais');
        expect(json.instalacao).to.equal('00124578');
        expect(json.cidade).to.equal('São Lourenço da Mata');
        expect(json.estado).to.equal('PE');
    });

    const myJson = {
        payload,
        lista: [
            {x: 1},
            {y: 2}
        ],
        cep: 54735275,
        telefone: 981788471
    }
json
    it('Should get a simple object', () => {
        const simpleObject = useful.decomposeInSimpleObject(myJson);
        expect(simpleObject.nome).to.equal('Diorgenes Morais');
        expect(simpleObject.x).to.equal(1);
    });
});