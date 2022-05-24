const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.post("/signup", userCtrl.register);

router.get("/refresh_token", userCtrl.refreshToken);

router.get("/logout", userCtrl.logout);

module.exports = router;
