const express        = require('express');
const route          = express.Router();
const userController = require('../app/controllers/UserController');
const validate       = require('../app/requests/UserCreateRequest');

route.get('/create', userController.create); // user create page
route.post('/create',validate.dataCreateUser , userController.store); // save new user
route.get('/search', userController.search); // user search page
route.get('/:id', userController.show); // user show page
route.get('/', userController.index);// homepage

module.exports = route;
