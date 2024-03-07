const mongoose = require('mongoose');

const BooksIssueSchema = new mongoose.Schema({
    BookID: {
        type: Number,
        required: true,
    },
    BookTitle: {
        type: String,
        required: true,
    },
    RollNo: {
        type: String,
        required: true,
    },
    Branch: {
        type: String,
        required: true,
    },
    Signature: {
        type: String,
        required: true,
    },
    IssuedDate: {
        type: Date,
        default: Date.now,
    }
});

const BooksIssueModel = mongoose.model('BooksIssue', BooksIssueSchema);

module.exports = BooksIssueModel;
