const express = require("express");
const router = express.Router();

router.get("/saturn", (req, res) => {
  res.send("    <h1>Hello From SATURN !!!</h1>");
});

module.exports = router;
