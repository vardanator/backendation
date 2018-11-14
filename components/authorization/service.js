const AppConstants = require('./../settings/constants');
const UsersService = require('./../users/service');
const Errors = require('./../core/errors');

class Authorization {
    static authorizeUserByKey(key, access) {
        return new Promise((resolve, reject) => {
            if (!key && access === AppConstants.AccessLevel.OPTIONAL) {
                return resolve(null);
            }
            UsersService.getUserByKey(key).then(user => {
                if (!user) {
                    return reject(Errors.USER_NOT_FOUND);
                }
                if (AppConstants.AccessLevel[(user.role || '').toUpperCase()] < access) {
                    return reject(Errors.PERMISSION_DENIED);
                }
                return resolve(user);
            }).catch(err => {
                return reject(Errors.INTERNAL_ERROR);
            });
        });
    }
}

module.exports = Authorization;
