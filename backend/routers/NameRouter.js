const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/NamesCtrl");
const name = require("../moddels/NamesModel");

router.get("/", (req, res) => {
  console.log("Home Page");
});

//Route
router.post("/name", userCtrl.codeCreate);

//get data from Mongodb
router.get("/name", async (req, res) => {
  try {
    const studentsData = await name.find({});
    res.send(studentsData);
  } catch (error) {
    res.send(error);
  }
});

// Get by id
router.get("/name/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const studentData = await name.findOne({ Code }, req.body);
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update data with id
router.patch("/name/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const updateStudent = await name.updateOne({ Code }, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
