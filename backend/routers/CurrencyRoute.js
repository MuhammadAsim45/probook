const express = require("express");
const router = express.Router();
const currencyCtrl = require("../controllers/CurrencyCtrl");
const currency = require("../moddels/CurrencyModel");

router.post("/currency", currencyCtrl.createCurrency);

//get data from Mongodb
router.get("/currency", async (req, res) => {
  try {
    const studentsData = await currency.find({});
    res.send(studentsData);
    console.log({ studentsData });
  } catch (error) {
    res.send(error);
  }
});

// Get by id
router.get("/currency/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const studentData = await currency.findOne({ Code });
    console.log(studentData);
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update data with id
router.patch("/currency/:Code", async (req, res) => {
  try {
    const Code = req.params.Code;
    const updateStudent = await currency.updateOne({ Code }, req.body, {
      new: true,
    });
    res.send(updateStudent);
    console.log(updateStudent);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

// Delete data with id
router.delete("/currency/:Code", async (req, res) => {
  try {
    const deletedata = await currency.deleteOne({ Code: req.params.Code });
    res.send(deletedata);
    console.log(deletedata);
  } catch (error) {
    return res.status(500).json({ msg: error });
    // return res.status(500).send(error);
  }
});

module.exports = router;
