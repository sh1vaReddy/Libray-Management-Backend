const BooksIssueModel = require("../Model/BooksIssue");

//Create A BookIssue
exports.CreateBookIssue = async (req, res) => {
  const body = {
    BookID: req.BookID,
    BookTitle: req.BookTitle,
    RollNo: req.RollNo,
    Branch: req.Branch,
    Signature: req.Signature,
    IssuedDat: req.IssuedDat,
  };
  try {
    const BookIssue = await BooksIssueModel.create(body);
    res.send(BookIssue);
  } catch (error) {
    res.send(error);
  }
};

//Get all BookIssue
exports.GetBookIssue = async (req, res) => {
  try {
    const books = await BooksIssueModel.find();
    const bookscount = await BooksIssueModel.countDocuments();
    res.send({
      BooksCount: bookscount,
      Books: books,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

//Get BooksIssue By  id
exports.GetByIdBookIssue = async (req, res) => {
  try {
    const id = req.pramas.id;
    await BooksIssueModel.findById(id);
  } catch (error) {
    res.send(error);
  }
};

//Update BooksIssue Record
exports.UpdateBookIssue = async (req, res) => {
  try {
    const id = req.pramas.id;
    const body = req.body;

    const updateBook = await BooksIssueModel.findById(
      {
        BooksID: id,
      },
      updatebody,
      { new: true }
    );
  } catch (error) {
    res.send(error);
  }
};

//Delete Book Issue
exports.DeleteBookIssue = async (req, res) => {
  const id = req.pramas.id;
  try {
    const data = await BooksIssueModel.findByIdAndDelete(id);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

module.exports = exports;
