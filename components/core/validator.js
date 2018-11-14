const this_3rdparty = require('validator');

class Validator {
    static validate(data, type) {

    }

    static isURL(url, aggressive) {
        if (!url) return !aggressive;
        return this_3rdparty.isURL(url);
    }

    static isEmail(email) {
        return this_3rdparty.isEmail(email);
    }

    static isIP(ip) {
        return this_3rdparty.isIP(ip);
    }

    static isFloat(float) {
        return this_3rdparty.isFloat(float);
    }

    static sanitizeQueryOffset(offset) {
        offset = parseInt(offset);
        if (!this.isInteger(offset)) {
            return QuerySettings.offset_min;
        }
        return offset >= QuerySettings.offset_min && offset <= QuerySettings.offset_max ? offset : QuerySettings.offset_min;
    }

    static sanitizeQueryLimit(limit) {
        limit = parseInt(limit);
        if (!this.isInteger(limit)) {
            return QuerySettings.limit_max;
        }
        return limit >= QuerySettings.limit_min && limit <= QuerySettings.limit_max ? limit : QuerySettings.limit_max;
    }
}

module.exports = Validator;
