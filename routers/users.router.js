const express = require('express');
const route   = express.Router();
const shortId = require('shortid');
const db      = require('../database');

users = db.get('users');

route.get('/', (req, res, next) => {
    res.render('users/index', { users: users.value() });
});

route.get('/search', (req, res, next) => {
    let findUser = users.value().filter((user) => {
        return user.name.toLowerCase().indexOf(search) !== -1;
    });

    if(findUser !== null){
        res.render('users/index', { users: findUser });
    }else{
        res.render('users/index', { users: users });
    }
});

route.get('/create', (req, res, next) => {
    res.render('users/create');
});

route.get('/:id', (req, res, next) => {
    let id = req.params.id;
    const user = users.find({id: id}).value(); //tìm user trong file db
    res.render('users/show', { user: user });

});
route.post('/create', (req, res, next) => {
    req.body.id = shortId.generate(); // auto generate id
    users.push(req.body).write();
    res.redirect('/users');

});

module.exports = route;
