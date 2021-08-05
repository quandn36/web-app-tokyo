const express        = require('express');
const route          = express.Router();
const userController = require('../app/controllers/UserController');


route.get('/create', userController.create); // user create page
route.post('/create', userController.store); // save new user
route.get('/search', userController.search); // user search page
route.get('/:id', userController.show); // user show page
route.get('/', userController.index);// homepage



module.exports = route;
