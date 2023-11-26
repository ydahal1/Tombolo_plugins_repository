const express = require("express");
const router = express.Router();

router.get("/dataForgeOptimizer", (req, res) => {
  res.send("Hello From DATA FORGE OPTIMIZER !!!");
});

module.exports = router;
