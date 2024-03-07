const DueDatamodel = require("../Model/DueData");

exports.CreateDueData = async (req, res) => {
  try {
    const DueData = await DueDatamodel.create({
      BookID: req.body.BookID,
      Dateofissue: req.body.Dateofissue,
      BookTitle: req.body.BookTitle,
      BookAuthor: req.body.BookAuthor,
      RollNo: req.body.RollNo,
      Branch: req.body.Branch,
      DueDate: req.body.DueDate,
    });

    res
      .status(201)
      .json({ message: "Due data created successfully", data: DueData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create due data", error: error });
  }
};

exports.GetallDueData = async (req, res) => {
  try {
    const Duedata = await DueDatamodel.find();
    res.status(200).json({ message: "All Due Data", data: Duedata });
  } catch (error) {
    res.send(error);
  }
};


exports.GetallByroll = async (req, res) => {
    try {
        const rollno = req.body.rollno;
        const data = await DueDatamodel.find({ RollNo: rollno });
        res.json(data); // Send data as JSON
    } catch (error) {
        res.status(500).json({ message: 'Failed to get due data', error: error });
    }
}

exports.updateBydata=async (req,res)=>{
  try{
    const date=req.body.Dateofissue;
    const update=await DueDatamodel.updateOne({Dateofissue:date},{$set:{DueDate:req.body.DueDate}});
    res.status(200).json({message:"Due Date Updated",data:update});
  }
  catch(error)
  {
    res.status(500).json({ message: 'Failed to get due data', error: error });
  }
  }

  exports.deleteDueData = async (req, res) => {
    try {
        const id = req.params.id; 
        const deletedata = await DueDatamodel.findByIdAndDelete(id);
        if (!deletedata) {
            return res.status(404).json({ message: "Due data not found" });
        }
        res.status(200).json({ message: "Due data deleted", data: deletedata });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete due data', error: error });
    }
};

