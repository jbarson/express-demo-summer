const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('boom')
  res.send('This is the about page');
  console.log(req);
});

module.exports = router;