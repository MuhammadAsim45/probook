const express = require("express");
const router = express.Router();
const ChartAccountCtrl = require("../controllers/Chart_AccountCtrl");
const chartOfAccount = require("../moddels/Chart_AccountModel");

router.get("/", (req, res) => {
  console.log("Home Page");
});

//Post data
router.post("/chartOfAccount", ChartAccountCtrl.codeCreate);

//get dimension data from mongodb
router.get("/chartOfAccount", async (req, res) => {
  try {
    const studentsData = await chartOfAccount.find({});
    res.send(studentsData);
    console.log({ studentsData });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get by id
router.get("/chartOfAccount/:GL_Account", async (req, res) => {
  try {
    const GL_Account = req.params.GL_Account;
    const studentData = await chartOfAccount.findOne({ GL_Account });
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get(`/chartOfAccountp/:Group_Mask`, async (req, res) => {
  try {
    const Group_Mask = req.params.Group_Mask;
    const studentData = await chartOfAccount.find({ Group_Mask });
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});
//get with GroupMask && Level
router.get(`/chartOfAccountl/:Group_Mask/:Level`, async (req, res) => {
  try {
    const { Group_Mask, Level } = req.params;
    const studentData = await chartOfAccount.find({
      Group_Mask,
      Level: { $lte: Level },
    });

    res.send(studentData);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

// Update data with id
router.patch("/chartOfAccount/:GL_Account", async (req, res) => {
  try {
    const GL_Account = req.params.GL_Account;
    const updateStudent = await chartOfAccount.updateOne(
      { GL_Account },
      req.body,
      { new: true }
    );
    res.send(updateStudent);
    console.log(updateStudent);
  } catch (error) {
    // return res.status(500).send(error);
    return res.status(500).json({ msg: error });
  }
});

module.exports = router;
