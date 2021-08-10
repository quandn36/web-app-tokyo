const express        = require('express');
const router         = express.Router();
const cartController = require('../app/controllers/CartController');

router.get('/add/:productId', cartController.addToCart);

module.exports = router;
