// require database
const db      = require('../../database');

class CartController {
    addToCart(req, res) {
        // do something
        // lay ta id cua san pham duoc gui len get request
        // lay sessionId được lưu trong signedCookies
        var productId = req.params.productId;
        const sessionId = req.signedCookies.sessionId;
        
        // nếu không có sessionId thì về products listening
        if(!sessionId) {
            res.redirect('/products');
        }

        var count = db.get('sessions')
                        .find({ sessionId: sessionId })
                        .get("cart."+productId, 0)
                        .value();
        
        db.get('sessions')
          .find({ sessionId: sessionId })
          .set("cart."+productId, count + 1)
          .write();

        //ghi thành công thì redirect về products list
        res.redirect('/products');
    }

}


module.exports = new CartController;
