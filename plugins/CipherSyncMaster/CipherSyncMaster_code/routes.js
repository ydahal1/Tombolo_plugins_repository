const express = require("express");
const router = express.Router();

router.get("/cipherSyncMaster", (req, res) => {
  res.send("    <h1>Hello From CIPHER SYNC MASTER !!! </h1>");
});

module.exports = router;
