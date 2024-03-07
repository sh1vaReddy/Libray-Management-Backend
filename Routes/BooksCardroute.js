const express = require("express");
const router = express.Router();
const {
  CreateBookCard,
  GetBookCard,
  GetBookCardByid,
  updateBooksbyid,
  DeleteBooksCard,
} = require("../Controller/BooksCardController");

router.post("/BooksCard/Create", CreateBookCard);
router.get("/BooksCard/GetBooksCard", GetBookCard);
router.put("/BooksCard/GetBooksCard/:id", GetBookCardByid);
router.put("/BooksCard/updateBooksCard/:id", updateBooksbyid);
router.delete("/BooksCard/DelteeBooksCard/:id", DeleteBooksCard);

module.exports = router;
