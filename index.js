require('dotenv').config();

// import libraries
const express     = require('express');
const app         = express();
const port        = 3000;
const pug         = require('pug');
const path        = require('path');
const cookieParse = require('cookie-parser');

const userRouter    = require('./routers/users.router');
const authRouter    = require('./routers/auth.router');
const productRouter = require('./routers/products.router');

// middlewares in use
const middlewareAuth = require('./app/middlewares/login.middleware');


// setting
app.set('view engine', 'pug'); // set pug is view engine using for project
app.set('views', './views'); // set views is view using for project
console.log(__dirname);
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public'))); // setting static files
app.use(cookieParse(process.env.SESSION_SECRET)); // dùng biến trong .env để tạo secret key cho cookie

// route and controller
app.get('/', (req, res, next) => res.render('index', {name: 'quan'}));
app.use('/users',middlewareAuth.loginCheck , userRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);

// port listening
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
