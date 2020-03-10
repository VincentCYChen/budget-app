const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//app.get('/hey', (req, res) => res.send('hello world!'));
app.route('/api')
  .get((req, res) => {
    // get all data on user transactions
    res.send('hello this gets all data');
  })
  .post((req, res) => {
    // post data from input form into the database
    res.send('hello this posts input data');
  });

app.route('/api/:id')
  .delete((req, res) => {
    // delete a given record in the database by a given id
    res.send('hello this deletes a given record id');
  })
  .put((req, res) => {
    // update id in database with provided data
    res.send('hello this updates a given record id')
  });


app.listen(8080, () => {
  console.log('connected to 8080...');
});
