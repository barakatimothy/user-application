const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Phone data will go here");
});

module.exports = router;
