const express = require('express');

const app = express();

const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

app.use((err, req, res, next) => { res.json({ err }) })

app.listen(3000, _ => console.log(`Ready at 3000`))