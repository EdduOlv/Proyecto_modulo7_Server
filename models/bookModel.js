const mongoose = require("mongoose");
const BookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
