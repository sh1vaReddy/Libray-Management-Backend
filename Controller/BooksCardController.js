const BooksCard = require('../Model/BooksCard');

exports.CreateBookCard = async (req, res) => {
    try {
        const BookscardData = {
            BookID: req.body.BookID,
            BooksTitle: req.body.BooksTitle,
            AuthorName: req.body.AuthorName,
            RollNo: req.body.RollNo,
            Branch: req.body.Branch,
            DateofIssue: req.body.DateofIssue,
        };

        const Bookscard = await BooksCard.create(BookscardData);
        res.send(Bookscard);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.GetBookCard=async (req,res) =>
{
    try{
        const BookCardData=await BooksCard.find()
        res.send(BookCardData)
    }
    catch(error){
        res.send(error)
    }
}

exports.GetBookCardByid = async (req,res) =>
{
    try{
        const id = req.params.id;
        const bookscard=await BooksCard.findById(id)
        res.send(bookscard)

    }
    catch(error)
    {
        res.send(error)
    }
}


exports.updateBooksbyid= async (req,res) =>
{
    try{
        const id=req.params.id;
        const body=req.body;

        await BooksCard.findByIdAndDelete({BookID:id},body)
    }
    catch(error)
    {
        res.send(error)
    }
}


exports.DeleteBooksCard=async (req,res) =>
{
    try{
        const id=req.params.id;
        const deletedtat =await BooksCard.findByIdAndDelete(id)
        res.send(deletedtat)
    }
    catch(error)
    {
        res.send(error)
    }
}