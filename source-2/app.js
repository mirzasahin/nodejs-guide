const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const hostname = '127.0.0.1'

app.use(express.static("public"));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('site/index')
})

app.get('/about', (req, res) => {
    res.render('site/about')
})

app.get('/blog', (req, res) => {
    res.render('site/blog')
})

app.get('/blog', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'site/blog.html'))
})

app.listen(port, hostname, () => {
  console.log(`Server is running, http://${hostname}:${port}/`);
});
