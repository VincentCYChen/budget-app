const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');

app.use(bodyParser.json());

app.use('/api', router);

app.listen(8080, () => {
  console.log('connected to 8080...');
});