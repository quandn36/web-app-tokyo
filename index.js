// import libraries
const express = require('express');
const app     = express();
const port    = 3000;
const pug     = require('pug');

// setting
app.set('view engine', 'pug'); // set pug is view engine using for project
app.set('views', './views'); // set views is view using for project

// route and controller
app.get('/', (req, res) => {
    res.render('index', {name: 'quan'});
});

// port listening
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});