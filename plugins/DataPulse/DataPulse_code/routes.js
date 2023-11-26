const express = require("express");
const router = express.Router();

router.get("/dataPulse", (req, res) => {
  res.send("Hello From DATA PULSE !!!");
});

module.exports = router;
