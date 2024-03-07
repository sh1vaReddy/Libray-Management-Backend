const express = require("express");
const {
  GetBookIssue,
  CreateBookIssue,
  DeleteBookIssue,
  UpdateBookIssue,
  GetByIdBookIssue
} = require("../Controller/BooksIssue");
const router = express.Router();

router.get("/BooksIssue", GetBookIssue);
router.get("/BooksIssue/:id",GetByIdBookIssue)
router.post("/BooksIssue/create", CreateBookIssue);
router.delete("/BooksIssue/delete", DeleteBookIssue);
router.put("//BooksIssue/updateBookIssue", UpdateBookIssue);

module.exports = router;
