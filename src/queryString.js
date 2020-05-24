const queryString = function() {
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

    return {
        convertPayloadToQueryString
    }
}

module.exports = queryString;
