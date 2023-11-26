const express = require("express");
const router = express.Router();

router.get("/orbit", (req, res) => {
  res.send("Hello From ORBIT !!!");
});

module.exports = router;
