const express = require('express');
const commentsRoute = require('./comments');

const router = express.Router();

router.use('/comments', commentsRoute);

router.get('/test', (req, res) => {
  return res.send('WORKING');
});

module.exports = router;
