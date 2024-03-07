const mongoose = require('mongoose');

const DueDataSchema=new mongoose.Schema({
    BookID:{
        type:Number,
        require:true,
    },
    Dateofissue:{
        type:Date,
        require:true,
        default:Date.now()
    },
    BookTitle:{
        type:String,
        requie:true,
    },
    BookAuthor:{
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
    DueDate:{
        type:Date,
        require:true,
        default:Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days from now, in milliseconds
    }
})

module.exports=mongoose.model("DueData",DueDataSchema);
