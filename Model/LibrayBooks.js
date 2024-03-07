const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const BooksModel=new mongoose.Schema({
    BooksID:{
        type:Number,
        required:true,
        unique:true
    },
    BookName:{
        type:String,
        required:true,
    },
    AuthorName:{
        type:String,
        required:true,
    },
    Edition:{
        type:Number,
        required:true,
    },
    page:{
        type:Number,
        pages:required,

    },
    price:{
        type:Number,
        required:true,
    },
    supplier:{
        type:String,
        required:true,
    },
    NoofBooks :{
        type:Number,
        required:true,
    },
   
})

module.exports=mongoose.model('Books',BooksModel);