const journalCtrl = require("../controllers/journalCtrl");
const journal = require("../moddels/journalEntryModel");

const router = require("express").Router();

router.post("/journal-entry", journalCtrl.createJournal);

//get data from Mongodb
router.get("/journal-entry", async (req, res) => {
  try {
    const studentsData = await journal.find({});
    res.send(studentsData);
    console.log({ studentsData });
  } catch (error) {
    res.send(error);
  }
});
//get max value
router.get("/Journal-Entry2", async (req, res) => {
  try {
    const Data = await journal.aggregate([
      { $group: { _id: null, max: { $max: "$trans" } } },
    ]);
    res.send(Data);
  } catch (error) {
    res.send(error);
  }
});

// Get by id
router.get("/journal-entry/:Number", async (req, res) => {
  try {
    const Number = req.params.Number;
    const studentData = await journal.findOne({ Number });
    res.send(studentData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update data with id
router.patch("/journal-entry/:Number", async (req, res) => {
  try {
    const Number = req.params.Number;
    const updateStudent = await journal.updateOne({ Number }, req.body, {
      new: true,
    });
    res.send(updateStudent);
    console.log(updateStudent);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
