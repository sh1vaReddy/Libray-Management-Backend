const express = require("express");
const router = express.Router();
const {
  CreateReturn,
  getreturnbooks,
  getreturnbooksById,
  updatereturnById,
  deletereturnBooks,
} = require("../Controller/BookReturnController");

router.post("/bookreturn/add", CreateReturn);
router.get("/bookreturn/get", getreturnbooks);
router.get("/bookreturn/get/:id", getreturnbooksById);
router.put("/bookreturn/update/:id", updatereturnById);
router.delete("/bookreturn/delete/:id", deletereturnBooks);

module.exports = router;
