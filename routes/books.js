const express = require('express');
const booksRouter = express.Router();

const booksController = require('../controllers/books')
const { parse_json } = require('../middlewares/parseBody');
const { checkAuth } = require('../middlewares/checkAuth');

booksRouter.get('/', booksController.getBooks);
booksRouter.post('/', checkAuth, parse_json, booksController.addBook);
booksRouter.delete('/:book_id', checkAuth, parse_json, booksController.deleteBook);

module.exports = booksRouter;