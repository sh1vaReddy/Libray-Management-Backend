const BooksModel = require("../Model/LibrayBooks");

exports.CreateBooks = async (req, res) => {
  try {
    const data = {
      BooksID: req.body.BooksID,
      BookName: req.body.BookName,
      AuthorName: req.body.AuthorName,
      Edition: req.body.Edition,
      page: req.body.page,
      price: req.body.price,
      supplier: req.body.supplier,
      NoofBooks: req.body.NoofBooks,
    };

    const newBook = await BooksModel.create(data);

    res
      .status(201)
      .json({ message: "Book created successfully", data: newBook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.ReadBooks = async (req, res) => {
  try {
    const count=await BooksModel.countDocuments()
    const data = await BooksModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

exports.DeleteById = async (req, res) => {
  try {
    const data = await BooksModel.findByIdAndDelete(req.params.id);
    res.send("Books Dleted sucessfully by id");
  } catch (error) {
    res.send(error);
  }
};

exports.DeleteByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await BooksModel.findOneAndDelete({ BookName: name });
    res.send(`Books Deleted Sucessfully By ${name}`);
  } catch (error) {
    res.send(error);
  }
};

exports.UpdateByName = async (req, res) => {
  try {
    const name = req.params.name;
    const updateData = req.body;

    const updatedBook = await BooksModel.findOneAndUpdate(
      { BookName: name },
      updateData,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({
      message: `Book '${name}' updated successfully`,
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateByID = async (req, res) => {
  try {
    const id = req.params.id;
    const updatebody = req.body;

    const updateBook = await BooksModel.findById(
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
