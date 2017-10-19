var express = require('express'),
userController = require('../Controllers/users'),
path = require('path'),
api = express.Router();

api.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Requested-With,contenttype, Accept"); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next();
});


api.use(express.static(path.join(__dirname, '../../public')));

api.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/Views', 'index.html'));
});

api.get('/users-list', userController.users_list);
api.post('/create-users', userController.create_users);

module.exports = api;
