const express = require("express");
const router = express.Router();
const {
  CreateDueData,
  GetallDueData,
  GetallByroll,
  updateBydata,
  deleteDueData
} = require("../Controller/DueDataCintroller");

router.post("/DueData/add", CreateDueData);
router.get("/DueData/get", GetallDueData);
router.get("/DueData/roll", GetallByroll);
router.put("/DueData/update", updateBydata);
router.delete("/DueData/delete/:id",deleteDueData);



module.exports = router;
