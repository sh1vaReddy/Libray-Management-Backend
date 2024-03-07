const mongoose = require("mongoose");
const BooksID = require("./LibrayBooks");
const { type } = require("express/lib/response");

const BooksReturnSchema = new mongoose.Schema({
  BookID: {
    type: Number,
    require: true,
    unique: true,
  },
  BookTitle: {
    type: String,
    require: true,
  },
  RollNo: {
    type: Number,
    require: true,
  },
  IssuedDate: {
    type: mongoose.Schema.ObjectId,
    ref: "BooksIssue",
    require: true,
  },
  Signature:{
    type:String,
    require:true,
  },
  returnofdata:{
    type:Date,
    require:true,
    default:Date.now()
  },
  Status:{
    type:String,
    require:true,
    default:"Returned"
  },
});


module.exports = mongoose.model("BooksReturn", BooksReturnSchema);