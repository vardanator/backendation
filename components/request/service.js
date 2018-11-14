const Validator = require('./../core/validator');
const Errors = require('./../core/errors');
const Authorization = require('./../authorization/service');
const QS = require('./../settings/service').query;

class RequestService {
    static parseQuery(req, res, next) {
        let offset = req.query.offset;
        let limit = req.query.limit;
        let filters = req.query.filters;
        let select = req.query.select;
        let sort = req.query.sort;
        let resolved_query = {
            offset: Validator.sanitizeQueryOffset(offset),
            limit: Validator.sanitizeQueryLimit(limit)
        };
        (filters || '').split(',').forEach(f => {
            if (!f) return;
            resolved_query[f] = 1;
        });
        (select || '').split(',').forEach(s => {
            if (!s) return;
            resolved_query[s] = 1;
        });
        (sort || '').split(',').forEach(s => {
            if (!s) return;
            if (s[0] === '+') {
                resolved_query[s.substr(1)] = 1;
            } else
            if (s[0] === '-') {
                resolved_query[s.substr(1)] = -1;
            } else {
                resolved_query[s] = 1;
            }
        });
        req.resolved_query = resolved_query;
        return next();
    }

    static authorizeRequest(access) {
        return function(req, res, next) {
            Authorization.authorizeUserByKey(req.query.key, access).then(user => {
                req.user = user;
                next();
            }).catch(err => {
                return res.send(Errors.stringify(err));
            });
        }
    }
}

module.exports = RequestService;
