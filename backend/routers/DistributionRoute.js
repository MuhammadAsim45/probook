const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/DistributionCtrl");
const distribution = require("../moddels/DistributionModel");

router.get("/", (req, res) => {
  console.log("Home Page");
});

//Post data
router.post("/distribution", userCtrl.codeCreate);

// Get by id
router.get("/distribution/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const studentData = await distribution.findOne({ Code });
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update dimension data from mongodb
router.patch("/distribution/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const updateStudent = await distribution.updateOne({ Code }, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (error) {
    return res.status(500).json({ msg: error });
    // return res.status(500).send(error);
  }
});

//get data from Mongodb
router.get("/distribution", async (req, res) => {
  try {
    const studentsData = await distribution.find({});
    res.send(studentsData);
  } catch (error) {
    res.send(error);
  }
});

// Delete data with id
router.delete("/distribution/:Code", async (req, res) => {
  try {
    // const Code = req.params.Name;
    const deletedata = await distribution.deleteOne({ Code: req.params.Code });
    res.send(deletedata);
    console.log(deletedata);
  } catch (error) {
    return res.status(500).json({ msg: error });
    // return res.status(500).send(error);
  }
});

module.exports = router;
