const express        = require('express');
const router         = express.Router();
const productControloler = require('../app/controllers/ProductController');

router.get('/', productControloler.index);

module.exports = router;
