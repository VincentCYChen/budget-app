const mysql = require('mysql');
const promise = require('bluebird');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'budget'
});

connection = promise.promisifyAll(connection);

connection.connect();
module.exports = connection;