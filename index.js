// import libraries
const express = require('express');
const app     = express();
const port    = 3000;
const pug     = require('pug');

// setting
app.set('view engine', 'pug'); // set pug is view engine using for project
app.set('views', './views'); // set views is view using for project


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const users = [
    { name: 'Dong', age: 18 },
    { name: 'Tay', age: 19 },
    { name: 'Nam', age: 20 },
    { name: 'Bac', age: 21 },
];


// route and controller
app.get('/', (req, res, next) => {
    res.render('index', {name: 'quan'});
});

app.get('/users', (req, res, next) => {
    res.render('users/index', { users: users });
});

app.get('/users/search', (req, res, next) => {
    let search = req.query.q;
    let findUser = users.filter((user) => {
        return user.name.toLowerCase().indexOf(search) !== -1;
    });
    if(findUser !== null){
        res.render('users/index', { users: findUser, search: search });
    }else{
        res.render('users/index', { users: users, search: search });
    }
});

app.get('/users/create', (req, res, next) => {
    res.render('users/create');
});

app.post('/users/create', (req, res, next) => {
    users.push(req.body);
    res.redirect('/users');

});

// port listening
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});