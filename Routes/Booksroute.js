const express = require('express');
const router = express.Router();
const Books = require('../Controller/Books');

router.get('/books', Books.ReadBooks);
router.post('/books/create', Books.CreateBooks);
router.delete('/books/delete/:id',Books.DeleteById)
router.delete('/books/delete/:name',Books.DeleteByName)
router.put('/books/update/:name',Books.UpdateByName)
router.put('/books/update/:id',Books.updateByID)



module.exports = router;
