const express = require("express");
const router = express.Router();
const dimensionCtrl = require("../controllers/dimensionCtrl");
const dimension = require("../moddels/DimensionsModel");

router.get("/", (req, res) => {
  console.log("Home Page");
});

//Post data
router.post("/dimension", dimensionCtrl.codeCreate);

//update dimension data from mongodb
router.patch("/dimension/:DimCode", async (req, res) => {
  try {
    const DimCode = req.params.DimCode;
    const updateStudent = await dimension.updateOne({ DimCode }, req.body, {
      new: true,
    });
    res.send(updateStudent);
    console.log(updateStudent);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//get dimension data from mongodb
router.get("/dimension", async (req, res) => {
  try {
    const studentsData = await dimension.find({});
    res.send(studentsData);
    console.log({ studentsData });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
