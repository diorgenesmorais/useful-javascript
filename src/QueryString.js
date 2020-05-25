module.exports = function createQueryString() {
    "use strict";
    /**
     * Converter payload para uma queryString.
     * 
     * @param {{string: string}} payload JSON
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
     * @returns {string[]} onde index vai ser a key - [key: value, key: value]
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
     * Decompor em object simples.
     * 
     * @param {{}|[]} target Um json ou array
     * @returns {{string: string}}
     */
    function decomposeInSimpleObject(target) {
        const simpleObject = {};
        function listOf(target) {
            for (const key in target) {
                if (typeof target[key] !== 'object') {
                    simpleObject[key] = target[key];
                } else {
                    listOf(target[key]);
                }
            }
        }
        listOf(target);
        return simpleObject;
    }

    return {
        convertPayloadToQueryString,
        convertQueryStringToArray,
        decomposeInSimpleObject
    }
}
