const UsersDAO = require('./private/dao');
const AppSettings = require('./../settings/service');

class UsersService {
    getUsers(options) {
        return new Promise((resolve, reject) => {
            options = options || {};
            UsersDAO.fetchMany({}, options)
                    .then(users => {
                        resolve(users);
                    })
                    .catch(err => {
                        return reject(err);
                    });
        });
    }

    createUser(username, password, options) {
        
    }

    authorizeUser(username, password, options) {

    }
}

module.exports = new UsersService();
