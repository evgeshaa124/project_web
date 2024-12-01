const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/add-post', (req, res) => {
    const { title, description, author } = req.body;
    posts.push({ title, description, author });
    res.redirect('/');
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/delete-post', (req, res) => {
    const { index } = req.body;
    posts.splice(index, 1);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Сервер працює за адресою http://localhost:${PORT}`);
});
