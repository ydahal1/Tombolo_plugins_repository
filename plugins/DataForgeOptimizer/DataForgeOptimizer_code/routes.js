const express = require("express");
const router = express.Router();

router.get("/dataForgeOptimizer", (req, res) => {
  res.send("    <h1>Hello From DATA FORGE OPTIMIZER !!! </h1>");
});

module.exports = router;
