const express = require('express');
const router  = express.Router();
const mailer = require('../helpers/mailer');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('form');
});

router.post('/', (req, res) => {
  let options = req.body;
  options.filename = 'verify';
  mailer.send(options)
    .then(()=>{
      res.status(200).send('The mail was sent succesfully')
    })
    .catch(err => {
      console.log('Something went wrong ', err);
    });
});

module.exports = router;
