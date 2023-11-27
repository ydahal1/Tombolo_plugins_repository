const express = require("express");
const router = express.Router();

router.get("/dataPulse", (req, res) => {
  res.send("    <h1>Hello From DATA PULSE !!! <h1>");
});

module.exports = router;
