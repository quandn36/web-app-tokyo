// import libraries
const express     = require('express');
const app         = express();
const port        = 3000;
const pug         = require('pug');
const path        = require('path');
const cookieParse = require('cookie-parser');

const userRoute   = require('./routers/users.router');
const authRoute = require('./routers/auth.router');

// middlewares in use
const middlewareAuth = require('./app/middlewares/login.middleware');


// setting
app.set('view engine', 'pug'); // set pug is view engine using for project
app.set('views', './views'); // set views is view using for project

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public'))); // setting static files
app.use(cookieParse());

// route and controller
app.get('/', (req, res, next) => {
    res.render('index', {name: 'quan'});
});


app.use('/users',middlewareAuth.loginCheck , userRoute);
app.use('/auth', authRoute);

// port listening
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
