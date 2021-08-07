// require database
const db      = require('../../database');

class LoginController {

    index(req, res, next){
        res.render('auth/login');
    }

    postLogin(req, res, next) {
        const email    = req.body.email;
        const password = req.body.password;
        var   errors   = [];
        var   user     = db.get('users').find({email: email}).value(); // tìm user theo email trong db

        // không tìm tại email user
        if(!user) {
            errors.push('User does not exist');
            res.render('auth/login', { errors: errors});
            return;
        }

        // không đúng mật khẩu
        if(password !== user.password){
            errors.push('Wrong password!');
            res.render('auth/login', { errors: errors});
            return;
        }

        // set cookie đăng nhập cho người dùng bẳng id của user login
        res.cookie('loginID', user.id);

        // chuyển người dùng về trang quản lý người dùng
        res.redirect('/users');
    }

    logout(req, res){
        res.clearCookie('loginID');
        res.redirect('/auth/login');
    }
}


module.exports = new LoginController;
