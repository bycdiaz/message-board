const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('form', {
    title: 'Message Board',
    headline: "Add new messages here!"
  });
});

module.exports = router;
