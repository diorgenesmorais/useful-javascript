module.exports = function createQueryString() {
    "use strict";
    /**
     * Converter payload para uma queryString.
     * 
     * @param {object} payload JSON
     * @returns {string} pares/valores (Chave=Valor&Chave=Valor...)
     */
    function convertPayloadToQueryString(payload) {
        return Object.keys(payload)
                        .map(key => `${key}=${encodeURIComponent(payload[key])}`)
                        .join('&');
    }

    /**
     * Converter uma queryString para um Array.
     * 
     * @param {string} queryString (key=value&key=value&key=value)
     * @returns {array} onde index vai ser a key.
     */
    function convertQueryStringToArray(queryString) {
        const array = [];
        queryString.split('')
            .map(letra => {
                if (letra === '&') {
                    return '=';
                }
                return letra;
            })
            .join('') // retorna tudo em uma string
            .split('=') // retorna uma lista: ['key', 'value', 'key', 'value']
            .forEach((value, index, list) => {
                if (index % 2 === 0) {
                    array[value] = decodeURIComponent(list[index + 1]);
                }
            });
        return array;
    }

    /**
     * Listar as propriedades do json.
     * 
     * @param {object} json 
     */
    function listOfJsonProperties(json) {
        const list = [];
        function listOfJson(json) {
            for (const key in json) {
                if (typeof json[key] !== 'object') {
                    list[key] = json[key];
                } else {
                    listOfJson(json[key]);
                }
            }
        }
        listOfJson(json);
        return list;
    }

    return {
        convertPayloadToQueryString,
        convertQueryStringToArray,
        listOfJsonProperties
    }
}