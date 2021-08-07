const express        = require('express');
const router         = express.Router();
const userController = require('../app/controllers/UserController');
const validate       = require('../app/requests/UserCreateRequest');

router.get('/create', userController.create); // user create page
router.post('/create',validate.dataCreateUser , userController.store); // save new user
router.get('/search', userController.search); // user search page
router.get('/:id', userController.show); // user show page
router.get('/', userController.index);// homepage

module.exports = router;
