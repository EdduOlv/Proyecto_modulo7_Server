const express = require("express");
const auth = require("../middleware/adminAuth");
const { createBook, getAllBooks, updateBook, deleteBook, readone } = require("../controllers/bookController");
const bookRouter = express.Router();


bookRouter.post("/create", auth, createBook);
bookRouter.get("/readall", getAllBooks);
bookRouter.get("/readone", readone);
bookRouter.put("/update", auth, updateBook);
bookRouter.delete("/delete", auth, deleteBook);

module.exports = bookRouter;