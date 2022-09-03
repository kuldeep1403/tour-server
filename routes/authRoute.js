const express = require("express");
const { protect } = require("../controller/authController");

const router = express.Router();

router.get("/getuser", protect,);

module.exports = router;
