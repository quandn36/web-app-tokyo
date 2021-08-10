// require database
const db = require('../../database');

class HomeController {

    index(req, res) {
        const countCart = db.get('sessions')
                          .find({sessionId: req.signedCookies.sessionId})
                          .get('cart')
                          .size()
                          .value();
        res.render('index', { countCart: countCart });
    }

}


module.exports = new HomeController;
