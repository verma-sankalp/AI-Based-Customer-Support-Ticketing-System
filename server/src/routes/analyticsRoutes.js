const router = require("express").Router();
const { getDashboardMetrics, getAgentPerformance, getSatisfactionMetrics } = require("../controllers/analyticsController");

router.get("/dashboard", getDashboardMetrics);
router.get("/agent-performance", getAgentPerformance);
router.get("/satisfaction", getSatisfactionMetrics);

module.exports = router;
