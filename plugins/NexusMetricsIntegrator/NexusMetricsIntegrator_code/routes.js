const router = express.Router();

router.get("/nexusMetricsIntegrator", (req, res) => {
  res.send("Hello From NEXUS METRICS INTEGRATOR !!!");
});

module.exports = router;
