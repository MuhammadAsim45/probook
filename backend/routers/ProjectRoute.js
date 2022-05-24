const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/ProjectCtrl");
const oprj = require("../moddels/ProjectModel");

router.get("/", (req, res) => {
  console.log("Home Page");
});

//Route
router.post("/oprj", userCtrl.codeCreate);

//get data from Mongodb
router.get("/oprj", async (req, res) => {
  try {
    const studentsData = await oprj.find({});
    res.send(studentsData);
  } catch (error) {
    res.send(error);
  }
});

// Get by id
router.get("/oprj/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const studentData = await oprj.findOne({ Code });
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update data with id
router.patch("/oprj/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const updateStudent = await oprj.updateOne({ Code }, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (error) {
    return res.status(500).json({ msg: error });
    // return res.status(500).send(error);
  }
});

// Delete data with id
router.delete("/oprj/:Code", async (req, res) => {
  try {
    // const Code = req.params.Name;
    const deletedata = await oprj.deleteOne({ Code: req.params.Code });
    res.send(deletedata);
    console.log(deletedata);
  } catch (error) {
    return res.status(500).json({ msg: error });
    // return res.status(500).send(error);
  }
});

module.exports = router;
