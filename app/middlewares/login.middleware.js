const db = require('../../database');

module.exports.loginCheck = function(req, res, next) {
    // nếu không tồn tại cookie user id thì về login
    if(!req.cookies.loginID){
        res.redirect('/auth/login');
        return;
    }

    const user = db.get('users').find({ id: req.cookies.loginID }).value();

    // nếu loginID không đúng trong database thì về login
    if(!user){
        res.redirect('/auth/login');
        return;
    }

    // đủ điều kiện hợp lệ cho đi tiếp
    next();
};  


module.exports.Authcheck = function(req, res, next) {
    // kiểm tra coi đăng nhập hay chưa
    // isset cookie
    if(req.cookies.loginID){
        const user = db.get('users').find({ id: req.cookies.loginID }).value();
        if(user){
            res.redirect('/users');
        } 
    }else{
        next(); // đủ điều kiện hợp lệ cho đi tiếp
    }
};