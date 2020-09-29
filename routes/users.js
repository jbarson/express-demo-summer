const express = require('express');
const router = express.Router();

router.get('/:username', (req, res) => {
  console.log('the user is: ', req.params.username);
  const user = req.params.username;
  let returnedData = user=== 'Lauren' ? 'Educator': 'someone else' 
  res.send(returnedData);
})

module.exports = router;