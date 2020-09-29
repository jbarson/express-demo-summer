const express = require('express');
const router = express.Router();

router.get('/',  (req, res) => {
  console.log(req.query.order);

  console.log(req.query.shoe.color);

  console.log(req.query.shoe.type);

  res.send('stuff');
});

module.exports = router;