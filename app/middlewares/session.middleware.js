const shortId = require('shortid');
const db      = require('../../database');

module.exports = function(req, res, next) {
    if(!req.signedCookies.sessionId){
        // do something
        const sessionKey = shortId.generate();

        // chưa có cookie thì khởi tạo cookie
        res.cookie('sessionId', sessionKey, {
            signed: true,
        });

        // lưu lại cookie vào trong database
        db.get('sessions').push({
            'sessionId': sessionKey,
        }).write();


    }
    // next
    next();
}

