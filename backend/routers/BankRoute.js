const express = require("express");
const router = express.Router();
const bankCtrl = require("../controllers/BankCtrl");
const bank = require("../moddels/BankModel");

router.get("/", (req, res) => {
  console.log("Home Page");
});

//Post data
router.post("/bank", bankCtrl.codeCreate);

//get data from Mongodb
router.get("/bank", async (req, res) => {
  try {
    const studentsData = await bank.find({});
    res.send(studentsData);
    console.log({ studentsData });
  } catch (error) {
    res.send(error);
  }
});

// Get by id
router.get("/bank/:Account_no", async (req, res) => {
  try {
    const Account_no = req.params.Account_no;
    const studentData = await bank.findOne({ Account_no });
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update data with id
router.patch("/bank/:Account_no", async (req, res) => {
  try {
    const Account_no = req.params.Account_no;
    const updateStudent = await bank.updateOne({ Account_no }, req.body, {
      new: true,
    });
    res.send(updateStudent);
    console.log(updateStudent);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

// Delete data with id
router.delete("/bank/:Account_no", async (req, res) => {
  try {
    const deletedata = await bank.deleteOne({
      Account_no: req.params.Account_no,
    });
    res.send(deletedata);
    console.log(deletedata);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

module.exports = router;
