const router = require("express").Router();
const { getSlaStatus, getSlaBreaches } = require("../controllers/slaController");

router.get("/status", getSlaStatus);
router.get("/breaches", getSlaBreaches);

module.exports = router;
