const Book = require('../models/bookModel')


exports.createBook = async (req, res) => {
    const { title, image, author, publisher, summary, pageCount, price } = req.body;
    try {
        let foundbook = await Book.findOne({ title });
        if (foundbook) {
          return res.status(400).json({ msg: "the book already exists" });
        }
        const newBook = await Book.create({ title, image, author, publisher, summary, pageCount, price })
        res.json(newBook)
    } catch (error) {
        res.status(500).json({
            msg: "There was an error creating the book",
            error: error.message
        })
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.json({books}) 
    } catch (error) {
        res.status(500).json({
            msg: "There was an error while trying to get the books",
            error
        })
    }
}

exports.readone = async (req, res) => {
    const { id } = req.body
    try {
      const book = await Book.findById(id)
      res.json( book );
    } catch (error) {
      res.status(500).json({
        msg: "There was an error while trying to get the book",
        error,
      });
    }
};

exports.updateBook = async (req, res) => {
    const {id, title, image, author, publisher, summary, pageCount, price} = req.body;
    try {
        const updateBook = 
	        await Book.findByIdAndUpdate(id, {title, image, author, publisher, summary, pageCount, price}, { new: true })
        res.json(updateBook)
    } catch (error) {       
        res.status(500).json({
            msg: "There was an error updating the book",
            error
        })
    }
}

exports.deleteBook = async (req, res) => {
    const { id } = req.body
    try {
        const deleteBook = await Book.findByIdAndDelete({_id: id })
        res.json(deleteBook)
    } catch (error) {
        res.status(500).json({
            msg: "There was an error deleting the book",
            error
        })
    }
}