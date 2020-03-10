const mysql = require('mysql');
const promise = require('bluebird');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'budget'
});

connection = promise.promisifyAll(connection);

connection.connect();
module.exports = connection;
