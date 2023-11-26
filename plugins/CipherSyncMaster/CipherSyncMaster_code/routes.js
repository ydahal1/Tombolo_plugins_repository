const express = require("express");
const router = express.Router();

router.get("/cipherSyncMaster", (req, res) => {
  res.send("Hello From CIPHER SYNC MASTER !!!");
});

module.exports = router;
