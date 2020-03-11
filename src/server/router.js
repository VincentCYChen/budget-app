var express = require('express');
var { getData, inputData } = require('./controller');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  getData(req, res);
});
router.post('/', (req, res) => {
  // post data from input form into the database
  inputData(req, res);
});
router.delete('/:id', (req, res) => {
  // delete a given record in the database by a given id
  res.send('hello this deletes a given record id');
});
router.put('/:id', (req, res) => {
  // update id in database with provided data
  res.send('hello this updates a given record id');
});

module.exports = router;
