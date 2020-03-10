const express = require('express');
const app = express();

console.log('ran');
app.get('/hey', (req, res) => res.send('hello world!'));

app.listen(8080, () => {
  console.log('connected to 8080...');
});
