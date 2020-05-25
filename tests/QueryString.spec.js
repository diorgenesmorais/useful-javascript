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
    const array = useful.convertQueryStringToArray(query);

    it('Should get an array of the query string', () => {
        expect(array.nome).to.equal('Diorgenes Morais');
        expect(array.instalacao).to.equal('00124578');
        expect(array.cidade).to.equal('São Lourenço da Mata');
        expect(array.estado).to.equal('PE');
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

    it('Should be listed', () => {
        const list = useful.convertToPropertyList(myJson);
        expect(list.nome).to.equal('Diorgenes Morais');
        expect(list.x).to.equal(1);
    });
});