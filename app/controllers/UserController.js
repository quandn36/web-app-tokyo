// require database
const db      = require('../../database');
const shortId = require('shortid');
const md5     = require('md5');
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
        // lay ra full path + extension name for image
        const path      = req.file.path.split('/').slice(1).join('/');
        // const ext       = req.file.mimetype.split('/').slice(1).join();

        users.push({
            id: shortId.generate(),
            name: req.body.name,
            age: req.body.age,
            phone: req.body.phone,
            email: req.body.email,
            password: md5(req.body.password),
            image: path,
        }).write();
        
        res.redirect('/users');
    }

    show(req, res) {
        let id = req.params.id;
        const user = users.find({id: id}).value(); //tìm user trong file db
        res.render('users/show', { user: user });
    
    }
}


module.exports = new UserController;
