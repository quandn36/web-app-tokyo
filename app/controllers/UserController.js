// require database
const db      = require('../../database');
const shortId = require('shortid');

users = db.get('users'); // khởi tạo object users để thao tác

class UserController {
    index(req, res) {
        res.render('users/index', { users: users.value() });
    }

    search(req, res, next) {
        let search = req.query.q;
        let findUser = users.value().filter((user) => {
            return user.name.toLowerCase().indexOf(search) !== -1;
        });
    
        if(findUser !== null){
            res.render('users/index', { users: findUser });
        }else{
            res.render('users/index', { users: users });
        }
    }

    create(req, res) {
        res.render('users/create');
    }

    store(req, res) {
        req.body.id = shortId.generate(); // auto generate id
        users.push(req.body).write();
        res.redirect('/users');
    }

    show(req, res) {
        let id = req.params.id;
        const user = users.find({id: id}).value(); //tìm user trong file db
        res.render('users/show', { user: user });
    
    }
}


module.exports = new UserController;
