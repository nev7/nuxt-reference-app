'use strict';

const utils = {
    generateAccessToken: function(tokenLen = 2) {
        let baseToken = Math.random().toString(36).substr(2);
        for (let index = 0; index < tokenLen; index++) {
            return baseToken += baseToken;
        }
    }
}

module.exports =  utils;