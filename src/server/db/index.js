const mysql = require('mysql');
const promise = require('bluebird');
const password = require('../../../config');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: 'budget'
});

connection = promise.promisifyAll(connection);

connection.connect();
module.exports = connection;
