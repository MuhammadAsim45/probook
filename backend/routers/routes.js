const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Home Page");
});

module.exports = router;
