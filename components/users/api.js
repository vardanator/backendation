const express = require('express');
const UsersRouter = express.Router();

const multer = require('multer');
const upload = multer();
const autoReap = require('multer-autoreap');
const UsersService = require('./service');
const Request = require('./../request/service');
const Response = require('./../response/service');

const AppConstants = require('./../settings/constants');
const Access = AppConstants.AccessLevel;

const avatarCoverUpload = upload.fields([{
    name: 'avatar',
    maxCount: 1
}, {
    name: 'cover',
    maxCount: 1
}]);

UsersRouter.get('/', Request.authorizeRequest(Access.ADMIN), (req, res) => {
    UsersService.getUsers(req.resolved_query).then(users => {
        return res.send(users);
    }).catch(err => {
        console.log(err);
        return res.send(err);
    });
});

UsersRouter.get('/:id', Request.authorizeRequest(Access.USER), (req, res) => {
    UsersService.getUserById(req.params.id, req.resolved_query).then(user => {
        return res.send(UsersResponse.generate(user, req.user.role));
    })
});

UsersRouter.post('/', (req, res) => {
    UsersService.createUser(req.body.email, req.body.password, {
        limit: req.limit,
        offset: req.offset
    }).then(user => {
        return res.send(user);
    }).catch(err => {
        console.log(err);
        return res.send(err);
    })
});

module.exports = UsersRouter;
