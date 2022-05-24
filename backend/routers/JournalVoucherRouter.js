const express = require("express");
const router = express.Router();
const JVCtrl = require("../controllers/JournalVoucherCtrl");
const JV = require("../moddels/JournalVoucherModel");

router.get("/", (req, res) => {
  console.log("Home Page");
});

//Post data
router.post("/JV", JVCtrl.codeCreate);

//get all data
router.get("/JV", async (req, res) => {
  try {
    const Data = await JV.find({});
    res.send(Data);
    console.log({ Data });
  } catch (error) {
    res.send(error);
  }
});

//get max value
router.get("/JVmax", async (req, res) => {
  try {
    // const jvnumber = req.params.jvnumber;
    const Data = await JV.aggregate([
      { $group: { _id: null, max: { $max: "$JVNumber" } } },
    ]);
    res.send(Data);
  } catch (error) {
    res.send(error);
  }
});

// Update data with id
router.patch("/JV/:JVNumber", async (req, res) => {
  try {
    const JVNumber = req.params.JVNumber;
    const updateStudent = await JV.updateOne({ JVNumber }, req.body, {
      new: true,
    });
    res.send(updateStudent);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

module.exports = router;
