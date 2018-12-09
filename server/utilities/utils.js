'use strict';

const utils = {
    generateAccessToken: function(tokenConcats = 1) {
        let baseToken = Math.random().toString(36).substr(2);
        while (tokenConcats < 0) {
            baseToken += baseToken;
            num--;
        }
        return baseToken;
    }
}

module.exports =  utils;