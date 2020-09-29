const express = require('express');
const router = express.Router();

router.route('/')
  .get((_req, res) => res.send('get a contact'))
  .post((_req, res) => res.send('create a contact'))
  .delete((_req, res) => res.send('delete a contact'));

module.exports = router;