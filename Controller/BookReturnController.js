const BooksReturn = require("../Model/BooksReturn");

exports.CreateReturn = async (req, res) => {
  try {
    const ReturnData = await BooksReturn.create({
      BookID: req.body.BookID,
      BookTitle: req.body.BookTitle,
      RollNo: req.body.RollNo,
      Signature: req.body.Signature,
      returnofdata: req.body.returnofdata,
      Status: req.body.Status,
    });
    res
      .status(201)
      .json({ message: "Return created successfully", data: ReturnData });
  } catch (error) {
    res.status(400).json({ message: "Failed to create return", error: error });
  }
};

exports.getreturnbooks = async (req, res) => {
  try {
    const data = await BooksReturn.find();
    res.status(200).json({ message: "All Return Books", data: data });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to get return books", error: error });
  }
};

exports.getreturnbooksById = async (req, res) => {
  try {
    const data = await BooksReturn.findById(req.params.id);
    res.status(200).json({ message: "Return Book", data: data });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to get return book", error: error });
  }
};

exports.updatereturnById = async (req, res) => {
  try {
    const data = await BooksReturn.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Return Book Updated", data: data });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update return book", error: error });
  }
};

exports.deletereturnBooks = async (req, res) => {
  try {
    const data = await BooksReturn.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Return Book Deleted", data: data });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to delete return book", error: error });
  }
};

