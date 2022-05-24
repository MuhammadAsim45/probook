const express = require("express");
const router = express.Router();
const taxCtrl = require("../controllers/TaxCtrl");
const tax = require("../moddels/TaxModel");

router.post("/tax", taxCtrl.createTax);

//get data from Mongodb
router.get("/tax", async (req, res) => {
  try {
    const studentsData = await tax.find({});
    res.send(studentsData);
    console.log({ studentsData });
  } catch (error) {
    res.send(error);
  }
});

// Get by id
router.get("/tax/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const studentData = await tax.findOne({ Code });
    console.log(studentData);
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update data with id
router.patch("/tax/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const updateStudent = await tax.updateOne({ Code }, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

// Delete data with id
router.delete("/tax/:Code", async (req, res) => {
  try {
    // const Code = req.params.Name;
    const deletedata = await tax.deleteOne({ Code: req.params.Code });
    res.send(deletedata);
    console.log(deletedata);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

module.exports = router;
