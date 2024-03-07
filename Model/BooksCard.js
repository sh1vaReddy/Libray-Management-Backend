
const mongoose = require('mongoose');


const BooksCardSchema=new mongoose.Schema({
    BookID:{
        type:Number,
        require:true,
        unique:true,
    },
    BooksTitle:{
        type:String,
        require:true,
    },
    AuthorName:{
        type:String,
        require:true,
    },
    RollNo:{
        type:Number,
        require:true,
    },
    Branch:{
        type:String,
        require:true,
    },
    DateofIssue:{
        type:Date,
        require:true,
        default:Date.now()
    }
})

module.exports=mongoose.model("BooksCard",BooksCardSchema)