const express = require('express');
const UsersRouter = express.Router();

const multer = require('multer');
const upload = multer();
const autoReap = require('multer-autoreap');
const UsersService = require('./service');

const avatarCoverUpload = upload.fields([{
    name: 'avatar',
    maxCount: 1
}, {
    name: 'cover',
    maxCount: 1
}]);

UsersRouter.get('/', (req, res) => {
    UsersService.getUsers({
        limit: req.limit,
        offset: req.offset
    }).then(users => {
        return res.send(users);
    }).catch(err => {
        console.log(err);
        return res.send(err);
    });
});

UsersRouter.post('/', (req, res) => {
    UsersService.createUser(req.body.username, req.body.password, {
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
