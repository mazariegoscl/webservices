var express = require('express');
var path = require('path');
var api = express.Router();

api.use(express.static(path.join(__dirname, '../../public')));

api.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/Views', 'index.html'));
});

module.exports = api;
