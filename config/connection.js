/**
 * Created by Ev on 5/5/17.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8000,
    user: 'root',
    password: '',
    database:'burgers_db'
});

module.exports=connection;