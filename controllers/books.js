module.exports.getBooks = async function (req, res) {
    res.json({});
}

module.exports.addBook = async function (req, res) {
    res.json({ 'ok': `Added book ${req.body.name}` })
}

module.exports.deleteBook = async function (req, res) {
    res.json({ 'ok': `Deleted ${req.params.book_id}` })
}