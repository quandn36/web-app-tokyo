const express         = require('express');
const router          = express.Router();
const loginController = require('../app/controllers/LoginController');
const middlewareAuth  = require('../app/middlewares/login.middleware');

router.get('/login', middlewareAuth.Authcheck, loginController.index);
router.post('/login', loginController.postLogin);
router.get('/logout', loginController.logout);


module.exports = router;
