const costCtrl = require("../controllers/costCenter");
const costcenter = require("../moddels/costCenter");

const router = require("express").Router();

router.post("/cost-center", costCtrl.createCost);

router.get("/cost-center", async (req, res) => {
  try {
    const response = await costcenter.find({});
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
