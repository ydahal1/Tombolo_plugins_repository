const express = require("express");
const router = express.Router();

router.get("/saturn", (req, res) => {
  res.send("Hello From SATURN !!!");
});

module.exports = router;
