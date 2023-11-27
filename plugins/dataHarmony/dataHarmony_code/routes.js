const express = require("express");
const router = express.Router();

router.get("/dataHarmony", (req, res) => {
  res.send("   <h1> Hello From DATA HARMONY !!! </h1>");
});

module.exports = router;
