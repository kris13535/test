var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'frhxyhbv',
    database: 'GuessGame',
    port: '3306'
});
connection.connect();


module.exports = connection;