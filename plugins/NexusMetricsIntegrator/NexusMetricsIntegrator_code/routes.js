const express = require("express");
const router = express.Router();

router.get("/nexusMetricsIntegrator", (req, res) => {
  res.send("  <h1>Hello From NEXUS METRICS INTEGRATOR !!! </h1>");
});

module.exports = router;
