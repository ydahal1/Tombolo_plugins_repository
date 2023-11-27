const express = require("express");
const router = express.Router();

router.get("/insightFlowAnalyzer", (req, res) => {
  res.send("    <h1>Hello From INSIGHT FLOW ANALYZER !!!</h1>");
});

module.exports = router;
