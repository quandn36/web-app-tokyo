// require database
const db      = require('../../database');

class ProductController {
    index(req, res) {
        const page     = parseInt(req.query.page) || 1;
        const perPage  = 8;
        const start    = (page - 1) * perPage;
        const end      = (page - 1) * perPage + perPage;
        const products = db.get('products').value().slice(start, end);

        res.render('products/index', { 
            products: products
        });
    }

}


module.exports = new ProductController;
